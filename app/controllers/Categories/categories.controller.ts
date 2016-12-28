namespace app {
    'use strict';

    class CategoriesController extends BaseController {

        constructor(private $mdDialog: angular.material.IDialogService,
            protected CategoriesService: ICategoriesService, BaseService: IBaseService) {
            super(BaseService);
            this.viewCategories();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        /**
         * showDialog
         */
        public showDialog(templateUrl, category) {

            let config: angular.material.IDialogOptions = {
                templateUrl: templateUrl,
                controller: CategoriesDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    category: category
                }
            };

            this.CategoriesService.showDialog(config);
        }

        /**
         * showConfirmDialog
         */
        public showConfirmDialog(confirmConfig) {
            return this.CategoriesService.showDialog(confirmConfig);
        }

        /**
        * showAddDialog
        */
        public showAddDialog() {

            let templateUrl = 'app/templates/Categories/categories-dialog.html',
                category = {};

            this.showDialog(templateUrl, category);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(category) {

            let templateUrl = 'app/templates/Categories/categories-edit-dialog.html';

            this.showDialog(templateUrl, category);
        }


        /**
         * viewCategories
         */
        public viewCategories() {
            this.view_without_data('/viewCategories')
                .then((categories) => {
                    this.CategoriesService.listCategories = categories.data.listCategories;
                })
                .catch((err) => {
                    this.CategoriesService.showToast(err);
                });
        }

        /**
         * editCategory
         */
        public editCategory(category) {
            this.showEditDialog(category);
        }

        /**
         * deleteCategory
         */
        public deleteCategory(category) {

            let confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this category?')
                .textContent('Category Name: ' + category.name)
                .ok('Delete')
                .cancel('Cancel')

            this.CategoriesService.showDialog(confirmConfig)
                .then(() => {

                    let categoryModel = {
                        category: category
                    };

                    this.remove('/deleteCategory', categoryModel)
                        .then((resp) => {
                            this.viewCategories();
                            this.CategoriesService.showToast(resp.data.message);
                        })
                        .catch((err) => {
                            this.CategoriesService.showToast(err);
                        });
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
                });
        }
    }

    class CategoriesDialogController extends CategoriesController {

        constructor($mdDialog: angular.material.IDialogService, CategoriesService: ICategoriesService,
            BaseService: IBaseService, private category: ICategory) {
            super($mdDialog, CategoriesService, BaseService);
        }

        /**
         * addCategory
         */
        public addCategory(category: ICategory) {

            let categoryModel = {
                category: category
            };

            this.add('/addCategory', categoryModel)
                .then((resp) => {
                    this.CategoriesService.hideDialog();
                    this.viewCategories();
                    this.CategoriesService.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.CategoriesService.showToast(err);
                });
        }

        /**
         * editCategory
         */
        public editCategory() {

            let categoryModel = {
                category: this.category
            };

            this.update('/editCategory', categoryModel)
                .then((resp) => {
                    this.CategoriesService.hideDialog();
                    this.viewCategories();
                    this.CategoriesService.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.CategoriesService.showToast(err);
                });
        }
    }

    CategoriesController.$inject = ['$mdDialog', 'CategoriesService', 'BaseService'];
    CategoriesDialogController.$inject = ['$mdDialog', 'CategoriesService', 'BaseService', 'category'];

    angular
        .module('inventory-management')
        .controller('CategoriesController', CategoriesController);
}