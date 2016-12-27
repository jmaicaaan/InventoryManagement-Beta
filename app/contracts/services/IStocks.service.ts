namespace app{
    'use strict';

    export interface IStocksService extends IDialogService, IToastService{

        listStocks: Array<IStock>;
    }
}