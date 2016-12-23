namespace app{
    'use strict';

    export interface IStock{
        item: IItem;
        quantity: number;
        isStockIn: boolean;
    }
}