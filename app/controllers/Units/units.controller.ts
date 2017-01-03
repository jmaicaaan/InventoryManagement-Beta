namespace app {
    'use strict';

    class UnitsController extends BaseController {

        constructor(private $mdDialog: angular.material.IDialogService,
            protected UnitsService: IUnitsService, BaseService: IBaseService) {
            super(BaseService);
            this.viewUnits();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

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
            this.view_without_data('/viewUnits')
                .then((units) => {
                    this.UnitsService.listUnits = units.data.listUnits;
                })
                .catch((err) => {
                    this.UnitsService.showToast(err);
                });
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

                    let unitModel = {
                        unit: unit
                    };

                    this.remove('/deleteUnit', unitModel)
                        .then((resp) => {
                            this.viewUnits();
                            this.UnitsService.showToast(resp.data.message);
                        })
                        .catch((err) => {
                            this.UnitsService.showToast(err);
                        });
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
                });
        }
    }

    class UnitsDialogController extends UnitsController {

        constructor($mdDialog: angular.material.IDialogService, UnitsService: IUnitsService, BaseService: IBaseService,
            private unit: IUnit) {
            super($mdDialog, UnitsService, BaseService);
        }

        /**
          * addUnit
          */
        public addUnit(unit: IUnit) {

            let unitModel = {
                unit: unit
            };

            this.add('/addUnit', unitModel)
                .then((resp) => {
                    this.UnitsService.hideDialog();
                    this.viewUnits();
                    this.UnitsService.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.UnitsService.showToast(err);
                });
        }

        /**
         * editUnit
         */
        public editUnit() {

            let unitModel = {
                unit: this.unit
            };

            this.update('/editUnit', unitModel)
                .then((resp) => {
                    this.UnitsService.hideDialog();
                    this.viewUnits();
                    this.UnitsService.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.UnitsService.showToast(err);
                });
        }
    }

    UnitsController.$inject = ['$mdDialog', 'UnitsService', 'BaseService'];
    UnitsDialogController.$inject = ['$mdDialog', 'UnitsService', 'BaseService', 'unit'];

    angular
        .module('inventory-management')
        .controller('UnitsController', UnitsController);
}