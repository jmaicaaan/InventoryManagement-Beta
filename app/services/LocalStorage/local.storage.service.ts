namespace app{
    'use strict';

    class LocalStorageService{
        constructor(private $window: angular.IWindowService){}

        /**
         * set
         */
        public set(key: string, value: any) {
            this.$window.localStorage.setItem(key, value);
        }

        /**
         * get
         */
        public get(key: string) {
            return this.$window.localStorage.getItem(key);
        }

        /**
         * remove
         */
        public remove(key: string) {
            this.$window.localStorage.removeItem(key);
        }

    }

    LocalStorageService.$inject = ['$window'];

    angular
        .module('inventory-management')
        .service('LocalStorageService', LocalStorageService);
}