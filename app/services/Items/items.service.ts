namespace app{
    'use strict';

    class ItemsService implements IItemsService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService){}

        public listItems: Array<IItem> = [];
        public listBrands: Array<IBrand> = [];
        public listUnits: Array<IUnit> = [];
        public listCategories: Array<ICategory> = [];
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

    ItemsService.$inject = ['ToastService', 'DialogService'];
    
    angular
        .module('inventory-management')
        .service('ItemsService', ItemsService);
}