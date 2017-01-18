namespace app{
    'use strict';

    export interface IItemsService extends IDialogService, IToastService{

        listItems: Array<IItem>;
        listBrands: Array<IBrand>;
        listUnits: Array<IUnit>;
        listCategories: Array<ICategory>;
        listSuppliers: Array<ISupplier>;

        add(item: IItem, selectedSuppliers: Array<any>): void;
        view(): void;
        remove(item: IItem): void;
        update(item: IItem, itemID: any, selectedSuppliers: Array<any>): void;
    }
}