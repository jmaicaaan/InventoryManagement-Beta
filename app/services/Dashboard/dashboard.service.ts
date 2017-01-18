namespace app{
    'use strict';

    class DashboardService implements IDashboardService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService, 
            private BaseService: IBaseService, private $q: angular.IQService){
        }

        public state = {};

        public listLowStocks: Array<IItem> = [];
        public chartConfig = {
            series: []   
        };

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

        /**
         * getLowStocks
         */
        public getLowStocks() {
            return this.BaseService
                .post_request('/stockTracker', {})
                .then((resp) => {
                    this.listLowStocks = resp.data.listItems;
                    return resp.data.listItems;
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }
    }
    
    DashboardService.$inject = ['ToastService', 'DialogService', 'BaseService', '$q'];

    angular
        .module('inventory-management')
        .service('DashboardService', DashboardService);
}