namespace app{
    'use strict';

    class StocksService implements IStocksService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService){
        }

        public listStocks: Array<IStock> = [];
        
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

    StocksService.$inject = ['ToastService', 'DialogService'];
    
    angular
        .module('inventory-management')
        .service('StocksService', StocksService);
}