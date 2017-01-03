namespace app {
    'use strict';

    class SuppliersController extends BaseController {

        constructor(private $mdDialog: angular.material.IDialogService,
            protected SuppliersService: ISupplierService, BaseService: IBaseService) {
            super(BaseService);
            this.viewSuppliers();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        /**
         * ShowDialog
         */
        public showDialog(templateUrl, supplier) {

            let config: angular.material.IDialogOptions = {
                templateUrl: templateUrl,
                controller: SupplierDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    supplier: supplier
                }
            };

            return this.SuppliersService.showDialog(config);
        }

        /**
         * showConfirmDialog
         */
        public showConfirmDialog(confirmConfig) {
            return this.SuppliersService.showDialog(confirmConfig);
        }

        /**
         * showAddDialog
         */
        public showAddDialog() {

            let templateUrl = 'templates/Suppliers/suppliers-dialog.html',
                supplier = {};

            this.showDialog(templateUrl, supplier);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(supplier) {

            let templateUrl = 'templates/Suppliers/suppliers-edit-dialog.html';

            this.showDialog(templateUrl, supplier);
        }


        /**
         * viewSuppliers
         */
        public viewSuppliers() {
            this.view_without_data('/viewSuppliers')
                .then((suppliers) => {
                    this.SuppliersService.listSuppliers = suppliers.data.listSuppliers;
                })
                .catch((err) => {
                    this.SuppliersService.showToast(err);
                });
        }

        /**
         * editSupplier
         */
        public editSupplier(supplier) {
            this.showEditDialog(supplier);
        }

        /**
         * deleteSupplier
         */
        public deleteSupplier(supplier) {

            let confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this supplier?')
                .textContent('Supplier Name: ' + supplier.name)
                .ok('Delete')
                .cancel('Cancel')

            this.SuppliersService.showDialog(confirmConfig)
                .then(() => {

                    let supplierModel = {
                        supplier: supplier
                    };

                    this.remove('/deleteSupplier', supplierModel)
                        .then((resp) => {
                            this.viewSuppliers();
                            this.SuppliersService.showToast(resp.data.message);
                        })
                        .catch((err) => {
                            this.SuppliersService.showToast(err);
                        });
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
                });
        }
    }

    class SupplierDialogController extends SuppliersController {

        constructor($mdDialog: angular.material.IDialogService, SuppliersService: ISupplierService, BaseService: IBaseService,
            private supplier: ISupplier) {
            super($mdDialog, SuppliersService, BaseService);
        }

        /**
         * addSupplier
         */
        public addSupplier(supplier: ISupplier) {

            let supplierModel = {
                supplier: supplier
            };

            this.add('/addSupplier', supplierModel)
                .then((resp) => {
                    this.SuppliersService.hideDialog();
                    this.viewSuppliers();
                    this.SuppliersService.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.SuppliersService.showToast(err);
                });
        }

        /**
         * editsupplier
         */
        public editSupplier() {

            let supplierModel = {
                supplier: this.supplier
            };

            this.update('/editSupplier', supplierModel)
                .then((resp) => {
                    this.SuppliersService.hideDialog();
                    this.viewSuppliers();
                    this.SuppliersService.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.SuppliersService.showToast(err);
                });
        }
    }

    SuppliersController.$inject = ['$mdDialog', 'SuppliersService', 'BaseService'];
    SupplierDialogController.$inject = ['$mdDialog', 'SuppliersService', 'BaseService', 'supplier'];

    angular
        .module('inventory-management')
        .controller('SuppliersController', SuppliersController);
}