namespace app{
    'use strict';

    export abstract class BaseController<T> implements IBaseController<T>{
       
        constructor(){}

       /**
        * add
        */
       public add(url: string, data: T) {
           console.log(data);
           console.log(url);
       }

       /**
        * update
        */
       public update(url: string, data: T) {
           
       }

       /**
        * remove
        */
       public remove(url: string, data: T) {
           
       }

       /**
        * view
        */
       public view(url: string) {
           
           return null;
       }
    } 
}