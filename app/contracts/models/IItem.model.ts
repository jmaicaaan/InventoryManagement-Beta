namespace app{
    'use strict';

    export interface IItem{
        Name: string;
        Description: string;
        Code: string;
        Location: string;
        Quantity: number;
        TotalStocks: number;
        Brand: IBrand;
        Category: ICategory;
        Suppliers: Array<ISupplier>;
        Unit: IUnit;
    }
}