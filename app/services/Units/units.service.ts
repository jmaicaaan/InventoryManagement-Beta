namespace app{
    'use strict';

    class UnitsService extends BaseService implements IUnitsService{
        constructor($http: angular.IHttpService){
            super($http);
        }
    }

    UnitsService.$inject = ['$http'];
    
    angular
        .module('inventory-management')
        .service('UnitsService', UnitsService);
}