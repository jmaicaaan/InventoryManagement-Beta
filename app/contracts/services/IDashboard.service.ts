namespace app{
    'use strict';

    export interface IDashboardService extends IDialogService, IToastService{

        stateNameModifier(name: string): void;

        listLowStocks: Array<IItem>;
    }
}