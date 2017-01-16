namespace app{
    'use strict';

    class ItemDetailsController{

        constructor(private $stateParams: angular.ui.IStateParamsService, private LocalStorageService: ILocalStorageService,
                private ItemsService: IItemsService, private UIDService: IUIDService){
            this.item = this.getItem();
            this.selectedSuppliers = this.getItemSupplier();
        }

        public item: any = {};
        public selectedSuppliers = [];

        /**
         * getItem
         */
        public getItem() {
            let itemID = this.$stateParams['item'];
            let itemLocalStorage = this.LocalStorageService.get(itemID);
            return JSON.parse(itemLocalStorage);
        }

        /**
         * getItemSupplier
         */
        public getItemSupplier() {
            
            let itemSuppliers = [];

            this.item.itemSupplier.forEach(i => {
                itemSuppliers.push(i.supplier);
            });
            
            return itemSuppliers;
        }

        /**
         * editItem
         */
        public editItem(item) {

            let itemID = this.$stateParams['item'];
            this.ItemsService.updateItem(item, itemID, this.selectedSuppliers);
        }

        /**
         * generateItemCode
         */
        public generateItemCode() {
            this.item.code = this.UIDService.generateUID();
        }
    }

    ItemDetailsController.$inject = ['$stateParams', 'LocalStorageService', 'ItemsService', 'UIDService'];

    angular
        .module('inventory-management')
        .controller('ItemDetailsController', ItemDetailsController);
}