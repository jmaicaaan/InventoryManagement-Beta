namespace app{
    'use strict';

    /*
     * Automatically close the sidenav when the state is changed. 
     */

    function sidenavWatcherDirective($mdSidenav: angular.material.ISidenavService, $rootScope: angular.IRootScopeService): angular.IDirective{

        let link: Function = (scope: any, element: angular.IAugmentedJQuery) => {
            
            let sideNav = element.find('md-sidenav')[0];
            if(sideNav.hasAttribute('md-component-id')){
                let component_id = sideNav.getAttribute('md-component-id');
                $rootScope.$on('$stateChangeStart', () => {
                    $mdSidenav(component_id).toggle();
                });
            }else{
                throw 'No attribute on element <md-sidenav></md-sidenav>';
            }
        };

        return {
            restrict: 'A',
            scope: {},
            link: link
        };
    }

    sidenavWatcherDirective.$inject = ['$mdSidenav', '$rootScope'];

    angular
        .module('inventory-management')
        .directive('sidenavWatcherDirective', sidenavWatcherDirective);
}