namespace app{
    'use strict';

    class UnitsService implements IUnitsService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService){
            
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
    }

    UnitsService.$inject = ['ToastService', 'DialogService'];
    
    angular
        .module('inventory-management')
        .service('UnitsService', UnitsService);
}