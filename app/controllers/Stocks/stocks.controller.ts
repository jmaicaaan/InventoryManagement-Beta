namespace app {
    'use strict';

    class StocksController{

        constructor(private $mdDialog: angular.material.IDialogService, protected StocksService: IStocksService,
            protected $timeout: angular.ITimeoutService) {
            this.viewStocks();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        public stockPromise: angular.IPromise<any>;
        public isSearchOpen = false;
        public queryText = '';

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
            let templateUrl = 'templates/Stocks/stocks-dialog.html',
                stock = {};

            this.showDialog(templateUrl, stock);
        }

        /**
         * viewStocks
         */
        public viewStocks() {
            this.stockPromise = this.$timeout(() => {
                this.StocksService.view();
            }, 2000);
        }

         /**
         * toggleSearch
         */
        public toggleSearch() {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        }
    }

    class StocksDialogController extends StocksController {

        constructor($mdDialog: angular.material.IDialogService, StocksService: IStocksService, 
            private ItemsService: IItemsService, private stock: IStock, $timeout: angular.ITimeoutService,) {
            super($mdDialog, StocksService, $timeout);
        }

        public quantity = [];

        /**
        * addStock
        */
        public addStock(stock: IStock) {
            this.StocksService.add(stock);
        }

        /**
         * loadItems
         */
        public loadItems() {
            this.ItemsService.view();
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

    StocksController.$inject = ['$mdDialog', 'StocksService', '$timeout'];
    StocksDialogController.$inject = ['$mdDialog', 'StocksService', 'ItemsService', 'stock', '$timeout'];

    angular
        .module('inventory-management')
        .controller('StocksController', StocksController);
}