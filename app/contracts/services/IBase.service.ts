namespace app{
    'use strict';

    export interface IBaseService{
        post_request(url: string, data: any): angular.IPromise<any>;
        get_request(url: string, data): angular.IPromise<any>;
        get_request_without_data(url: string): angular.IPromise<any>;
        get_localFile(url: string): angular.IPromise<any>;
    }
}