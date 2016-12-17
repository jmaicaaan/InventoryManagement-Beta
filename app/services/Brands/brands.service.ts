namespace app{
    'use strict';

    class BrandsService extends BaseService implements IBrandService{
        constructor($http: angular.IHttpService){
            super($http);
        }
    }

    BrandsService.$inject = ['$http'];
    
    angular
        .module('inventory-management')
        .service('BrandsService', BrandsService);
}