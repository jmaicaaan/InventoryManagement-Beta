namespace app{
    'use strict';

    class SuppliersController extends BaseController<ISupplier> implements IDialogController{

        constructor(private $mdDialog: angular.material.IDialogService,
                 protected SuppliersService: ISupplierService, BaseService: IBaseService){
            super(BaseService);
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
            this.$mdDialog.hide();
        }
    }

    class SupplierDialogController extends SuppliersController{
       
        constructor($mdDialog: angular.material.IDialogService, SuppliersService: ISupplierService, BaseService: IBaseService){
            super($mdDialog, SuppliersService, BaseService);
        }

        /**
         * add
         */
        public addSupplier(supplier: ISupplier) {
            this.add("Sample URL", supplier);
        }
    }

    SuppliersController.$inject = ['$mdDialog', 'SuppliersService', 'BaseService'];
    SupplierDialogController.$inject = ['$mdDialog', 'SuppliersService', 'BaseService'];

    angular
        .module('inventory-management')
        .controller('SuppliersController', SuppliersController);
}