namespace app{
    'use strict';

    class ItemsController extends BaseController<IItem> implements IDialogController{

        constructor(private $mdDialog: angular.material.IDialogService,
                protected ItemsService: IItemsService, BaseService: IBaseService){
            super(BaseService);
        }

        /**
         * ShowDialog
         */
        public showDialog() {
            this.$mdDialog.show({
                templateUrl: 'app/templates/Items/items-dialog.html',
                controller: ItemsDialogController, 
                controllerAs: 'vm'
            });
        }

        /**
         * HideDialog
         */
        public hideDialog() {
            
        }
    }

    class ItemsDialogController extends ItemsController{

        constructor($mdDialog: angular.material.IDialogService, ItemsService: IItemsService, BaseService: IBaseService){
            super($mdDialog, ItemsService, BaseService);
        }

   
        public suppliers = [
            {
                name: 'Supplier 1',
                email: 'test@example.com'
            },
            {
                name: 'Supplier 2',
                email: 'test@example.com'
            },
            {
                name: 'Supplier 3',
                email: 'test@example.com'
            }
        ];
        
        /**
         * The Supplier variable needs to be initialized for the chips to work.
         */

        public item = {
            Suppliers: []
        };

        /**
         * addItem
         */
        public addItem(item: IItem) {
            this.add('Sample URL', item);
        }
    }

    ItemsController.$inject = ['$mdDialog', 'ItemsService', 'BaseService'];
    ItemsDialogController.$inject = ['$mdDialog', 'ItemsService', 'BaseService'];

    angular 
        .module('inventory-management')
        .controller('ItemsController', ItemsController);
}