namespace app{
    'use strict';

    export interface IBaseController<T>{
        add(url: string, data: T): void;
        update(url: string, data: T): void;
        remove(url: string, data: T): void;
        view(url: string, data: T): angular.IPromise<T>;
        view_without_data(url: string): angular.IPromise<T>;
    }
}