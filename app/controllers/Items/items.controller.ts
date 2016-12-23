namespace app {
    'use strict';

    class ItemsController extends BaseController {

        constructor(private $mdDialog: angular.material.IDialogService,
            protected ItemsService: IItemsService, BaseService: IBaseService) {
            super(BaseService);
            this.viewItems();
        }

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

            let templateUrl = 'app/templates/Items/items-dialog.html',
                item = {};

            this.showDialog(templateUrl, item);
        }

        /**
         * showEditDialog
         */
        public showEditDialog(item) {

            let templateUrl = 'app/templates/Items/items-edit-dialog.html';

            this.showDialog(templateUrl, item);
        }


        /**
         * viewItems
         */
        public viewItems() {
            this.view_without_data('/viewItems')
                .then((items) => {
                    this.ItemsService.listItems = items.data.listItems;
                })
                .catch((err) => {
                    this.ItemsService.showToast(err);
                });
        }

        /**
         * editItem
         */
        public editItem(item) {
            this.showEditDialog(item);
        }

        /**
         * deleteitem
         */
        public deleteitem(item) {

            let confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this item?')
                .textContent('Item Name: ' + item.name)
                .ok('Delete')
                .cancel('Cancel')

            this.ItemsService.showDialog(confirmConfig)
                .then(() => {

                    let itemModel = {
                        item: item
                    };

                    this.remove('/deleteitem', itemModel)
                        .then((resp) => {
                            this.viewItems();
                        })
                        .catch((err) => {
                            this.ItemsService.showToast(err);
                        });
                })
                .catch((err) => {
                    console.log('Confirm Dialog cancelled.');
                });
        }
    }

    class ItemsDialogController extends ItemsController {

        constructor($mdDialog: angular.material.IDialogService, ItemsService: IItemsService, BaseService: IBaseService,
            private selectedItem: IItem) {
            super($mdDialog, ItemsService, BaseService);
            this.loadBrands();
            this.loadCategories();
            this.loadUnits();
            this.loadSuppliers();
        }

        public selectedSuppliers = [];

        /**
         * loadBrands
         */
        public loadBrands() {
            this.view_without_data('/viewBrands')
                .then((brands) => {
                    this.ItemsService.listBrands = brands.data.listBrands;
                })
                .catch((err) => {
                    console.log(err);  
                });
        }

        /**
         * loadUnits
         */
        public loadUnits() {
            this.view_without_data('/viewUnits')
                .then((units) => {
                    this.ItemsService.listUnits = units.data.listUnits;
                })
                .catch((err) => {
                    console.log(err);  
                });
        }

        /**
         * loadCategories
         */
        public loadCategories() {
            this.view_without_data('/viewCategories')
                .then((categories) => {
                    this.ItemsService.listCategories = categories.data.listCategories;
                })
                .catch((err) => {
                    console.log(err);  
                });
        }

         /**
         * loadSuppliers
         */
        public loadSuppliers() {
            this.view_without_data('/viewSuppliers')
                .then((suppliers) => {
                    this.ItemsService.listSuppliers = suppliers.data.listSuppliers;
                })
                .catch((err) => {
                    console.log(err);  
                });
        }

        /**
         * addItem
         */
        public addItem(item: IItem) {

            let itemModel = {
                item: item,
                listSuppliers: this.selectedSuppliers
            };

            this.add('/addItem', itemModel)
                .then((response) => {
                    this.ItemsService.hideDialog();
                    this.viewItems();
                })
                .catch((err) => {
                    this.ItemsService.showToast(err);
                });
        }

        /**
         * editItem
         */
        public editItem() {

            let itemModel = {
                item: this.selectedItem
            };

            this.update('/editItem', itemModel)
                .then((resp) => {
                    this.ItemsService.hideDialog();
                    this.viewItems();
                })
                .catch((err) => {
                    this.ItemsService.showToast(err);
                });
        }
    }

    ItemsController.$inject = ['$mdDialog', 'ItemsService', 'BaseService'];
    ItemsDialogController.$inject = ['$mdDialog', 'ItemsService', 'BaseService', 'selectedItem'];

    angular
        .module('inventory-management')
        .controller('ItemsController', ItemsController);
}