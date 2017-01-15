namespace app{
    'use strict';

    export interface INotificationService{

        lowStock: Object;

        getNotification(): angular.IPromise<any>;
    }
}