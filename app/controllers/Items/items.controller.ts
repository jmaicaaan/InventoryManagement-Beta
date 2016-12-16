namespace app{
    'use strict';

    class ItemsController extends BaseController<IItem> implements IDialogController{

        constructor(private $mdDialog : angular.material.IDialogService){
            super();
        }

        /**
         * ShowDialog
         */
        public showDialog() {
            this.$mdDialog.show({
                templateUrl: 'app/templates/Items/items-dialog.html'
            });
        }

        /**
         * HideDialog
         */
        public hideDialog() {
            
        }
    }

    class ItemsDialogController extends ItemsController{

        /**
         * addItems
         */
        public addItems(item: IItem) {
            this.add("Sample URL", item);
        }
    }

    angular 
        .module('inventory-management')
        .controller('ItemsController', ItemsController);
}