namespace app {
    'use strict';

    class CategoriesController{

        constructor(private $mdDialog: angular.material.IDialogService, protected CategoriesService: ICategoriesService,
            protected $timeout: angular.ITimeoutService) {
            this.viewCategories();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        public categoryPromise: angular.IPromise<any>;
        public isSearchOpen = false;
        public queryText = '';

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

            return this.CategoriesService.showDialog(config);
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

            let templateUrl = 'templates/Categories/categories-dialog.html',
                category = {};

            this.showDialog(templateUrl, category);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(category) {
            let templateUrl = 'templates/Categories/categories-edit-dialog.html';
            this.showDialog(templateUrl, category);
        }

        /**
         * viewCategories
         */
        public viewCategories() {
            this.categoryPromise = this.$timeout(() => {
                this.CategoriesService.view();
            }, 2000);
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
                    this.CategoriesService.remove(category);
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
                });
        }

         /**
         * toggleSearch
         */
        public toggleSearch() {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        }
    }

    class CategoriesDialogController extends CategoriesController {

        constructor($mdDialog: angular.material.IDialogService, CategoriesService: ICategoriesService, private category: ICategory,
            $timeout: angular.ITimeoutService) {
            super($mdDialog, CategoriesService, $timeout);
        }

        /**
         * addCategory
         */
        public addCategory(category: ICategory) {
            this.CategoriesService.add(category);
        }

        /**
         * editCategory
         */
        public editCategory() {
            this.CategoriesService.update(this.category);
        }
    }

    CategoriesController.$inject = ['$mdDialog', 'CategoriesService', '$timeout'];
    CategoriesDialogController.$inject = ['$mdDialog', 'CategoriesService', 'category', '$timeout'];

    angular
        .module('inventory-management')
        .controller('CategoriesController', CategoriesController);
}