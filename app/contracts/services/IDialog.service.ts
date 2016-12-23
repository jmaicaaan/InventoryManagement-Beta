namespace app{
    'use strict';

    export interface IDialogService{
        showDialog(config: any): angular.IPromise<any>;
        hideDialog(): void;
    }
}