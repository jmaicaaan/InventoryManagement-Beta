namespace app {
    'use strict';

    export class ItemEditController{
        constructor($mdDialog: angular.material.IDialogService, private ItemsService: IItemsService, private selectedItem: IItem,
           private $timeout: angular.ITimeoutService, private BrandsService: IBrandService, private CategoriesService: ICategoriesService,
            private UnitsService: IUnitsService, private SuppliersService: ISupplierService) {
            this.item = this.selectedItem;
            this.selectedSuppliers = this.getItemSupplier();
        }


        public isEnableEdit = false;
        public item: any = {};
        public selectedSuppliers = [];

        /**
        * toggleEdit
        */
        public toggleEdit() {
            this.isEnableEdit = !this.isEnableEdit;
        }

        /**
        * getItemSupplier
        */
        public getItemSupplier() {

            let itemSuppliers = [];

            if (Object.keys(this.selectedItem).length != 0)
                this.selectedItem.itemSupplier.forEach(i => {
                    itemSuppliers.push(i.supplier);
                });

            return itemSuppliers;
        }

        /**
        * editItem
        */
        public editItem(item: IItem) {
            this.ItemsService.update(item, item.id, this.selectedSuppliers);
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

    ItemEditController.$inject = ['$mdDialog', 'ItemsService', 'selectedItem','$timeout', 'BrandsService', 
        'CategoriesService', 'UnitsService', 'SuppliersService'];
}