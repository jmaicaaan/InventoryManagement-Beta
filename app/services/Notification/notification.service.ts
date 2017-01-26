namespace app{
    'use strict';

    class NotificationService implements INotificationService{
        constructor(private BaseService: IBaseService){}

        public lowStock = {
            count: 0
        };

        /**
         * getNotification
         */
        public getNotification() {

            return this.getServerURL()
                .then((serverURL) => {
                    let url = [serverURL, '/getNotification'].join('');

                    var source = new EventSource(url);
                    
                    source.onmessage = (event) => {
                        // console.log(event.data);
                        let data = event.data;

                        if(data !== undefined)
                            if(data > 0){
                                this.lowStock.count = data;
                            }else{
                                this.lowStock.count = 0;
                            }
                            
                        return event.data;
                    };
                });
        }

        public getServerConfigFile() {

            return this.BaseService.get_localFile('server-config.json')
                .then((res) => res);
        }

        public getServerURL() {

            return this.getServerConfigFile()
                .then((response: any) => {
                    
                    let data: any = response.data;

                    let url = '';
                    url = [data.url, data.port].join(':');
                    url = [url, data.app_context_root].join('/');
                    return url;
                });
        }

    }

    NotificationService.$inject = ['BaseService'];

    angular
        .module('inventory-management')
        .service('NotificationService', NotificationService);
}