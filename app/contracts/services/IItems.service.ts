namespace app{
    'use strict';

    export interface IItemsService extends IDialogService, IToastService{

        listItems: Array<IItem>;
        listBrands: Array<IBrand>;
        listUnits: Array<IUnit>;
        listCategories: Array<ICategory>;
        listSuppliers: Array<ISupplier>;

        addItem(item: IItem, selectedSuppliers: Array<any>): void;
        viewItems(): void;
        removeItem(item: IItem): void;
        updateItem(item: IItem, itemID: any, selectedSuppliers: Array<any>): void;
    }
}