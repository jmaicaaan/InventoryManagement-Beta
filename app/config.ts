namespace app{
    'use strict';

    function config($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider){

        $urlRouterProvider  
            .otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'app/templates/Dashboard/dashboard.html'
            })
            .state('dashboard.items', {
                url: 'items',
                templateUrl: 'app/templates/Items/items.html',
                controller: 'ItemsController',
                controllerAs: 'vm'
            })
            .state('dashboard.suppliers', {
                url: 'suppliers',
                templateUrl: 'app/templates/Suppliers/suppliers.html',
                controller: 'SuppliersController',
                controllerAs: 'vm'
            })
            .state('dashboard.stocks', {
                url: 'stocks',
                templateUrl: 'app/templates/Stocks/stocks.html',
                controller: 'StocksController',
                controllerAs: 'vm'
            })
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular
        .module('inventory-management')
        .config(config);
}