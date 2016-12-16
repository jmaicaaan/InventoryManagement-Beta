namespace app{
    'use strict';

    class StocksController extends BaseController<IStock> implements IDialogController{

        constructor(private $mdDialog: angular.material.IDialogService){
            super();
        }

        /**
         * ShowDialog
         */
        public showDialog() {
            this.$mdDialog.show({
                templateUrl: 'app/templates/Stocks/stocks-dialog.html'
            });
        }

        /**
         * HideDialog
         */
        public hideDialog() {
            
        }
    }

    class StocksDialogController extends StocksController{

        public addStocks(stock: IStock){
            this.add("Sample URL", stock);
        }
    }

    angular
        .module('inventory-management')
        .controller('StocksController', StocksController);
}