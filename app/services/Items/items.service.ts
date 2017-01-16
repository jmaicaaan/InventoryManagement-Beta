namespace app{
    'use strict';

    class ItemsService implements IItemsService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService, 
            private BaseService: IBaseService, private LocalStorageService: ILocalStorageService){}

        public listItems: Array<IItem> = [];
        public listBrands: Array<IBrand> = [];
        public listUnits: Array<IUnit> = [];
        public listCategories: Array<ICategory> = [];
        public listSuppliers: Array<ISupplier> = [];

        
        /**
         * showToast
         */
        public showToast(message) {
            this.ToastService.showToast(message);
        }

        /**
         * showDialog
         */
        public showDialog(config) {
           return this.DialogService.showDialog(config);
        }

        /**
         * hideDialog  
         */
        public hideDialog() {
            this.DialogService.hideDialog();
        }

        /**
         * addItem
         */
        public addItem(item: IItem, selectedSuppliers: Array<any>) {
            
            let itemModel = {
                item: item,
                listSuppliers: selectedSuppliers
            };

            this.BaseService
                .post_request('/addItem', itemModel)
                .then((resp) => {
                    this.hideDialog();
                    this.viewItems();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });

        }

        /**
         * viewItems
         */
        public viewItems() {
            this.BaseService
                .post_request('/viewItems', {})
                .then((resp) => {
                    this.listItems = resp.data.listItems;
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * removeItem
         */
        public removeItem(item: IItem) {
            
            let itemModel = {
                item: item
            };

           this.BaseService
                .post_request('/deleteItem', itemModel)
                .then((resp) => {
                    this.viewItems();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);  
                });

        }

        /**
         * updateItem
         */
        public updateItem(item: IItem, itemID, selectedSuppliers: Array<any>) {
            
            let itemModel = {
                item: item,
                listSuppliers: selectedSuppliers
            };

            this.BaseService
                .post_request('/editItem', itemModel)
                .then((resp) => {
                    this.viewItems();
                    this.showToast(resp.data.message);
                    this.LocalStorageService.remove(itemID);
                })
                .catch((err) => {
                    this.showToast(err);
                })
        }
    }

    ItemsService.$inject = ['ToastService', 'DialogService', 'BaseService', 'LocalStorageService'];
    
    angular
        .module('inventory-management')
        .service('ItemsService', ItemsService);
}