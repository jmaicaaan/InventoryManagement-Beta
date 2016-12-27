namespace app{
    'use strict';

    export interface ILocalStorageService{

        set(key: string, value: any): void;

        get(key: string): any;

        remove(key: string): void;
    }
}