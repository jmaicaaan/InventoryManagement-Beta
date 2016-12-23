namespace app{
    'use strict';

    class CategoriesService implements ICategoriesService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService){
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
    }

    CategoriesService.$inject = ['ToastService', 'DialogService'];
    
    angular
        .module('inventory-management')
        .service('CategoriesService', CategoriesService);
}