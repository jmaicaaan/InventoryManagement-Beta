namespace app{
    'use strict';

    class SuppliersController extends BaseController<ISupplier> implements IDialogController{

        constructor(private $mdDialog: angular.material.IDialogService){
            super();
        }

        /**
         * ShowDialog
         */
        public showDialog() {

            this.$mdDialog.show({
                templateUrl: 'app/templates/Suppliers/suppliers-dialog.html',
                controller: SupplierDialogController,
                controllerAs: 'vm'
            });
        }

        /**
         * HideDialog
         */
        public hideDialog() {
            
        }
    }

    class SupplierDialogController extends SuppliersController{
       
        /**
         * add
         */
        public addSupplier(supplier: ISupplier) {
            this.add("Sample URL", supplier);
        }
    }

    angular
        .module('inventory-management')
        .controller('SuppliersController', SuppliersController);
}