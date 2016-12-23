namespace app{
    'use strict';

    export interface IBrandService extends IDialogService, IToastService{

        listBrands: Array<IBrand>;
    }
}