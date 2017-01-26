namespace app {
    'use strict';

    class BrandsController{

        constructor(public $mdDialog: angular.material.IDialogService, protected BrandsService: IBrandService,
            protected $timeout: angular.ITimeoutService) {
                this.viewBrands();
        }

        public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        public brandPromise: angular.IPromise<any>;
        public isSearchOpen = false;
        public queryText = '';

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

            let templateUrl = 'templates/Brands/brands-dialog.html',
                brand = {};

            this.showDialog(templateUrl, brand);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(brand) {
            let templateUrl = 'templates/Brands/brands-edit-dialog.html';
            this.showDialog(templateUrl, brand);
        }

        /**
         * viewBrands
         */
        public viewBrands() {
            this.brandPromise = this.$timeout(() => {
                this.BrandsService.view();
            }, 2000);
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
                    this.BrandsService.remove(brand);
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

    class BrandsDialogController extends BrandsController {

        constructor($mdDialog: angular.material.IDialogService, BrandsService: IBrandService, private brand: IBrand,
            $timeout: angular.ITimeoutService) {
            super($mdDialog, BrandsService, $timeout);
        }

        /**
         * addBrand
         */
        public addBrand(brand: IBrand) {
            this.BrandsService.add(brand);
        }

        /**
         * editBrand
         */
        public editBrand() {
            this.BrandsService.update(this.brand);
        }
    }

    BrandsController.$inject = ['$mdDialog', 'BrandsService', '$timeout'];
    BrandsDialogController.$inject = ['$mdDialog', 'BrandsService', 'brand', '$timeout'];

    angular
        .module('inventory-management')
        .controller('BrandsController', BrandsController);
}