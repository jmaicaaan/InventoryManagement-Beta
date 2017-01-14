namespace app{
    'use strict';

    export function DashboardOnEnter(BaseService: IBaseService, DashboardService: IDashboardService){

        viewItems();

        function viewItems(){
            BaseService.post_request('/viewItems', {})
                .then((items) => {
                    DashboardService.listLowStocks = items.data.listItems;
                })
                .catch((err) => {
                    DashboardService.showToast(err);
                });
        }
    }

    DashboardOnEnter.$inject = ['BaseService', 'DashboardService'];
}