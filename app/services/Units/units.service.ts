namespace app{
    'use strict';

    class UnitsService implements IUnitsService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService,
            private BaseService: IBaseService){
            
        }

        public listUnits: Array<IUnit> = [];
        
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
        public add(unit: IUnit) {
            
            let unitModel = {
                unit: unit
            };

            this.BaseService
                .post_request('/addUnit', unitModel)
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
        public update(unit: IUnit) {
            
            let unitModel = {
                unit: unit
            };

            this.BaseService
                .post_request('/editUnit', unitModel)
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
                .post_request('/viewUnits', {})
                .then((resp) => {
                    this.listUnits = resp.data.listUnits;
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * remove
         */
        public remove(unit: IUnit) {
            
            let unitModel = {
                unit: unit
            };

            this.BaseService
                .post_request('/deleteUnit', unitModel)
                .then((resp) => {
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }
    }

    UnitsService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    
    angular
        .module('inventory-management')
        .service('UnitsService', UnitsService);
}