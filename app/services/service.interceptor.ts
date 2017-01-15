namespace app {

    function serviceInterceptor($q: angular.IQService, $injector): angular.IHttpInterceptor {
        return {
            request: function (config) {
                let deferred = $q.defer();


                if (config.withCredentials) {

                    return getServerURL()
                        .then((serverURL) => {
                            let url = [serverURL, config.url].join('');
                            config.url = url;
                            deferred.resolve(config);
                            return deferred.promise;
                        });
                }
                
                return config;
            },
            responseError: function (response) {

                let headers = response.headers(),
                    contentType = headers['content-type'],
                    databaseError = 'Database is dead. See readme file inside your installer.',
                    apiError = 'API is dead. See readme file inside your installer.';

                if (response.status === -1)
                    throw apiError;

                if (response.status === 503)
                    throw databaseError

                if (response.status === 500) {
                    if (contentType.search('text/html') > -1) {
                        throw databaseError;
                    }
                    throw response.data.message;
                }
            }
        }

        function getServerConfigFile() {
            let $http: angular.IHttpService = $injector.get('$http');

            return $http.get('server-config.json')
                .then((res) => res);
        }

        function getServerURL() {

            return getServerConfigFile()
                .then((response: any) => {
                    let data: any = response.data;

                    let url = '';
                    url = [data.url, data.port].join(':');
                    url = [url, data.app_context_root].join('/');
                    return url;
                });
        }
    }

    angular
        .module('inventory-management')
        .factory('serviceInterceptor', serviceInterceptor);

}