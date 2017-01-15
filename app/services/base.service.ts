namespace app{
    'use strict';

    export abstract class BaseService implements IBaseService{

        constructor(private $http: angular.IHttpService, private $q: angular.IQService){}

        /**
         * post_request
         */
        public post_request(url: string, data: any) {
            
            let config: angular.IRequestConfig = {
                url: url,
                method: 'POST',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            };

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
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
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
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            };

            return this.$http(config)
                        .then( (data) => data)
                        .catch( (err) => {
                            throw 'Error has occured. ' + err;
                        });
        }

        /**
         * get_localFile
         */
        public get_localFile(url: string) {
             let config: angular.IRequestConfig = {
                url: url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return this.$http(config)
                        .then( (data) => data)
                        .catch( (err) => {
                            throw 'Error has occured. ' + err;
                        });
        }
    }

    BaseService.$inject = ['$http', '$q'];
    
    angular
        .module('inventory-management')
        .service('BaseService', BaseService);
}