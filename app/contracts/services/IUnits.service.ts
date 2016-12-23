namespace app{
    'use strict';

    export interface IUnitsService extends IDialogService, IToastService{

        public listUnits: Array<IUnit>;
    }
}