namespace app{
    'use strict';

    export interface IItem{
        name: string;
        description: string;
        code: string;
        location: string;
        quantity: number;
        totalStocks: number;
        brand: IBrand;
        category: ICategory;
        suppliers: Array<ISupplier>;
        unit: IUnit;
    }
}