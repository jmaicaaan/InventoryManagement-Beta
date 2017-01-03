namespace app{
    'use strict';

    class DashboardController extends BaseController{

        constructor(private $mdSidenav: angular.material.ISidenavService, private DashboardService: IDashboardService, 
            BaseService: IBaseService){
                super(BaseService);
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
            loading: true,
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
            this.view_without_data('/stockTracker')
                .then((items) => {

                    this.DashboardService.listLowStocks = items.data.listItems;
                    this.extractItemFromList(this.DashboardService.listLowStocks);
                })
                .catch((err) => {
                    this.DashboardService.showToast(err);
                })
                .finally(() => {
                     this.chartConfig.loading = false;
                });
        }

        /**
         * extractItemFromList
         */
        public extractItemFromList(listLowStocks: Array<IItem>) {

            if(listLowStocks.length > 0)
                this.hasLowStocks = true;

            listLowStocks.forEach( i => {
                let item = {
                    name: [i.name],
                    data: [i.totalStocks]
                };
                
                this.chartConfig.series.push(item);
            });
        }
    }

    DashboardController.$inject = ['$mdSidenav', 'DashboardService', 'BaseService'];

    angular 
        .module('inventory-management')
        .controller('DashboardController', DashboardController);
}