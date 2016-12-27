namespace app{
    'use strict';

    export function ItemOnEnter(BaseService: IBaseService, ItemsService: IItemsService){

        viewItems();
        loadBrands();
        loadUnits();
        loadCategories();
        loadSuppliers();
        
        function viewItems(){
            BaseService.post_request('/viewItems', {})
                .then((items) => {
                    ItemsService.listItems = items.data.listItems;
                })
                .catch((err) => {
                    ItemsService.showToast(err);
                });
        }

        function loadBrands(){
            BaseService.post_request('/viewBrands', {})
                .then((brands) => {
                    ItemsService.listBrands = brands.data.listBrands;
                })
                .catch((err) => {
                    ItemsService.showToast(err);  
                });
        }

        function loadUnits() {
            BaseService.post_request('/viewUnits', {})
                .then((units) => {
                    ItemsService.listUnits = units.data.listUnits;
                })
                .catch((err) => {
                    ItemsService.showToast(err);  
                });
        }

        function loadCategories() {
            BaseService.post_request('/viewCategories', {})
                .then((categories) => {
                    ItemsService.listCategories = categories.data.listCategories;
                })
                .catch((err) => {
                    ItemsService.showToast(err);  
                });
        }

        function loadSuppliers() {
            BaseService.post_request('/viewSuppliers', {})
                .then((suppliers) => {
                    ItemsService.listSuppliers = suppliers.data.listSuppliers;
                })
                .catch((err) => {
                    ItemsService.showToast(err);  
                });
        }
    }

    ItemOnEnter.$inject = ['BaseService', 'ItemsService'];
}