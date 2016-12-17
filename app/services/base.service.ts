namespace app{
    'use strict';

    export abstract class BaseService implements IBaseService{

        constructor(private $http: angular.IHttpService){}

        /**
         * post_request
         */
        public post_request(url: string, data: any) {
            
            let config: angular.IRequestConfig = {
                url: url,
                method: 'POST',
                data: data
            };

            console.log(config);

            return this.$http(config)
                        .then( (data) => data)
                        .catch( (err) => {
                            throw 'Error has occured. ' + err;
                        });
        }

        /**
         * get_request
         */
        public get_request(url: string, data: any) {
            
            let config: angular.IRequestConfig = {
                url: url,
                method: 'GET',
                data: data
            };

            return this.$http(config)
                        .then( (data) => data)
                        .catch( (err) => {
                            throw 'Error has occured. ' + err;
                        });
        }

        /**
         * get_request without data
         */
        public get_request_without_data(url: string) {
            
            let config: angular.IRequestConfig = {
                url: url,
                method: 'GET'
            };

            return this.$http(config)
                        .then( (data) => data)
                        .catch( (err) => {
                            throw 'Error has occured. ' + err;
                        });
        }
    }

    BaseService.$inject = ['$http'];

    angular
        .module('inventory-management')
        .service('BaseService', BaseService);
}