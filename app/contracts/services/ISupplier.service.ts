namespace app{
    'use strict';

    export interface ISupplierService extends IDialogService, IToastService, ICrudService{

        listSuppliers: Array<ISupplier>;
    }
}