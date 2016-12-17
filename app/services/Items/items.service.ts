namespace app{
    'use strict';

    class ItemsService extends BaseService implements IItemsService{
        constructor($http: angular.IHttpService){
            super($http);
        }
    }

    ItemsService.$inject = ['$http'];
    
    angular
        .module('inventory-management')
        .service('ItemsService', ItemsService);
}