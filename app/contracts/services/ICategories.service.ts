namespace app{
    'use strict';

    export interface ICategoriesService extends IDialogService, IToastService, ICrudService{
        
        listCategories: Array<ICategory>;
    }
}