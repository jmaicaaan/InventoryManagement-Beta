namespace app{
    'use strict';

    class CategoriesService implements ICategoriesService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService,
            private BaseService: IBaseService){
        }

        public listCategories: Array<ICategory> = [];
        
        /**
         * showToast
         */
        public showToast(message) {
            this.ToastService.showToast(message);
        }

        /**
         * showDialog
         */
        public showDialog(config) {
           return this.DialogService.showDialog(config);
        }

        /**
         * hideDialog  
         */
        public hideDialog() {
            this.DialogService.hideDialog();
        }

        /**
         * add
         */
        public add(category: ICategory) {
            
            let categoryModel = {
                category: category
            };

            this.BaseService
                .post_request('/addCategory', categoryModel)
                .then((resp) => {
                    this.hideDialog();
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * update
         */
        public update(category: ICategory) {
            
            let categoryModel = {
                category: category
            };

            this.BaseService
                .post_request('/editCategory', categoryModel)
                .then((resp) => {
                    this.hideDialog();
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * view
         */
        public view() {
            this.BaseService
                .post_request('/viewCategories', {})
                .then((resp) => {
                    this.listCategories = resp.data.listCategories;
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * remove
         */
        public remove(category: ICategory) {

            let categoryModel = {
                category: category
            };

            this.BaseService
                .post_request('/deleteCategory', categoryModel)
                .then((resp) => {
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }
    }

    CategoriesService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    
    angular
        .module('inventory-management')
        .service('CategoriesService', CategoriesService);
}