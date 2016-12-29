namespace app{
    'use strict';

    class DashboardController{

        constructor(private $mdSidenav: angular.material.ISidenavService, private DashboardService: IDashboardService){}

        public labels = ['Item with lowest stocks'];
        public data = [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ];
        public series = ["Series 1", "Series 2"];

        public options = { legend: { display: true } };

        /**
         * toggleSideNav
         */
        public toggleSideNav() {
            this.$mdSidenav('sidenav').toggle();            
        }
        
    }

    DashboardController.$inject = ['$mdSidenav', 'DashboardService'];

    angular 
        .module('inventory-management')
        .controller('DashboardController', DashboardController);
}