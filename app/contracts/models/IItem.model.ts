namespace app{
    'use strict';

    export interface IItem{
        id: number;
        name: string;
        description: string;
        code: string;
        location: string;
        quantity: number;
        totalStocks: number;
        brand: IBrand;
        category: ICategory;
        suppliers: Array<ISupplier>;
        itemSupplier: any;
        unit: IUnit;
    }
}