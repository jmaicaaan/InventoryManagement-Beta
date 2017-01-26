namespace app{
    'use strict';

    class DashboardController{

        constructor(private $mdSidenav: angular.material.ISidenavService, private DashboardService: IDashboardService,
             private NotificationService: INotificationService){
                 this.getLowStocks();
        }      

        public chartConfig = {
            options: {
                chart: {
                    type: 'column'
                }
            },
            series: [],
            title: {
                text: 'Low Stocks'
            },
            loading: false,
		    credits: {
		        enabled: false
		    }
        };
        
        public hasLowStocks = false;

        /**
         * toggleSideNav
         */
        public toggleSideNav() {
            this.$mdSidenav('sidenav').toggle();            
        }

        /**
         * getLowStocks
         */
        public getLowStocks() {

            this.DashboardService
                .getLowStocks()
                .then((list) => {
                    this.extractItemFromList(list);
                    this.chartConfig.loading = false;
                });
        }

        /**
         * extractItemFromList
         */
        public extractItemFromList(listLowStocks: Array<IItem>) {

            let len = listLowStocks.length;

            if(len > 0)
                this.hasLowStocks = true;

            listLowStocks.forEach( i => {
                let item = {
                    name: [i.name],
                    data: [i.totalStocks]
                };
                
                this.chartConfig.series.push(item);
            });
        }

        /**
         * comingSoon
         */
        public comingSoon() {
            this.DashboardService.showToast('Coming soon!');
        }
    }

    DashboardController.$inject = ['$mdSidenav', 'DashboardService', 'NotificationService'];

    angular 
        .module('inventory-management')
        .controller('DashboardController', DashboardController);
}