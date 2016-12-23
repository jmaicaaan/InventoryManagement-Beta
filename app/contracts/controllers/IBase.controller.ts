namespace app{
    'use strict';

    export interface IBaseController{
        add(url: string, data: any): angular.IPromise<any>;
        update(url: string, data: any): angular.IPromise<any>;
        remove(url: string, data: any): angular.IPromise<any>;
        view(url: string, data: any): angular.IPromise<any>;
        view_without_data(url: string): angular.IPromise<any>;
    }
}