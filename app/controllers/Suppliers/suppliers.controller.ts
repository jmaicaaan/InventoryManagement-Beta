namespace app {
    'use strict';

    class SuppliersController{

        constructor(private $mdDialog: angular.material.IDialogService, protected SuppliersService: ISupplierService,
            protected $timeout: angular.ITimeoutService) {
            this.viewSuppliers();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        public supplierPromise: angular.IPromise<any>;
        public numberPattern = '\\d+';
        public isSearchOpen = false;
        public queryText = '';
        

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
            this.supplierPromise = this.$timeout(() => {
                this.SuppliersService.view();
            }, 2000);
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
                    this.SuppliersService.remove(supplier);
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
                });
        }

         /**
         * toggleSearch
         */
        public toggleSearch() {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        }
    }

    class SupplierDialogController extends SuppliersController {

        constructor($mdDialog: angular.material.IDialogService, SuppliersService: ISupplierService, private supplier: ISupplier,
         $timeout: angular.ITimeoutService) {
            super($mdDialog, SuppliersService, $timeout);
        }

        /**
         * addSupplier
         */
        public addSupplier(supplier: ISupplier) {
            this.SuppliersService.add(supplier);
        }

        /**
         * editsupplier
         */
        public editSupplier() {
            this.SuppliersService.update(this.supplier);
        }

        /**
         * duplicateContactNo
         */
        public duplicateContactNo() {
            if(this.supplier.primaryContactNo === undefined || this.supplier.secondaryContactNo === undefined)
                return false;
            return this.supplier.primaryContactNo === this.supplier.secondaryContactNo ? true : false;
        }
    }

    SuppliersController.$inject = ['$mdDialog', 'SuppliersService', '$timeout'];
    SupplierDialogController.$inject = ['$mdDialog', 'SuppliersService', 'supplier', '$timeout'];

    angular
        .module('inventory-management')
        .controller('SuppliersController', SuppliersController);
}