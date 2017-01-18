namespace app{
    'use strict';

    class SuppliersService implements ISupplierService{
        constructor(private ToastService: IToastService, private DialogService: IDialogService, 
            private BaseService: IBaseService){}

        public listSuppliers: Array<ISupplier> = [];

        
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
        public add(supplier: ISupplier) {
            
            let supplierModel = {
                supplier: supplier
            };

            this.BaseService
                .post_request('/addSupplier', supplierModel)
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
        public update(supplier: ISupplier) {
            
            let supplierModel = {
                supplier: supplier
            };

            this.BaseService
                .post_request('/editSupplier', supplierModel)
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
                .post_request('/viewSuppliers', {})
                .then((resp) => {
                    this.listSuppliers = resp.data.listSuppliers;
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }

        /**
         * remove
         */
        public remove(supplier: ISupplier) {
            
            let supplierModel = {
                supplier: supplier
            };

            this.BaseService
                .post_request('/deleteSupplier', supplierModel)
                .then((resp) => {
                    this.view();
                    this.showToast(resp.data.message);
                })
                .catch((err) => {
                    this.showToast(err);
                });
        }
    }

    SuppliersService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    
    angular
        .module('inventory-management')
        .service('SuppliersService', SuppliersService);
}