namespace app{
    'use strict';

    export abstract class BaseController implements IBaseController{
       
        constructor(private BaseService: IBaseService){}

       /**
        * add
        */
       public add(url: string, data: any) {
           return this.BaseService.post_request(url, data);
       }

       /**
        * update
        */
       public update(url: string, data: any) {
            return this.BaseService.post_request(url, data);
       }

       /**
        * remove
        */
       public remove(url: string, data: any) {
            return this.BaseService.post_request(url, data);
       }

       /**
        * view
        */
       public view(url: string, data: any) {
           return this.BaseService.post_request(url, data);
       }

        /**
        * view_without_data
        */
       public view_without_data(url: string) {
           return this.BaseService.post_request(url, {});
       }
    }

    BaseController.$inject = ['BaseService'];
}