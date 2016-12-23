namespace app {
    'use strict';

    class BrandsController extends BaseController {

        constructor(public $mdDialog: angular.material.IDialogService,
            protected BrandsService: IBrandService, BaseService: IBaseService) {

            super(BaseService);

            this.viewBrands();
        }

        /**
         * showDialog
         */
        public showDialog(config: angular.material.IDialogOptions) {
            return this.BrandsService.showDialog(config);
        }

        /**
         * hideDialog
         */
        public hideDialog() {
            this.BrandsService.hideDialog();
        }

        /**
         * showConfirmDialog
         */
        public showConfirmDialog(confirmConfig) {
            return this.BrandsService.showDialog(confirmConfig);
        }

        /**
         * showAddDialog
         */
        public showAddDialog() {
            let config: angular.material.IDialogOptions = {
                templateUrl: 'app/templates/Brands/brands-dialog.html',
                controller: BrandsDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };

            this.showDialog(config);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(brand) {

            let config: angular.material.IDialogOptions = {
                templateUrl: 'app/templates/Brands/brands-edit-dialog.html',
                controller: BrandsDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    brand: brand
                }
            };

            this.showDialog(config);
        }


        /**
         * viewBrands
         */
        public viewBrands() {
            this.view_without_data('/viewBrands')
                .then((brands) => {
                    this.BrandsService.listBrands = brands.data.listBrands;
                });
        }

        /**
         * editBrand
         */
        public editBrand(brand) {
            this.showEditDialog(brand);
        }

        /**
         * deleteBrand
         */
        public deleteBrand(brand) {

            let confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this brand?')
                .textContent('Brand Name: ' + brand.name)
                .ok('Delete')
                .cancel('Cancel')

            this.BrandsService.showDialog(confirmConfig)
                .then(() => {

                    let brandModel = {
                        brand: brand
                    };

                    this.remove('/deleteBrand', brandModel)
                        .then((resp) => {
                            this.viewBrands();
                        })
                        .catch((err) => {
                            this.BrandsService.showToast(err);
                        });
                });
        }
    }

    class BrandsDialogController extends BrandsController {

        constructor($mdDialog: angular.material.IDialogService, BrandsService: IBrandService, BaseService: IBaseService,
            private brand: IBrand) {
            super($mdDialog, BrandsService, BaseService);
        }

        /**
         * addBrand
         */
        public addBrand(brand: IBrand) {

            let brandModel = {
                brand: brand
            };

            this.add('/addBrand', brandModel)
                .then((response) => {
                    this.hideDialog();
                    this.viewBrands();
                })
                .catch((err) => {
                    this.BrandsService.showToast(err);
                });
        }

        /**
         * hideDialog
         */
        public hideDialog() {
            this.BrandsService.hideDialog();
        }

        /**
         * editBrand
         */
        public editBrand() {

            let brandModel = {
                brand: this.brand
            };

            this.update('/editBrand', brandModel)
                .then((resp) => {
                    this.hideDialog();
                    this.viewBrands();
                })
                .catch((err) => {
                    this.BrandsService.showToast(err);
                });
        }
    }

    BrandsController.$inject = ['$mdDialog', 'BrandsService', 'BaseService'];
    BrandsDialogController.$inject = ['$mdDialog', 'BrandsService', 'BaseService', 'brand'];

    angular
        .module('inventory-management')
        .controller('BrandsController', BrandsController);
}