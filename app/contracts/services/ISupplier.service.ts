namespace app{
    'use strict';

    export interface ISupplierService extends IDialogService, IToastService{

        listSuppliers: Array<ISupplier>;
    }
}