namespace app{
    'use strict';

    function config($stateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider){

        $urlRouterProvider  
            .otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'app/templates/Dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                title: 'Dashboard'
            })
            .state('dashboard.brands', {
                url: 'brands',
                templateUrl: 'app/templates/Brands/brands.html',
                controller: 'BrandsController',
                controllerAs: 'vm',
                title: 'Brands'
                
            })
            .state('dashboard.categories', {
                url: 'categories',
                templateUrl: 'app/templates/Categories/categories.html',
                controller: 'CategoriesController',
                controllerAs: 'vm',
                title: 'Categories'
            })
            .state('dashboard.items', {
                url: 'items',
                templateUrl: 'app/templates/Items/items.html',
                controller: 'ItemsController',
                controllerAs: 'vm',
                title: 'Items'
            })
            .state('dashboard.suppliers', {
                url: 'suppliers',
                templateUrl: 'app/templates/Suppliers/suppliers.html',
                controller: 'SuppliersController',
                controllerAs: 'vm',
                title: 'Suppliers'
            })
            .state('dashboard.stocks', {
                url: 'stocks',
                templateUrl: 'app/templates/Stocks/stocks.html',
                controller: 'StocksController',
                controllerAs: 'vm',
                title: 'Stocks'
            })
              .state('dashboard.units', {
                url: 'units',
                templateUrl: 'app/templates/Units/units.html',
                controller: 'UnitsController',
                controllerAs: 'vm',
                title: 'Units'
            })
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular
        .module('inventory-management')
        .config(config);
}