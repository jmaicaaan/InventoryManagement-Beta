namespace app{
    'use strict';

    function config($stateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $httpProvider: angular.IHttpProvider){


        $httpProvider.interceptors.push('serviceInterceptor');

        $urlRouterProvider  
            .otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'templates/Dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                title: 'Dashboard'
            })
            .state('dashboard.brands', {
                url: 'brands',
                templateUrl: 'templates/Brands/brands.html',
                controller: 'BrandsController',
                controllerAs: 'vm',
                title: 'Brands'
                
            })
            .state('dashboard.categories', {
                url: 'categories',
                templateUrl: 'templates/Categories/categories.html',
                controller: 'CategoriesController',
                controllerAs: 'vm',
                title: 'Categories'
            })
            .state('dashboard.items', {
                url: 'items',
                templateUrl: 'templates/Items/items.html',
                controller: 'ItemsController',
                controllerAs: 'vm',
                onEnter: ItemOnEnter,
                title: 'Items'
            })
            .state('dashboard.items.details', {
                url: '/details?item',
                templateUrl: 'templates/Items/items-details.html',
                controller: 'ItemDetailsController',
                controllerAs: 'vm',
                title: 'Item Details'
            })
            .state('dashboard.suppliers', {
                url: 'suppliers',
                templateUrl: 'templates/Suppliers/suppliers.html',
                controller: 'SuppliersController',
                controllerAs: 'vm',
                title: 'Suppliers'
            })
            .state('dashboard.stocks', {
                url: 'stocks',
                templateUrl: 'templates/Stocks/stocks.html',
                controller: 'StocksController',
                controllerAs: 'vm',
                title: 'Stocks'
            })
              .state('dashboard.units', {
                url: 'units',
                templateUrl: 'templates/Units/units.html',
                controller: 'UnitsController',
                controllerAs: 'vm',
                title: 'Units'
            })
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    angular
        .module('inventory-management')
        .config(config);
}