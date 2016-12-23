namespace app{
    'use strict';

    export interface ICategoriesService extends IDialogService, IToastService{
        
        listCategories: Array<ICategory>;
    }
}