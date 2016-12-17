namespace app{
    'use strict';

    class DashboardService implements IDashboardService{
        constructor(){}

        public state = {};

        stateNameModifier(name){
            this.state['name'] = name;
        }
    }
    
    DashboardService.$inject = ['$state'];

    angular
        .module('inventory-management')
        .service('DashboardService', DashboardService);
}