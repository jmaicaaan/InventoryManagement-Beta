namespace app{
    'use strict';

    class UnitsController extends BaseController implements IDialogController{

        constructor(private $mdDialog: angular.material.IDialogService,
                protected UnitsService: IUnitsService, BaseService: IBaseService){
            super(BaseService);
        }

        /**
         * showDialog
         */
        public showDialog() {

            let config: angular.material.IDialogOptions = {
                templateUrl: 'app/templates/Units/units-dialog.html',
                controller: UnitsDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };

            this.$mdDialog.show(config);
        }

        /**
         * hideDialog
         */
        public hideDialog() {
            this.$mdDialog.hide();
        }
    }

    class UnitsDialogController extends UnitsController{

        constructor($mdDialog: angular.material.IDialogService, UnitsService: IUnitsService, BaseService: IBaseService){
            super($mdDialog, UnitsService, BaseService);
        }

        /**
         * addUnit
         */
        public addUnit(unit: IUnit) {
            this.add('Sample Url', unit);
        }
    }

    UnitsController.$inject = ['$mdDialog', 'UnitsService', 'BaseService'];
    UnitsDialogController.$inject = ['$mdDialog', 'UnitsService', 'BaseService'];

     angular
        .module('inventory-management')
        .controller('UnitsController', UnitsController);
}