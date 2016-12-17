namespace app{
    'use strict';

    class BrandsController extends BaseController<IBrand> implements IDialogController{

        constructor(private $mdDialog: angular.material.IDialogService,
                 protected BrandsService: IBrandService, BaseService: IBaseService){
            super(BaseService);
        }

        /**
         * showDialog
         */
        public showDialog() {
            this.$mdDialog.show({
                templateUrl: 'app/templates/Brands/brands-dialog.html',
                controller: BrandsDialogController,
                controllerAs: 'vm'
            });
        }

        /**
         * hideDialog
         */
        public hideDialog() {
            
        }
    }

    class BrandsDialogController extends BrandsController{

        constructor($mdDialog: angular.material.IDialogService, BrandsService: IBrandService, BaseService: IBaseService){
            super($mdDialog, BrandsService, BaseService);
        }

        /**
         * addBrand
         */
        public addBrand(brand: IBrand) {
            this.add('Sample Url', brand);
        }
    }

    BrandsController.$inject = ['$mdDialog', 'BrandsService', 'BaseService'];
    BrandsDialogController.$inject = ['$mdDialog', 'BrandsService', 'BaseService'];

    angular
        .module('inventory-management')
        .controller('BrandsController', BrandsController);
}