namespace app{
    'use strict';

    function run($rootScope: angular.IRootScopeService, DashboardService: IDashboardService){

        $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
            let name = toState.title;
            stateNameModifier(name);
        });

        function stateNameModifier(name){
            DashboardService.stateNameModifier(name);
        }
    }

    run.$inject = ['$rootScope', 'DashboardService'];

    angular 
        .module('inventory-management')
        .run(run);
}