namespace app {
    'use strict';

    class BrandsController extends BaseController{

        constructor(public $mdDialog: angular.material.IDialogService,
                protected BrandsService: IBrandService, BaseService: IBaseService) {
            super(BaseService);
            this.viewBrands();
        }

        /**
         * showDialog
         */
        public showDialog(templateUrl, brand) {

            let config: angular.material.IDialogOptions = {
                controller: BrandsDialogController,
                templateUrl: templateUrl,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    brand: brand
                }
            };

            return this.BrandsService.showDialog(config);
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

            let templateUrl = 'app/templates/Brands/brands-dialog.html',
                brand = {};

            this.showDialog(templateUrl, brand);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(brand) {

            let templateUrl = 'app/templates/Brands/brands-edit-dialog.html';

            this.showDialog(templateUrl, brand);
        }


        /**
         * viewBrands
         */
        public viewBrands() {
            this.view_without_data('/viewBrands')
                .then((brands) => {
                    this.BrandsService.listBrands = brands.data.listBrands;
                })
                .catch((err) => {
                    this.BrandsService.showToast(err);
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
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
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
                    this.BrandsService.hideDialog();
                    this.viewBrands();
                })
                .catch((err) => {
                    this.BrandsService.showToast(err);
                });
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
                    this.BrandsService.hideDialog();
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