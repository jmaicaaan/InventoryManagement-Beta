namespace app {
    'use strict';

    class ItemsController {

        constructor(private $mdDialog: angular.material.IDialogService, protected ItemsService: IItemsService, 
               private $state: angular.ui.IStateService, private LocalStorageService: ILocalStorageService) {
        }

         public md_query: IMDDataTableSortOption = {
            order: 'name',
            limit: 5,
            page: 1
        };

        /**
         * ShowDialog
         */
        public showDialog(templateUrl, item) {

            let config: angular.material.IDialogOptions = {
                templateUrl: templateUrl,
                controller: ItemsDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    selectedItem: item
                }
            };

            return this.ItemsService.showDialog(config);
        }

        /**
         * showConfirmDialog
         */
        public showConfirmDialog(confirmConfig) {
            return this.ItemsService.showDialog(confirmConfig);
        }

        /**
         * showAddDialog
         */
        public showAddDialog() {

            let templateUrl = 'templates/Items/items-dialog.html',
                item = {};

            this.showDialog(templateUrl, item);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(item) {

            let templateUrl = 'templates/Items/items-edit-dialog.html';
            this.showDialog(templateUrl, item);
        }

        /**
         * viewItems
         */
        public viewItems() {
            this.ItemsService.viewItems();
        }

        /**
         * editItem
         */
        public editItem(item) {
            this.showEditDialog(item);
        }

        /**
         * deleteItem
         */
        public deleteItem(item) {

            let confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this item?')
                .textContent('Item Name: ' + item.name)
                .ok('Delete')
                .cancel('Cancel')
                
            this.ItemsService.showDialog(confirmConfig)
                .then(() => {
                    this.ItemsService.removeItem(item);
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
                });       
        }

        /**
         * viewItemDetails
         */
        public viewItemDetails(item: IItem) {

            this.LocalStorageService.set(item.name, JSON.stringify(item));
            this.$state.go('dashboard.items.details', {item: item.name});
        }
    }

    class ItemsDialogController extends ItemsController {

        constructor($mdDialog: angular.material.IDialogService, ItemsService: IItemsService, private selectedItem: IItem, 
                $state: angular.ui.IStateService, LocalStorageService: ILocalStorageService,private UIDService: IUIDService) {
            super($mdDialog, ItemsService, $state, LocalStorageService);
        }

        public selectedSuppliers = [];
        public require_match = true;
        public item: any = {};

        /**
         * addItem
         */
        public addItem(item: IItem) {
            this.ItemsService.addItem(item, this.selectedSuppliers);
        }

        /**
         * generateItemCode
         */
        public generateItemCode() {
            this.item.code = this.UIDService.generateUID();
        }
    }

    ItemsController.$inject = ['$mdDialog', 'ItemsService', '$state', 'LocalStorageService'];
    ItemsDialogController.$inject = ['$mdDialog', 'ItemsService', 'selectedItem', '$state', 'LocalStorageService', 'UIDService'];

    angular
        .module('inventory-management')
        .controller('ItemsController', ItemsController);
}