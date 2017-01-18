namespace app{
    'use strict';

    export interface IBrandService extends IDialogService, IToastService, ICrudService{

        listBrands: Array<IBrand>;
    }
}