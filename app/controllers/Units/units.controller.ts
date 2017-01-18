namespace app {
    'use strict';

    class UnitsController {

        constructor(private $mdDialog: angular.material.IDialogService, protected UnitsService: IUnitsService, 
            protected $timeout: angular.ITimeoutService) {
            this.viewUnits();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        public unitPromise: angular.IPromise<any>;

        /**
         * showDialog
         */
        public showDialog(templateUrl, unit) {

            let config: angular.material.IDialogOptions = {
                templateUrl: templateUrl,
                controller: UnitsDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    unit: unit
                }
            };

            return this.UnitsService.showDialog(config);
        }

        /**
        * showConfirmDialog
        */
        public showConfirmDialog(confirmConfig) {
            return this.UnitsService.showDialog(confirmConfig);
        }

        /**
         * showAddDialog
         */
        public showAddDialog() {

            let templateUrl = 'templates/Units/units-dialog.html',
                unit = {};

            this.showDialog(templateUrl, unit);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(unit) {
            let templateUrl = 'templates/Units/units-edit-dialog.html';
            this.showDialog(templateUrl, unit);
        }

        /**
         * viewUnits
         */
        public viewUnits() {
            this.unitPromise = this.$timeout(() => {
                this.UnitsService.view();
            }, 2000);
        }

        /**
         * editUnit
         */
        public editUnit(unit) {
            this.showEditDialog(unit);
        }

        /**
         * deleteUnit
         */
        public deleteUnit(unit) {

            let confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this unit?')
                .textContent('Unit Name: ' + unit.name)
                .ok('Delete')
                .cancel('Cancel')

            this.UnitsService.showDialog(confirmConfig)
                .then(() => {
                    this.UnitsService.remove(unit);
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
                });
        }
    }

    class UnitsDialogController extends UnitsController {

        constructor($mdDialog: angular.material.IDialogService, UnitsService: IUnitsService, private unit: IUnit,
            $timeout: angular.ITimeoutService) {
            super($mdDialog, UnitsService, $timeout);
        }

        /**
          * addUnit
          */
        public addUnit(unit: IUnit) {
            this.UnitsService.add(unit);
        }

        /**
         * editUnit
         */
        public editUnit() {
            this.UnitsService.update(this.unit);
        }
    }

    UnitsController.$inject = ['$mdDialog', 'UnitsService', '$timeout'];
    UnitsDialogController.$inject = ['$mdDialog', 'UnitsService', 'unit', '$timeout'];

    angular
        .module('inventory-management')
        .controller('UnitsController', UnitsController);
}