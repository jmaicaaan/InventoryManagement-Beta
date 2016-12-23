namespace app{
    'use strict';

    class ToastService implements IToastService{
        constructor(private $mdToast: angular.material.IToastService){

        }


        /**
         * showToast
         */
        public showToast(message) {
              this.$mdToast.show(
                this.$mdToast
                .simple()
                .textContent(message)
                .position('top left')
                .hideDelay(5000)
            );
        }

    }

    angular
        .module('inventory-management')
        .service('ToastService', ToastService);
}