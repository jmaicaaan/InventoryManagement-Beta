namespace app{
    'use strict';

    class StocksService implements IStocksService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService, 
            private BaseService: IBaseService){
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

         /**
         * add
         */
        public add(stock: IStock) {
            
            let stockModel = {
                stock: stock,
                item: stock.item
            };

            this.BaseService
                .post_request('/addStock', stockModel)
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
        public update(stock: IStock) {
            
            let stockModel = {
                stock: stock
            };

            this.BaseService
                .post_request('/editStock', stockModel)
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
                .post_request('/viewStocks', {})
                .then((resp) => {
                    this.listStocks = resp.data.listStocks;
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * remove
         */
        public remove(stock: IStock) {
            
            let stockModel = {
                stock: stock
            };

            this.BaseService
                .post_request('/deleteStock', stockModel)
                .then((resp) => {
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }
    }

    StocksService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    
    angular
        .module('inventory-management')
        .service('StocksService', StocksService);
}