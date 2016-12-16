namespace app{
    'use strict';

    export interface IStock{
        Item: IItem;
        Quantity: number;
        IsStockIn: boolean;
    }
}