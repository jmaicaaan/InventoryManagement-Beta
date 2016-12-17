namespace app{
    'use strict';

    class StocksService extends BaseService implements IStocksService{
        constructor($http: angular.IHttpService){
            super($http);
        }
    }

    StocksService.$inject = ['$http'];
    
    angular
        .module('inventory-management')
        .service('StocksService', StocksService);
}