namespace app{
    'use strict';

    class SuppliersService implements ISupplierService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService){}

        public listSuppliers: Array<ISupplier> = [];

        
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

    SuppliersService.$inject = ['ToastService', 'DialogService'];
    
    angular
        .module('inventory-management')
        .service('SuppliersService', SuppliersService);
}