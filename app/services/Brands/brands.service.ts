namespace app{
    'use strict';

    class BrandsService implements IBrandService, IDialogService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService){
        }

        public listBrands: Array<IBrand> = [];
        
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

    BrandsService.$inject = ['ToastService', 'DialogService'];
    
    angular
        .module('inventory-management')
        .service('BrandsService', BrandsService);
}