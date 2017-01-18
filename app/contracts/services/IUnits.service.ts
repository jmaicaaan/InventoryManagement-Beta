namespace app{
    'use strict';

    export interface IUnitsService extends IDialogService, IToastService, ICrudService{

        listUnits: Array<IUnit>;
    }
}