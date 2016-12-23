namespace app{
    'use strict';

    class DialogService implements IDialogService{
        constructor(private $mdDialog: angular.material.IDialogService){

        }

        /**
         * showDialog
         */
        public showDialog(config) {
            return this.$mdDialog.show(config);
        }

        /**
         * hideDialog
         */
        public hideDialog() {
            this.$mdDialog.hide();
        }
    }

    DialogService.$inject = ['$mdDialog'];

    angular
        .module('inventory-management')
        .service('DialogService', DialogService);
}