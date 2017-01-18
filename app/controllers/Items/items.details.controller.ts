namespace app{
    'use strict';

    class ItemDetailsController{

        constructor(private $stateParams: angular.ui.IStateParamsService, private LocalStorageService: ILocalStorageService,
                private ItemsService: IItemsService, private UIDService: IUIDService, private $timeout: angular.ITimeoutService,
                private BrandsService: IBrandService, private CategoriesService: ICategoriesService,
                private UnitsService: IUnitsService, private SuppliersService: ISupplierService){
            this.item = this.getItem();
            this.selectedSuppliers = this.getItemSupplier();
            this.viewSuppliers();
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
            this.ItemsService.update(item, itemID, this.selectedSuppliers);
        }

        /**
         * generateItemCode
         */
        public generateItemCode() {
            this.item.code = this.UIDService.generateUID();
        }

         /**
         * viewSuppliers
         */
        public viewSuppliers() {
            this.$timeout(() => {
                this.SuppliersService.view();
            }, 2000);
        }
    }

    ItemDetailsController.$inject = ['$stateParams', 'LocalStorageService', 'ItemsService', 'UIDService', '$timeout',
        'BrandsService', 'CategoriesService', 'UnitsService', 'SuppliersService'];

    angular
        .module('inventory-management')
        .controller('ItemDetailsController', ItemDetailsController);
}