namespace app{
    'use strict';

    class ItemDetailsController extends BaseController{

        constructor(private $stateParams: angular.ui.IStateParamsService, private LocalStorageService: ILocalStorageService,
                private ItemsService: IItemsService, BaseService: IBaseService){
            super(BaseService);
            this.item = this.getItem();
            this.selectedSuppliers = this.item.listSuppliers;
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
         * editItem
         */
        public editItem(item) {

             let itemModel = {
                item: item,
                listSuppliers: this.selectedSuppliers
            };

            this.update('/editItem', itemModel)
                .then((resp) => {
                    this.viewItems();
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
    }

    ItemDetailsController.$inject = ['$stateParams', 'LocalStorageService', 'ItemsService', 'BaseService'];

    angular
        .module('inventory-management')
        .controller('ItemDetailsController', ItemDetailsController);
}