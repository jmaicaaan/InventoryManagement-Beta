namespace app{
    'use strict';

    function run($rootScope: angular.IRootScopeService, DashboardService: IDashboardService, NotificationService: INotificationService){

        $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
            let name = toState.title;
            stateNameModifier(name);
            startNotification();
        });

        function stateNameModifier(name){
            DashboardService.stateNameModifier(name);
        }

        function startNotification(){
            NotificationService.getNotification();
        }
    }

    run.$inject = ['$rootScope', 'DashboardService', 'NotificationService'];

    angular 
        .module('inventory-management')
        .run(run);
}