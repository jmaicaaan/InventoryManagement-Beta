var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
"use strict";
var app;
(function (app) {
    'use strict';
    angular
        .module('inventory-management', [
        'ngMaterial',
        'ui.router',
        'md.data.table',
        'material.components.autocomplete'
    ]);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    function config($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('serviceInterceptor');
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('dashboard', {
            url: '/',
            templateUrl: 'app/templates/Dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm',
            title: 'Dashboard'
        })
            .state('dashboard.brands', {
            url: 'brands',
            templateUrl: 'app/templates/Brands/brands.html',
            controller: 'BrandsController',
            controllerAs: 'vm',
            title: 'Brands'
        })
            .state('dashboard.categories', {
            url: 'categories',
            templateUrl: 'app/templates/Categories/categories.html',
            controller: 'CategoriesController',
            controllerAs: 'vm',
            title: 'Categories'
        })
            .state('dashboard.items', {
            url: 'items',
            templateUrl: 'app/templates/Items/items.html',
            controller: 'ItemsController',
            controllerAs: 'vm',
            title: 'Items'
        })
            .state('dashboard.suppliers', {
            url: 'suppliers',
            templateUrl: 'app/templates/Suppliers/suppliers.html',
            controller: 'SuppliersController',
            controllerAs: 'vm',
            title: 'Suppliers'
        })
            .state('dashboard.stocks', {
            url: 'stocks',
            templateUrl: 'app/templates/Stocks/stocks.html',
            controller: 'StocksController',
            controllerAs: 'vm',
            title: 'Stocks'
        })
            .state('dashboard.units', {
            url: 'units',
            templateUrl: 'app/templates/Units/units.html',
            controller: 'UnitsController',
            controllerAs: 'vm',
            title: 'Units'
        });
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    angular
        .module('inventory-management')
        .config(config);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var BaseController = (function () {
        function BaseController(BaseService) {
            this.BaseService = BaseService;
        }
        /**
         * add
         */
        BaseController.prototype.add = function (url, data) {
            return this.BaseService.post_request(url, data);
        };
        /**
         * update
         */
        BaseController.prototype.update = function (url, data) {
            return this.BaseService.post_request(url, data);
        };
        /**
         * remove
         */
        BaseController.prototype.remove = function (url, data) {
            return this.BaseService.post_request(url, data);
        };
        /**
         * view
         */
        BaseController.prototype.view = function (url, data) {
            return this.BaseService.post_request(url, data);
        };
        /**
        * view
        */
        BaseController.prototype.view_without_data = function (url) {
            return this.BaseService.post_request(url, {});
        };
        return BaseController;
    }());
    app.BaseController = BaseController;
    BaseController.$inject = ['BaseService'];
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var BrandsController = (function (_super) {
        __extends(BrandsController, _super);
        function BrandsController($mdDialog, BrandsService, BaseService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$mdDialog = $mdDialog;
            _this.BrandsService = BrandsService;
            _this.viewBrands();
            return _this;
        }
        /**
         * showDialog
         */
        BrandsController.prototype.showDialog = function (config) {
            return this.BrandsService.showDialog(config);
        };
        /**
         * hideDialog
         */
        BrandsController.prototype.hideDialog = function () {
            this.BrandsService.hideDialog();
        };
        /**
         * showConfirmDialog
         */
        BrandsController.prototype.showConfirmDialog = function (confirmConfig) {
            return this.BrandsService.showDialog(confirmConfig);
        };
        /**
         * showAddDialog
         */
        BrandsController.prototype.showAddDialog = function () {
            var config = {
                templateUrl: 'app/templates/Brands/brands-dialog.html',
                controller: BrandsDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };
            this.showDialog(config);
        };
        /**
         * showEditDialog
         */
        BrandsController.prototype.showEditDialog = function (brand) {
            var config = {
                templateUrl: 'app/templates/Brands/brands-edit-dialog.html',
                controller: BrandsDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    brand: brand
                }
            };
            this.showDialog(config);
        };
        /**
         * viewBrands
         */
        BrandsController.prototype.viewBrands = function () {
            var _this = this;
            this.view_without_data('/viewBrands')
                .then(function (brands) {
                _this.BrandsService.listBrands = brands.data.listBrands;
            });
        };
        /**
         * editBrand
         */
        BrandsController.prototype.editBrand = function (brand) {
            this.showEditDialog(brand);
        };
        /**
         * deleteBrand
         */
        BrandsController.prototype.deleteBrand = function (brand) {
            var _this = this;
            var confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this brand?')
                .textContent('Brand Name: ' + brand.name)
                .ok('Delete')
                .cancel('Cancel');
            this.BrandsService.showDialog(confirmConfig)
                .then(function () {
                var brandModel = {
                    brand: brand
                };
                _this.remove('/deleteBrand', brandModel)
                    .then(function (resp) {
                    _this.viewBrands();
                })
                    .catch(function (err) {
                    _this.BrandsService.showToast(err);
                });
            });
        };
        return BrandsController;
    }(app.BaseController));
    var BrandsDialogController = (function (_super) {
        __extends(BrandsDialogController, _super);
        function BrandsDialogController($mdDialog, BrandsService, BaseService, brand) {
            var _this = _super.call(this, $mdDialog, BrandsService, BaseService) || this;
            _this.brand = brand;
            return _this;
        }
        /**
         * addBrand
         */
        BrandsDialogController.prototype.addBrand = function (brand) {
            var _this = this;
            var brandModel = {
                brand: brand
            };
            this.add('/addBrand', brandModel)
                .then(function (response) {
                _this.hideDialog();
                _this.viewBrands();
            })
                .catch(function (err) {
                _this.BrandsService.showToast(err);
            });
        };
        /**
         * hideDialog
         */
        BrandsDialogController.prototype.hideDialog = function () {
            this.BrandsService.hideDialog();
        };
        /**
         * editBrand
         */
        BrandsDialogController.prototype.editBrand = function () {
            var _this = this;
            var brandModel = {
                brand: this.brand
            };
            this.update('/editBrand', brandModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.viewBrands();
            })
                .catch(function (err) {
                _this.BrandsService.showToast(err);
            });
        };
        return BrandsDialogController;
    }(BrandsController));
    BrandsController.$inject = ['$mdDialog', 'BrandsService', 'BaseService'];
    BrandsDialogController.$inject = ['$mdDialog', 'BrandsService', 'BaseService', 'brand'];
    angular
        .module('inventory-management')
        .controller('BrandsController', BrandsController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var CategoriesController = (function (_super) {
        __extends(CategoriesController, _super);
        function CategoriesController($mdDialog, CategoriesService, BaseService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$mdDialog = $mdDialog;
            _this.CategoriesService = CategoriesService;
            return _this;
        }
        /**
         * showDialog
         */
        CategoriesController.prototype.showDialog = function () {
            var config = {
                templateUrl: 'app/templates/Categories/categories-dialog.html',
                controller: CategoriesDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };
            this.$mdDialog.show(config);
        };
        /**
         * hideDialog
         */
        CategoriesController.prototype.hideDialog = function () {
            this.$mdDialog.hide();
        };
        return CategoriesController;
    }(app.BaseController));
    var CategoriesDialogController = (function (_super) {
        __extends(CategoriesDialogController, _super);
        function CategoriesDialogController($mdDialog, CategoriesService, BaseService) {
            return _super.call(this, $mdDialog, CategoriesService, BaseService) || this;
        }
        /**
         * addCategory
         */
        CategoriesDialogController.prototype.addCategory = function (category) {
            this.add('Sample Url', category);
        };
        return CategoriesDialogController;
    }(CategoriesController));
    CategoriesController.$inject = ['$mdDialog', 'CategoriesService', 'BaseService'];
    CategoriesDialogController.$inject = ['$mdDialog', 'CategoriesService', 'BaseService'];
    angular
        .module('inventory-management')
        .controller('CategoriesController', CategoriesController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var DashboardController = (function () {
        function DashboardController($mdSidenav, DashboardService) {
            this.$mdSidenav = $mdSidenav;
            this.DashboardService = DashboardService;
        }
        /**
         * toggleSideNav
         */
        DashboardController.prototype.toggleSideNav = function () {
            this.$mdSidenav('sidenav').toggle();
        };
        return DashboardController;
    }());
    DashboardController.$inject = ['$mdSidenav', 'DashboardService'];
    angular
        .module('inventory-management')
        .controller('DashboardController', DashboardController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var ItemsController = (function (_super) {
        __extends(ItemsController, _super);
        function ItemsController($mdDialog, ItemsService, BaseService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$mdDialog = $mdDialog;
            _this.ItemsService = ItemsService;
            return _this;
        }
        /**
         * ShowDialog
         */
        ItemsController.prototype.showDialog = function () {
            var config = {
                templateUrl: 'app/templates/Items/items-dialog.html',
                controller: ItemsDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };
            this.$mdDialog.show(config);
        };
        /**
         * HideDialog
         */
        ItemsController.prototype.hideDialog = function () {
            this.$mdDialog.hide();
        };
        return ItemsController;
    }(app.BaseController));
    var ItemsDialogController = (function (_super) {
        __extends(ItemsDialogController, _super);
        function ItemsDialogController($mdDialog, ItemsService, BaseService) {
            var _this = _super.call(this, $mdDialog, ItemsService, BaseService) || this;
            _this.suppliers = [
                {
                    name: 'Supplier 1',
                    email: 'test@example.com'
                },
                {
                    name: 'Supplier 2',
                    email: 'test@example.com'
                },
                {
                    name: 'Supplier 3',
                    email: 'test@example.com'
                }
            ];
            /**
             * The Supplier variable needs to be initialized for the chips to work.
             */
            _this.item = {
                Suppliers: []
            };
            return _this;
        }
        /**
         * addItem
         */
        ItemsDialogController.prototype.addItem = function (item) {
            this.add('Sample URL', item);
        };
        return ItemsDialogController;
    }(ItemsController));
    ItemsController.$inject = ['$mdDialog', 'ItemsService', 'BaseService'];
    ItemsDialogController.$inject = ['$mdDialog', 'ItemsService', 'BaseService'];
    angular
        .module('inventory-management')
        .controller('ItemsController', ItemsController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var StocksController = (function (_super) {
        __extends(StocksController, _super);
        function StocksController($mdDialog, StocksService, BaseService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$mdDialog = $mdDialog;
            _this.StocksService = StocksService;
            return _this;
        }
        /**
         * ShowDialog
         */
        StocksController.prototype.showDialog = function () {
            var config = {
                templateUrl: 'app/templates/Stocks/stocks-dialog.html',
                controller: StocksDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };
            this.$mdDialog.show(config);
        };
        /**
         * HideDialog
         */
        StocksController.prototype.hideDialog = function () {
            this.$mdDialog.hide();
        };
        return StocksController;
    }(app.BaseController));
    var StocksDialogController = (function (_super) {
        __extends(StocksDialogController, _super);
        function StocksDialogController($mdDialog, StocksService, BaseService) {
            return _super.call(this, $mdDialog, StocksService, BaseService) || this;
        }
        /**
        * addStock
        */
        StocksDialogController.prototype.addStock = function (stock) {
            this.add("Sample URL", stock);
        };
        return StocksDialogController;
    }(StocksController));
    StocksController.$inject = ['$mdDialog', 'StocksService', 'BaseService'];
    StocksDialogController.$inject = ['$mdDialog', 'StocksService', 'BaseService'];
    angular
        .module('inventory-management')
        .controller('StocksController', StocksController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var SuppliersController = (function (_super) {
        __extends(SuppliersController, _super);
        function SuppliersController($mdDialog, SuppliersService, BaseService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$mdDialog = $mdDialog;
            _this.SuppliersService = SuppliersService;
            return _this;
        }
        /**
         * ShowDialog
         */
        SuppliersController.prototype.showDialog = function () {
            var config = {
                templateUrl: 'app/templates/Suppliers/suppliers-dialog.html',
                controller: SupplierDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };
            this.$mdDialog.show(config);
        };
        /**
         * HideDialog
         */
        SuppliersController.prototype.hideDialog = function () {
            this.$mdDialog.hide();
        };
        return SuppliersController;
    }(app.BaseController));
    var SupplierDialogController = (function (_super) {
        __extends(SupplierDialogController, _super);
        function SupplierDialogController($mdDialog, SuppliersService, BaseService) {
            return _super.call(this, $mdDialog, SuppliersService, BaseService) || this;
        }
        /**
         * add
         */
        SupplierDialogController.prototype.addSupplier = function (supplier) {
            this.add("Sample URL", supplier);
        };
        return SupplierDialogController;
    }(SuppliersController));
    SuppliersController.$inject = ['$mdDialog', 'SuppliersService', 'BaseService'];
    SupplierDialogController.$inject = ['$mdDialog', 'SuppliersService', 'BaseService'];
    angular
        .module('inventory-management')
        .controller('SuppliersController', SuppliersController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var UnitsController = (function (_super) {
        __extends(UnitsController, _super);
        function UnitsController($mdDialog, UnitsService, BaseService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$mdDialog = $mdDialog;
            _this.UnitsService = UnitsService;
            return _this;
        }
        /**
         * showDialog
         */
        UnitsController.prototype.showDialog = function () {
            var config = {
                templateUrl: 'app/templates/Units/units-dialog.html',
                controller: UnitsDialogController,
                controllerAs: 'vm',
                fullscreen: true
            };
            this.$mdDialog.show(config);
        };
        /**
         * hideDialog
         */
        UnitsController.prototype.hideDialog = function () {
            this.$mdDialog.hide();
        };
        return UnitsController;
    }(app.BaseController));
    var UnitsDialogController = (function (_super) {
        __extends(UnitsDialogController, _super);
        function UnitsDialogController($mdDialog, UnitsService, BaseService) {
            return _super.call(this, $mdDialog, UnitsService, BaseService) || this;
        }
        /**
         * addUnit
         */
        UnitsDialogController.prototype.addUnit = function (unit) {
            this.add('Sample Url', unit);
        };
        return UnitsDialogController;
    }(UnitsController));
    UnitsController.$inject = ['$mdDialog', 'UnitsService', 'BaseService'];
    UnitsDialogController.$inject = ['$mdDialog', 'UnitsService', 'BaseService'];
    angular
        .module('inventory-management')
        .controller('UnitsController', UnitsController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    /*
     * Automatically close the sidenav when the state is changed.
     */
    function sidenavWatcherDirective($mdSidenav, $rootScope) {
        var link = function (scope, element) {
            var sideNav = element.find('md-sidenav')[0];
            if (sideNav.hasAttribute('md-component-id')) {
                var component_id_1 = sideNav.getAttribute('md-component-id');
                $rootScope.$on('$stateChangeStart', function () {
                    $mdSidenav(component_id_1).toggle();
                });
            }
            else {
                throw 'No attribute on element <md-sidenav></md-sidenav>';
            }
        };
        return {
            restrict: 'A',
            scope: {},
            link: link
        };
    }
    sidenavWatcherDirective.$inject = ['$mdSidenav', '$rootScope'];
    angular
        .module('inventory-management')
        .directive('sidenavWatcherDirective', sidenavWatcherDirective);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    function run($rootScope, DashboardService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var name = toState.title;
            DashboardService.stateNameModifier(name);
        });
    }
    run.$inject = ['$rootScope', 'DashboardService'];
    angular
        .module('inventory-management')
        .run(run);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var BaseService = (function () {
        function BaseService($http) {
            this.$http = $http;
        }
        /**
         * post_request
         */
        BaseService.prototype.post_request = function (url, data) {
            var config = {
                url: url,
                method: 'POST',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            };
            return this.$http(config)
                .then(function (data) { return data; })
                .catch(function (err) {
                throw 'Error has occured. ' + err;
            });
        };
        /**
         * get_request
         */
        BaseService.prototype.get_request = function (url, data) {
            var config = {
                url: url,
                method: 'GET',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            };
            return this.$http(config)
                .then(function (data) { return data; })
                .catch(function (err) {
                throw 'Error has occured. ' + err;
            });
        };
        /**
         * get_request without data
         */
        BaseService.prototype.get_request_without_data = function (url) {
            var config = {
                url: url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            };
            return this.$http(config)
                .then(function (data) { return data; })
                .catch(function (err) {
                throw 'Error has occured. ' + err;
            });
        };
        return BaseService;
    }());
    app.BaseService = BaseService;
    BaseService.$inject = ['$http'];
    angular
        .module('inventory-management')
        .service('BaseService', BaseService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var BrandsService = (function () {
        function BrandsService(ToastService, DialogService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
            this.listBrands = [];
        }
        /**
         * showToast
         */
        BrandsService.prototype.showToast = function (message) {
            this.ToastService.showToast(message);
        };
        /**
         * showDialog
         */
        BrandsService.prototype.showDialog = function (config) {
            return this.DialogService.showDialog(config);
        };
        /**
         * hideDialog
         */
        BrandsService.prototype.hideDialog = function () {
            this.DialogService.hideDialog();
        };
        return BrandsService;
    }());
    BrandsService.$inject = ['ToastService', 'DialogService'];
    angular
        .module('inventory-management')
        .service('BrandsService', BrandsService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var CategoriesService = (function (_super) {
        __extends(CategoriesService, _super);
        function CategoriesService($http) {
            return _super.call(this, $http) || this;
        }
        return CategoriesService;
    }(app.BaseService));
    CategoriesService.$inject = ['$http'];
    angular
        .module('inventory-management')
        .service('CategoriesService', CategoriesService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var DashboardService = (function () {
        function DashboardService() {
            this.state = {};
        }
        DashboardService.prototype.stateNameModifier = function (name) {
            this.state['name'] = name;
        };
        return DashboardService;
    }());
    DashboardService.$inject = ['$state'];
    angular
        .module('inventory-management')
        .service('DashboardService', DashboardService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var DialogService = (function () {
        function DialogService($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        /**
         * showDialog
         */
        DialogService.prototype.showDialog = function (config) {
            return this.$mdDialog.show(config);
        };
        /**
         * hideDialog
         */
        DialogService.prototype.hideDialog = function () {
            this.$mdDialog.hide();
        };
        return DialogService;
    }());
    DialogService.$inject = ['$mdDialog'];
    angular
        .module('inventory-management')
        .service('DialogService', DialogService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var ItemsService = (function (_super) {
        __extends(ItemsService, _super);
        function ItemsService($http) {
            return _super.call(this, $http) || this;
        }
        return ItemsService;
    }(app.BaseService));
    ItemsService.$inject = ['$http'];
    angular
        .module('inventory-management')
        .service('ItemsService', ItemsService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    function serviceInterceptor($q, $injector) {
        return {
            request: function (config) {
                var deferred = $q.defer();
                if (config.withCredentials) {
                    return getServerURL()
                        .then(function (serverURL) {
                        var url = [serverURL, config.url].join('');
                        config.url = url;
                        deferred.resolve(config);
                        return deferred.promise;
                    });
                }
                return config;
            },
            responseError: function (response) {
                if (response.status === 500)
                    throw response.data.errorMessage;
                // throw 'response';
                return response;
            }
        };
        function getServerConfigFile() {
            var $http = $injector.get('$http');
            return $http.get('app/server-config.json')
                .then(function (res) { return res; });
        }
        function getServerURL() {
            return getServerConfigFile()
                .then(function (response) {
                var data = response.data;
                var url = '';
                url = [data.url, data.port].join(':');
                url = [url, data.app_context_root].join('/');
                return url;
            });
        }
    }
    angular
        .module('inventory-management')
        .factory('serviceInterceptor', serviceInterceptor);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var StocksService = (function (_super) {
        __extends(StocksService, _super);
        function StocksService($http) {
            return _super.call(this, $http) || this;
        }
        return StocksService;
    }(app.BaseService));
    StocksService.$inject = ['$http'];
    angular
        .module('inventory-management')
        .service('StocksService', StocksService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var SuppliersService = (function (_super) {
        __extends(SuppliersService, _super);
        function SuppliersService($http) {
            return _super.call(this, $http) || this;
        }
        return SuppliersService;
    }(app.BaseService));
    SuppliersService.$inject = ['$http'];
    angular
        .module('inventory-management')
        .service('SuppliersService', SuppliersService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var ToastService = (function () {
        function ToastService($mdToast) {
            this.$mdToast = $mdToast;
        }
        /**
         * showToast
         */
        ToastService.prototype.showToast = function (message) {
            this.$mdToast.show(this.$mdToast
                .simple()
                .textContent(message)
                .position('top left')
                .hideDelay(5000));
        };
        return ToastService;
    }());
    angular
        .module('inventory-management')
        .service('ToastService', ToastService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var UnitsService = (function (_super) {
        __extends(UnitsService, _super);
        function UnitsService($http) {
            return _super.call(this, $http) || this;
        }
        return UnitsService;
    }(app.BaseService));
    UnitsService.$inject = ['$http'];
    angular
        .module('inventory-management')
        .service('UnitsService', UnitsService);
})(app || (app = {}));
//# sourceMappingURL=bundle.js.map