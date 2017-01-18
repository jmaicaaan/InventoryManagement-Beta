namespace app{
    'use strict';

    class BrandsService implements IBrandService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService,
            private BaseService: IBaseService){
        }

        public listBrands: Array<IBrand> = [];
        
        /**
         * showToast
         */
        public showToast(message) {
            this.ToastService.showToast(message);
        }

        /**
         * showDialog
         */
        public showDialog(config) {
           return this.DialogService.showDialog(config);
        }

        /**
         * hideDialog  
         */
        public hideDialog() {
            this.DialogService.hideDialog();
        }

        /**
         * add
         */
        public add(brand: IBrand) {
            
            let brandModel = {
                brand: brand
            };

            this.BaseService
                .post_request('/addBrand', brandModel)
                .then((resp) => {
                    this.hideDialog();
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * update
         */
        public update(brand: IBrand) {
            
            let brandModel = {
                brand: brand
            };

            this.BaseService
                .post_request('/editBrand', brandModel)
                .then((resp) => {
                    this.hideDialog();
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * view
         */
        public view() {
            this.BaseService
                .post_request('/viewBrands', {})
                .then((resp) => {
                    this.listBrands = resp.data.listBrands;
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * remove
         */
        public remove(brand: IBrand) {
            
            let brandModel = {
                brand: brand
            };

            this.BaseService
                .post_request('/deleteBrand', brandModel)
                .then((resp) => {
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }
    }

    BrandsService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    
    angular
        .module('inventory-management')
        .service('BrandsService', BrandsService);
}