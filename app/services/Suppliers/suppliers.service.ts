namespace app{
    'use strict';

    class SuppliersService extends BaseService implements ISupplierService{
        constructor($http: angular.IHttpService){
            super($http);
        }
    }

    SuppliersService.$inject = ['$http'];
    
    angular
        .module('inventory-management')
        .service('SuppliersService', SuppliersService);
}