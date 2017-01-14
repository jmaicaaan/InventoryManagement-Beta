namespace app{
    'use strict';

    class MessengerController{
        constructor(private $http: angular.IHttpService){
            console.log('Hello');
        }



    }

    MessengerController.$inject = ['$http'];

    angular
        .module('inventory-management')
        .controller('MessengerController', MessengerController);
}