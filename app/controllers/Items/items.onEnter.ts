namespace app {
    'use strict';

    export function ItemOnEnter(BaseService: IBaseService, ItemsService: IItemsService, $timeout: angular.ITimeoutService,
        BrandsService: IBrandService, CategoriesService: ICategoriesService,
        UnitsService: IUnitsService, SuppliersService: ISupplierService) {

        loadDependecies();

        function loadDependecies() {
            BrandsService.view();
            UnitsService.view();
            CategoriesService.view();
            SuppliersService.view();
        }
    }

    ItemOnEnter.$inject = ['BaseService', 'ItemsService', '$timeout', 'BrandsService', 'CategoriesService', 'UnitsService', 'SuppliersService'];
}