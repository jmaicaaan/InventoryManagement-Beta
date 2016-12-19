namespace app{
    'use strict';

    class StocksController extends BaseController<IStock> implements IDialogController{

        constructor(private $mdDialog: angular.material.IDialogService,
                 protected StocksService: IStocksService, BaseService: IBaseService){
            super(BaseService);
        }

        /**
         * ShowDialog
         */
        public showDialog() {

            let config: angular.material.IDialogOptions = {
                templateUrl: 'app/templates/Brands/brands-dialog.html',
                controller: StocksDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };

            this.$mdDialog.show(config);
        }

        /**
         * HideDialog
         */
        public hideDialog() {
            this.$mdDialog.hide();
        }
    }

    class StocksDialogController extends StocksController{

        constructor($mdDialog: angular.material.IDialogService, StocksService: IStocksService, BaseService: IBaseService){
            super($mdDialog, StocksService, BaseService);
        }

        /**
        * addStock
        */
        public addStock(stock: IStock){
            this.add("Sample URL", stock);
        }
    }

    StocksController.$inject = ['$mdDialog', 'StocksService', 'BaseService'];
    StocksDialogController.$inject = ['$mdDialog', 'StocksService', 'BaseService'];

    angular
        .module('inventory-management')
        .controller('StocksController', StocksController);
}