namespace app {

    function serviceInterceptor($q: angular.IQService, $injector, ): angular.IHttpInterceptor {
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
            }
        }

        function getServerConfigFile() {
            let $http: angular.IHttpService = $injector.get('$http');

            return $http.get('server-config.json')
                .then((resp) => resp);
        }

        function getServerURL() {

            return getServerConfigFile()
                .then((resp: any) => {
                    let data: any = resp.data;

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