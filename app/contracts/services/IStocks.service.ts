namespace app{
    'use strict';

    export interface IStocksService extends IDialogService, IToastService, ICrudService{

        listStocks: Array<IStock>;
    }
}