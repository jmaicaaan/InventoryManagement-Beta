namespace app{
    'use strict';

    class DashboardService implements IDashboardService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService){
        }

        public state = {};

        public listLowStocks: Array<IItem> = [];

        stateNameModifier(name){
            this.state['name'] = name;
        }

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
    
    DashboardService.$inject = ['ToastService', 'DialogService'];

    angular
        .module('inventory-management')
        .service('DashboardService', DashboardService);
}