namespace app {
    'use strict';

    class StocksController extends BaseController {

        constructor(private $mdDialog: angular.material.IDialogService,
            protected StocksService: IStocksService, BaseService: IBaseService) {
            super(BaseService);
            this.viewStocks();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        /**
         * ShowDialog
         */
        public showDialog(templateUrl, stock) {

            let config: angular.material.IDialogOptions = {
                templateUrl: templateUrl,
                controller: StocksDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    stock: stock
                }
            };

            this.StocksService.showDialog(config);
        }

        /**
         * showAddDialog
         */
        public showAddDialog() {
            let templateUrl = 'app/templates/Stocks/stocks-dialog.html',
                stock = {};

            this.showDialog(templateUrl, stock);
        }

        /**
         * viewStocks
         */
        public viewStocks() {
            this.view_without_data('/viewStocks')
                .then((stocks) => {
                    this.StocksService.listStocks = stocks.data.listStocks;
                })
                .catch((err) => {
                    this.StocksService.showToast(err);
                });
        }
    }

    class StocksDialogController extends StocksController {

        constructor($mdDialog: angular.material.IDialogService, StocksService: IStocksService, BaseService: IBaseService,
            private ItemsService: IItemsService, private stock: IStock) {
            super($mdDialog, StocksService, BaseService);
        }

        public quantity = [];

        /**
        * addStock
        */
        public addStock(stock: IStock) {

            let stockModel = {
                stock: stock,
                item: stock.item
            }

            this.add("/addStock", stockModel)
                .then((resp) => {
                    this.StocksService.hideDialog();
                    this.viewStocks();
                    this.StocksService.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.StocksService.showToast(err);
                });
        }

        /**
         * loadItems
         */
        public loadItems() {
            return this.view_without_data('/viewItems')
                .then((items) => {
                    this.ItemsService.listItems = items.data.listItems;
                    return this.ItemsService.listItems;
                })
                .catch((err) => {
                    this.ItemsService.showToast(err);
                });
        }

        /**
         * generateQuantity
         */
        public generateQuantity() {
            let quantity = [];
            for (var i = 1; i <= 100; i++) {
                quantity.push(i);
            }
            this.quantity = quantity;
        }
    }

    StocksController.$inject = ['$mdDialog', 'StocksService', 'BaseService'];
    StocksDialogController.$inject = ['$mdDialog', 'StocksService', 'BaseService', 'ItemsService', 'stock'];

    angular
        .module('inventory-management')
        .controller('StocksController', StocksController);
}