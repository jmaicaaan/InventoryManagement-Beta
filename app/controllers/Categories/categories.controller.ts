namespace app{
    'use strict';

    class CategoriesController extends BaseController implements IDialogController{

        constructor(private $mdDialog: angular.material.IDialogService,
                protected CategoriesService: ICategoriesService, BaseService: IBaseService){
            super(BaseService);
        }

        /**
         * showDialog
         */
        public showDialog() {
           
            let config: angular.material.IDialogOptions = {
                templateUrl: 'app/templates/Categories/categories-dialog.html',
                controller: CategoriesDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };

            this.$mdDialog.show(config);
        }

        /**
         * hideDialog
         */
        public hideDialog() {
            this.$mdDialog.hide();
        }
    }

    class CategoriesDialogController extends CategoriesController{

        constructor($mdDialog: angular.material.IDialogService, CategoriesService: ICategoriesService,
                    BaseService: IBaseService){
            super($mdDialog, CategoriesService, BaseService);
        }

        /**
         * addCategory
         */
        public addCategory(category: ICategory) {
            this.add('Sample Url', category);
        }
    }

    CategoriesController.$inject = ['$mdDialog', 'CategoriesService', 'BaseService'];
    CategoriesDialogController.$inject = ['$mdDialog', 'CategoriesService', 'BaseService'];

     angular
        .module('inventory-management')
        .controller('CategoriesController', CategoriesController);
}