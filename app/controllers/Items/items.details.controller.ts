namespace app{
    'use strict';

    class ItemDetailsController extends BaseController{

        constructor(private $stateParams: angular.ui.IStateParamsService, private LocalStorageService: ILocalStorageService,
                private ItemsService: IItemsService, BaseService: IBaseService, private UIDService: IUIDService){
            super(BaseService);
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
             let itemModel = {
                item: item,
                listSuppliers: this.selectedSuppliers
            };
            

            this.update('/editItem', itemModel)
                .then((resp) => {
                    this.viewItems();
                    this.ItemsService.showToast(resp.data.message);
                    this.LocalStorageService.remove(itemID);
                })
                .catch((err) => {
                    this.ItemsService.showToast(err);
                });
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
         * generateItemCode
         */
        public generateItemCode() {
            this.item.code = this.UIDService.generateUID().toUpperCase();
        }
    }

    ItemDetailsController.$inject = ['$stateParams', 'LocalStorageService', 'ItemsService', 'BaseService', 'UIDService'];

    angular
        .module('inventory-management')
        .controller('ItemDetailsController', ItemDetailsController);
}