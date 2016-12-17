namespace app{
    'use strict';

    class CategoriesService extends BaseService implements ICategoriesService{
        constructor($http: angular.IHttpService){
            super($http);
        }
    }

    CategoriesService.$inject = ['$http'];
    
    angular
        .module('inventory-management')
        .service('CategoriesService', CategoriesService);
}