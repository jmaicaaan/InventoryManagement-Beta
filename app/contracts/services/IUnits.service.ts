namespace app{
    'use strict';

    export interface IUnitsService extends IDialogService, IToastService{

        listUnits: Array<IUnit>;
    }
}