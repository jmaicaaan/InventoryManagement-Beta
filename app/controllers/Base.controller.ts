namespace app{
    'use strict';

    export abstract class BaseController<T> implements IBaseController<T>{
       
        constructor(private BaseService: IBaseService){}

       /**
        * add
        */
       public add(url: string, data: T) {
           this.BaseService.post_request(url, data);
       }

       /**
        * update
        */
       public update(url: string, data: T) {
            this.BaseService.post_request(url, data);
       }

       /**
        * remove
        */
       public remove(url: string, data: T) {
            this.BaseService.post_request(url, data);
       }

       /**
        * view
        */
       public view(url: string, data: T) {
           return this.BaseService.get_request(url, data);
       }

        /**
        * view
        */
       public view_without_data(url: string) {
           return this.BaseService.get_request_without_data(url);
       }
    }

    BaseController.$inject = ['BaseService'];
}