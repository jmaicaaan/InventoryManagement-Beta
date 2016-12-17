namespace app{
    'use strict';

    class DashboardController{

        constructor(private $mdSidenav: angular.material.ISidenavService, private DashboardService: IDashboardService){}

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