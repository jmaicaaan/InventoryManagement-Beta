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
                        .then((resp) => resp)
                        .catch((err) => {
                             let headers = err.headers(),
                                contentType = headers['content-type'],
                                databaseError = 'Database is dead. See readme file inside your installer.',
                                apiError = 'API is dead. See readme file inside your installer.';

                                if (err.status === -1)
                                    throw apiError;

                                if (err.status === 503)
                                    throw databaseError;

                                if (err.status === 500) {
                                    if (contentType.search('text/html') > -1) {
                                        throw databaseError;
                                    }
                                    throw err.data.message;
                                }

                            throw 'Error has occured. ' + JSON.stringify(err);
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
                        .then((resp) => resp)
                        .catch((err) => {
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
                        .then((resp) => resp)
                        .catch((err) => {
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
                        .then((resp) => resp)
                        .catch((err) => {
                            throw 'Error has occured. ' + err;
                        });
        }
    }

    BaseService.$inject = ['$http', '$q'];
    
    angular
        .module('inventory-management')
        .service('BaseService', BaseService);
}