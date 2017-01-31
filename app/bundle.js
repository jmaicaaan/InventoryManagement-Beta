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
        'angular-loading-bar',
        'ngMaterial',
        'ngMessages',
        'ngAnimate',
        'ui.router',
        'md.data.table',
        'material.components.autocomplete',
        'highcharts-ng'
    ]);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    function config($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider, $mdThemingProvider) {
        $httpProvider.interceptors.push('serviceInterceptor');
        cfpLoadingBarProvider.includeSpinner = false;
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink');
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('dashboard', {
            url: '/',
            templateUrl: 'templates/Dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm',
            title: 'Dashboard'
        })
            .state('dashboard.brands', {
            url: 'brands',
            templateUrl: 'templates/Brands/brands.html',
            controller: 'BrandsController',
            controllerAs: 'vm',
            title: 'Brands'
        })
            .state('dashboard.categories', {
            url: 'categories',
            templateUrl: 'templates/Categories/categories.html',
            controller: 'CategoriesController',
            controllerAs: 'vm',
            title: 'Categories'
        })
            .state('dashboard.items', {
            url: 'items',
            templateUrl: 'templates/Items/items.html',
            controller: 'ItemsController',
            controllerAs: 'vm',
            onEnter: app.ItemOnEnter,
            title: 'Items'
        })
            .state('dashboard.items.details', {
            url: '/details?item',
            templateUrl: 'templates/Items/items-details.html',
            controller: 'ItemDetailsController',
            controllerAs: 'vm',
            title: 'Item Details'
        })
            .state('dashboard.suppliers', {
            url: 'suppliers',
            templateUrl: 'templates/Suppliers/suppliers.html',
            controller: 'SuppliersController',
            controllerAs: 'vm',
            title: 'Suppliers'
        })
            .state('dashboard.stocks', {
            url: 'stocks',
            templateUrl: 'templates/Stocks/stocks.html',
            controller: 'StocksController',
            controllerAs: 'vm',
            title: 'Stocks'
        })
            .state('dashboard.units', {
            url: 'units',
            templateUrl: 'templates/Units/units.html',
            controller: 'UnitsController',
            controllerAs: 'vm',
            title: 'Units'
        })
            .state('dashboard.settings', {
            url: 'settings',
            abstract: true,
            templateUrl: 'templates/Settings/settings.html'
        })
            .state('dashboard.settings.general', {
            url: '/general',
            title: 'General',
            templateUrl: 'templates/Settings/General/general.html'
        })
            .state('dashboard.settings.troubleshoot', {
            url: '/troubleshoot',
            title: 'Troubleshoot',
            templateUrl: 'templates/Settings/Troubleshoot/troubleshoot.html'
        });
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'cfpLoadingBarProvider', '$mdThemingProvider'];
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
        * view_without_data
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
    var BrandsController = (function () {
        function BrandsController($mdDialog, BrandsService, $timeout) {
            this.$mdDialog = $mdDialog;
            this.BrandsService = BrandsService;
            this.$timeout = $timeout;
            this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            this.isSearchOpen = false;
            this.queryText = '';
            this.viewBrands();
        }
        /**
         * showDialog
         */
        BrandsController.prototype.showDialog = function (templateUrl, brand) {
            var config = {
                controller: BrandsDialogController,
                templateUrl: templateUrl,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    brand: brand
                }
            };
            return this.BrandsService.showDialog(config);
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
            var templateUrl = 'templates/Brands/brands-dialog.html', brand = {};
            this.showDialog(templateUrl, brand);
        };
        /**
         * showEditDialog
         */
        BrandsController.prototype.showEditDialog = function (brand) {
            var templateUrl = 'templates/Brands/brands-edit-dialog.html';
            this.showDialog(templateUrl, brand);
        };
        /**
         * viewBrands
         */
        BrandsController.prototype.viewBrands = function () {
            var _this = this;
            this.brandPromise = this.$timeout(function () {
                _this.BrandsService.view();
            }, 2000);
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
                _this.BrandsService.remove(brand);
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
            });
        };
        /**
         * toggleSearch
         */
        BrandsController.prototype.toggleSearch = function () {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        };
        return BrandsController;
    }());
    var BrandsDialogController = (function (_super) {
        __extends(BrandsDialogController, _super);
        function BrandsDialogController($mdDialog, BrandsService, brand, $timeout) {
            var _this = _super.call(this, $mdDialog, BrandsService, $timeout) || this;
            _this.brand = brand;
            return _this;
        }
        /**
         * addBrand
         */
        BrandsDialogController.prototype.addBrand = function (brand) {
            this.BrandsService.add(brand);
        };
        /**
         * editBrand
         */
        BrandsDialogController.prototype.editBrand = function () {
            this.BrandsService.update(this.brand);
        };
        return BrandsDialogController;
    }(BrandsController));
    BrandsController.$inject = ['$mdDialog', 'BrandsService', '$timeout'];
    BrandsDialogController.$inject = ['$mdDialog', 'BrandsService', 'brand', '$timeout'];
    angular
        .module('inventory-management')
        .controller('BrandsController', BrandsController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var CategoriesController = (function () {
        function CategoriesController($mdDialog, CategoriesService, $timeout) {
            this.$mdDialog = $mdDialog;
            this.CategoriesService = CategoriesService;
            this.$timeout = $timeout;
            this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            this.isSearchOpen = false;
            this.queryText = '';
            this.viewCategories();
        }
        /**
         * showDialog
         */
        CategoriesController.prototype.showDialog = function (templateUrl, category) {
            var config = {
                templateUrl: templateUrl,
                controller: CategoriesDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    category: category
                }
            };
            return this.CategoriesService.showDialog(config);
        };
        /**
         * showConfirmDialog
         */
        CategoriesController.prototype.showConfirmDialog = function (confirmConfig) {
            return this.CategoriesService.showDialog(confirmConfig);
        };
        /**
        * showAddDialog
        */
        CategoriesController.prototype.showAddDialog = function () {
            var templateUrl = 'templates/Categories/categories-dialog.html', category = {};
            this.showDialog(templateUrl, category);
        };
        /**
         * showEditDialog
         */
        CategoriesController.prototype.showEditDialog = function (category) {
            var templateUrl = 'templates/Categories/categories-edit-dialog.html';
            this.showDialog(templateUrl, category);
        };
        /**
         * viewCategories
         */
        CategoriesController.prototype.viewCategories = function () {
            var _this = this;
            this.categoryPromise = this.$timeout(function () {
                _this.CategoriesService.view();
            }, 2000);
        };
        /**
         * editCategory
         */
        CategoriesController.prototype.editCategory = function (category) {
            this.showEditDialog(category);
        };
        /**
         * deleteCategory
         */
        CategoriesController.prototype.deleteCategory = function (category) {
            var _this = this;
            var confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this category?')
                .textContent('Category Name: ' + category.name)
                .ok('Delete')
                .cancel('Cancel');
            this.CategoriesService.showDialog(confirmConfig)
                .then(function () {
                _this.CategoriesService.remove(category);
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
            });
        };
        /**
        * toggleSearch
        */
        CategoriesController.prototype.toggleSearch = function () {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        };
        return CategoriesController;
    }());
    var CategoriesDialogController = (function (_super) {
        __extends(CategoriesDialogController, _super);
        function CategoriesDialogController($mdDialog, CategoriesService, category, $timeout) {
            var _this = _super.call(this, $mdDialog, CategoriesService, $timeout) || this;
            _this.category = category;
            return _this;
        }
        /**
         * addCategory
         */
        CategoriesDialogController.prototype.addCategory = function (category) {
            this.CategoriesService.add(category);
        };
        /**
         * editCategory
         */
        CategoriesDialogController.prototype.editCategory = function () {
            this.CategoriesService.update(this.category);
        };
        return CategoriesDialogController;
    }(CategoriesController));
    CategoriesController.$inject = ['$mdDialog', 'CategoriesService', '$timeout'];
    CategoriesDialogController.$inject = ['$mdDialog', 'CategoriesService', 'category', '$timeout'];
    angular
        .module('inventory-management')
        .controller('CategoriesController', CategoriesController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var DashboardController = (function () {
        function DashboardController($mdSidenav, DashboardService, NotificationService) {
            this.$mdSidenav = $mdSidenav;
            this.DashboardService = DashboardService;
            this.NotificationService = NotificationService;
            this.chartConfig = {
                options: {
                    chart: {
                        type: 'column'
                    }
                },
                series: [],
                title: {
                    text: 'Low Stocks'
                },
                loading: true,
                credits: {
                    enabled: false
                }
            };
            this.hasLowStocks = false;
            this.getLowStocks();
        }
        /**
         * toggleSideNav
         */
        DashboardController.prototype.toggleSideNav = function () {
            this.$mdSidenav('sidenav').toggle();
        };
        /**
         * getLowStocks
         */
        DashboardController.prototype.getLowStocks = function () {
            var _this = this;
            this.DashboardService
                .getLowStocks()
                .then(function (list) {
                _this.extractItemFromList(list);
                _this.chartConfig.loading = false;
            });
        };
        /**
         * extractItemFromList
         */
        DashboardController.prototype.extractItemFromList = function (listLowStocks) {
            var _this = this;
            var len = listLowStocks.length;
            if (len > 0)
                this.hasLowStocks = true;
            listLowStocks.forEach(function (i) {
                var item = {
                    name: [i.name],
                    data: [i.totalStocks]
                };
                _this.chartConfig.series.push(item);
            });
        };
        /**
         * comingSoon
         */
        DashboardController.prototype.comingSoon = function () {
            this.DashboardService.showToast('Coming soon!');
        };
        return DashboardController;
    }());
    DashboardController.$inject = ['$mdSidenav', 'DashboardService', 'NotificationService'];
    angular
        .module('inventory-management')
        .controller('DashboardController', DashboardController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    function DashboardOnEnter(DashboardService) { }
    app.DashboardOnEnter = DashboardOnEnter;
    DashboardOnEnter.$inject = ['DashboardService'];
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var ItemsController = (function () {
        function ItemsController($mdDialog, ItemsService, $state, LocalStorageService, $timeout) {
            this.$mdDialog = $mdDialog;
            this.ItemsService = ItemsService;
            this.$state = $state;
            this.LocalStorageService = LocalStorageService;
            this.$timeout = $timeout;
            this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            this.isSearchOpen = false;
            this.queryText = '';
            this.viewItems();
        }
        /**
         * ShowDialog
         */
        ItemsController.prototype.showDialog = function (controller, templateUrl, item) {
            var config = {
                templateUrl: templateUrl,
                controller: controller,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    selectedItem: item
                }
            };
            return this.ItemsService.showDialog(config);
        };
        /**
         * showConfirmDialog
         */
        ItemsController.prototype.showConfirmDialog = function (confirmConfig) {
            return this.ItemsService.showDialog(confirmConfig);
        };
        /**
         * showAddDialog
         */
        ItemsController.prototype.showAddDialog = function () {
            var templateUrl = 'templates/Items/items-dialog.html', item = {};
            this.showDialog(ItemsDialogController, templateUrl, item);
        };
        /**
         * showEditDialog
         */
        ItemsController.prototype.showEditDialog = function (item) {
            var templateUrl = 'templates/Items/items-edit-dialog.html';
            this.showDialog(app.ItemEditController, templateUrl, item);
        };
        /**
         * viewItems
         */
        ItemsController.prototype.viewItems = function () {
            var _this = this;
            this.itemPromise = this.$timeout(function () {
                _this.ItemsService.view();
            }, 2000);
        };
        /**
         * editItem
         */
        ItemsController.prototype.editItem = function (item) {
            this.showEditDialog(item);
        };
        /**
         * deleteItem
         */
        ItemsController.prototype.deleteItem = function (item) {
            var _this = this;
            var confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this item?')
                .textContent('Item Name: ' + item.name)
                .ok('Delete')
                .cancel('Cancel');
            this.ItemsService.showDialog(confirmConfig)
                .then(function () {
                _this.ItemsService.remove(item);
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
            });
        };
        /**
         * viewItemDetails
         */
        ItemsController.prototype.viewItemDetails = function (item) {
            this.LocalStorageService.set(item.name, JSON.stringify(item));
            this.$state.go('dashboard.items.details', { item: item.name });
        };
        /**
         * toggleSearch
         */
        ItemsController.prototype.toggleSearch = function () {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        };
        return ItemsController;
    }());
    app.ItemsController = ItemsController;
    var ItemsDialogController = (function () {
        function ItemsDialogController($mdDialog, ItemsService, selectedItem, $timeout, BrandsService, CategoriesService, UnitsService, SuppliersService) {
            this.ItemsService = ItemsService;
            this.selectedItem = selectedItem;
            this.$timeout = $timeout;
            this.BrandsService = BrandsService;
            this.CategoriesService = CategoriesService;
            this.UnitsService = UnitsService;
            this.SuppliersService = SuppliersService;
            this.selectedSuppliers = [];
            this.require_match = true;
            this.item = {};
            this.viewSuppliers();
        }
        /**
         * addItem
         */
        ItemsDialogController.prototype.addItem = function (item) {
            this.ItemsService.add(item, this.selectedSuppliers);
        };
        /**
         * viewSuppliers
         */
        ItemsDialogController.prototype.viewSuppliers = function () {
            var _this = this;
            this.$timeout(function () {
                _this.SuppliersService.view();
            }, 2000);
        };
        return ItemsDialogController;
    }());
    app.ItemsDialogController = ItemsDialogController;
    ItemsController.$inject = ['$mdDialog', 'ItemsService', '$state', 'LocalStorageService', '$timeout'];
    ItemsDialogController.$inject = ['$mdDialog', 'ItemsService', 'selectedItem', '$timeout',
        'BrandsService', 'CategoriesService', 'UnitsService', 'SuppliersService'];
    angular
        .module('inventory-management')
        .controller('ItemsController', ItemsController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var ItemEditController = (function () {
        function ItemEditController($mdDialog, ItemsService, selectedItem, $timeout, BrandsService, CategoriesService, UnitsService, SuppliersService) {
            this.ItemsService = ItemsService;
            this.selectedItem = selectedItem;
            this.$timeout = $timeout;
            this.BrandsService = BrandsService;
            this.CategoriesService = CategoriesService;
            this.UnitsService = UnitsService;
            this.SuppliersService = SuppliersService;
            this.isEnableEdit = false;
            this.item = {};
            this.selectedSuppliers = [];
            this.item = this.selectedItem;
            this.selectedSuppliers = this.getItemSupplier();
        }
        /**
        * toggleEdit
        */
        ItemEditController.prototype.toggleEdit = function () {
            this.isEnableEdit = !this.isEnableEdit;
        };
        /**
        * getItemSupplier
        */
        ItemEditController.prototype.getItemSupplier = function () {
            var itemSuppliers = [];
            if (Object.keys(this.selectedItem).length != 0)
                this.selectedItem.itemSupplier.forEach(function (i) {
                    itemSuppliers.push(i.supplier);
                });
            return itemSuppliers;
        };
        /**
        * editItem
        */
        ItemEditController.prototype.editItem = function (item) {
            this.ItemsService.update(item, item.id, this.selectedSuppliers);
        };
        /**
         * viewSuppliers
         */
        ItemEditController.prototype.viewSuppliers = function () {
            var _this = this;
            this.$timeout(function () {
                _this.SuppliersService.view();
            }, 2000);
        };
        return ItemEditController;
    }());
    app.ItemEditController = ItemEditController;
    ItemEditController.$inject = ['$mdDialog', 'ItemsService', 'selectedItem', '$timeout', 'BrandsService',
        'CategoriesService', 'UnitsService', 'SuppliersService'];
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    function ItemOnEnter(BaseService, ItemsService, $timeout, BrandsService, CategoriesService, UnitsService, SuppliersService) {
        loadDependecies();
        function loadDependecies() {
            BrandsService.view();
            UnitsService.view();
            CategoriesService.view();
            SuppliersService.view();
        }
    }
    app.ItemOnEnter = ItemOnEnter;
    ItemOnEnter.$inject = ['BaseService', 'ItemsService', '$timeout', 'BrandsService', 'CategoriesService', 'UnitsService', 'SuppliersService'];
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var MessengerController = (function () {
        function MessengerController($http) {
            this.$http = $http;
            console.log('Hello');
        }
        return MessengerController;
    }());
    MessengerController.$inject = ['$http'];
    angular
        .module('inventory-management')
        .controller('MessengerController', MessengerController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var StocksController = (function () {
        function StocksController($mdDialog, StocksService, $timeout) {
            this.$mdDialog = $mdDialog;
            this.StocksService = StocksService;
            this.$timeout = $timeout;
            this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            this.isSearchOpen = false;
            this.queryText = '';
            this.viewStocks();
        }
        /**
         * ShowDialog
         */
        StocksController.prototype.showDialog = function (templateUrl, stock) {
            var config = {
                templateUrl: templateUrl,
                controller: StocksDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    stock: stock
                }
            };
            this.StocksService.showDialog(config);
        };
        /**
         * showAddDialog
         */
        StocksController.prototype.showAddDialog = function () {
            var templateUrl = 'templates/Stocks/stocks-dialog.html', stock = {};
            this.showDialog(templateUrl, stock);
        };
        /**
         * viewStocks
         */
        StocksController.prototype.viewStocks = function () {
            var _this = this;
            this.stockPromise = this.$timeout(function () {
                _this.StocksService.view();
            }, 2000);
        };
        /**
        * toggleSearch
        */
        StocksController.prototype.toggleSearch = function () {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        };
        return StocksController;
    }());
    var StocksDialogController = (function (_super) {
        __extends(StocksDialogController, _super);
        function StocksDialogController($mdDialog, StocksService, ItemsService, stock, $timeout) {
            var _this = _super.call(this, $mdDialog, StocksService, $timeout) || this;
            _this.ItemsService = ItemsService;
            _this.stock = stock;
            _this.quantity = [];
            return _this;
        }
        /**
        * addStock
        */
        StocksDialogController.prototype.addStock = function (stock) {
            this.StocksService.add(stock);
        };
        /**
         * loadItems
         */
        StocksDialogController.prototype.loadItems = function () {
            this.ItemsService.view();
        };
        /**
         * generateQuantity
         */
        StocksDialogController.prototype.generateQuantity = function () {
            var quantity = [];
            for (var i = 1; i <= 100; i++) {
                quantity.push(i);
            }
            this.quantity = quantity;
        };
        return StocksDialogController;
    }(StocksController));
    StocksController.$inject = ['$mdDialog', 'StocksService', '$timeout'];
    StocksDialogController.$inject = ['$mdDialog', 'StocksService', 'ItemsService', 'stock', '$timeout'];
    angular
        .module('inventory-management')
        .controller('StocksController', StocksController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var SuppliersController = (function () {
        function SuppliersController($mdDialog, SuppliersService, $timeout) {
            this.$mdDialog = $mdDialog;
            this.SuppliersService = SuppliersService;
            this.$timeout = $timeout;
            this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            this.numberPattern = '\\d+';
            this.isSearchOpen = false;
            this.queryText = '';
            this.viewSuppliers();
        }
        /**
         * ShowDialog
         */
        SuppliersController.prototype.showDialog = function (templateUrl, supplier) {
            var config = {
                templateUrl: templateUrl,
                controller: SupplierDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    supplier: supplier
                }
            };
            return this.SuppliersService.showDialog(config);
        };
        /**
         * showConfirmDialog
         */
        SuppliersController.prototype.showConfirmDialog = function (confirmConfig) {
            return this.SuppliersService.showDialog(confirmConfig);
        };
        /**
         * showAddDialog
         */
        SuppliersController.prototype.showAddDialog = function () {
            var templateUrl = 'templates/Suppliers/suppliers-dialog.html', supplier = {};
            this.showDialog(templateUrl, supplier);
        };
        /**
         * showEditDialog
         */
        SuppliersController.prototype.showEditDialog = function (supplier) {
            var templateUrl = 'templates/Suppliers/suppliers-edit-dialog.html';
            this.showDialog(templateUrl, supplier);
        };
        /**
         * viewSuppliers
         */
        SuppliersController.prototype.viewSuppliers = function () {
            var _this = this;
            this.supplierPromise = this.$timeout(function () {
                _this.SuppliersService.view();
            }, 2000);
        };
        /**
         * editSupplier
         */
        SuppliersController.prototype.editSupplier = function (supplier) {
            this.showEditDialog(supplier);
        };
        /**
         * deleteSupplier
         */
        SuppliersController.prototype.deleteSupplier = function (supplier) {
            var _this = this;
            var confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this supplier?')
                .textContent('Supplier Name: ' + supplier.name)
                .ok('Delete')
                .cancel('Cancel');
            this.SuppliersService.showDialog(confirmConfig)
                .then(function () {
                _this.SuppliersService.remove(supplier);
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
            });
        };
        /**
        * toggleSearch
        */
        SuppliersController.prototype.toggleSearch = function () {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        };
        return SuppliersController;
    }());
    var SupplierDialogController = (function (_super) {
        __extends(SupplierDialogController, _super);
        function SupplierDialogController($mdDialog, SuppliersService, supplier, $timeout) {
            var _this = _super.call(this, $mdDialog, SuppliersService, $timeout) || this;
            _this.supplier = supplier;
            return _this;
        }
        /**
         * addSupplier
         */
        SupplierDialogController.prototype.addSupplier = function (supplier) {
            this.SuppliersService.add(supplier);
        };
        /**
         * editsupplier
         */
        SupplierDialogController.prototype.editSupplier = function () {
            this.SuppliersService.update(this.supplier);
        };
        /**
         * duplicateContactNo
         */
        SupplierDialogController.prototype.duplicateContactNo = function () {
            if (this.supplier.primaryContactNo === undefined || this.supplier.secondaryContactNo === undefined)
                return false;
            return this.supplier.primaryContactNo === this.supplier.secondaryContactNo ? true : false;
        };
        return SupplierDialogController;
    }(SuppliersController));
    SuppliersController.$inject = ['$mdDialog', 'SuppliersService', '$timeout'];
    SupplierDialogController.$inject = ['$mdDialog', 'SuppliersService', 'supplier', '$timeout'];
    angular
        .module('inventory-management')
        .controller('SuppliersController', SuppliersController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var UnitsController = (function () {
        function UnitsController($mdDialog, UnitsService, $timeout) {
            this.$mdDialog = $mdDialog;
            this.UnitsService = UnitsService;
            this.$timeout = $timeout;
            this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            this.isSearchOpen = false;
            this.queryText = '';
            this.viewUnits();
        }
        /**
         * showDialog
         */
        UnitsController.prototype.showDialog = function (templateUrl, unit) {
            var config = {
                templateUrl: templateUrl,
                controller: UnitsDialogController,
                controllerAs: 'vm',
                fullscreen: true,
                locals: {
                    unit: unit
                }
            };
            return this.UnitsService.showDialog(config);
        };
        /**
        * showConfirmDialog
        */
        UnitsController.prototype.showConfirmDialog = function (confirmConfig) {
            return this.UnitsService.showDialog(confirmConfig);
        };
        /**
         * showAddDialog
         */
        UnitsController.prototype.showAddDialog = function () {
            var templateUrl = 'templates/Units/units-dialog.html', unit = {};
            this.showDialog(templateUrl, unit);
        };
        /**
         * showEditDialog
         */
        UnitsController.prototype.showEditDialog = function (unit) {
            var templateUrl = 'templates/Units/units-edit-dialog.html';
            this.showDialog(templateUrl, unit);
        };
        /**
         * viewUnits
         */
        UnitsController.prototype.viewUnits = function () {
            var _this = this;
            this.unitPromise = this.$timeout(function () {
                _this.UnitsService.view();
            }, 2000);
        };
        /**
         * editUnit
         */
        UnitsController.prototype.editUnit = function (unit) {
            this.showEditDialog(unit);
        };
        /**
         * deleteUnit
         */
        UnitsController.prototype.deleteUnit = function (unit) {
            var _this = this;
            var confirmConfig = this.$mdDialog.confirm()
                .title('Would you like to delete this unit?')
                .textContent('Unit Name: ' + unit.name)
                .ok('Delete')
                .cancel('Cancel');
            this.UnitsService.showDialog(confirmConfig)
                .then(function () {
                _this.UnitsService.remove(unit);
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
            });
        };
        /**
        * toggleSearch
        */
        UnitsController.prototype.toggleSearch = function () {
            this.queryText = '';
            this.isSearchOpen = !this.isSearchOpen;
        };
        return UnitsController;
    }());
    var UnitsDialogController = (function (_super) {
        __extends(UnitsDialogController, _super);
        function UnitsDialogController($mdDialog, UnitsService, unit, $timeout) {
            var _this = _super.call(this, $mdDialog, UnitsService, $timeout) || this;
            _this.unit = unit;
            return _this;
        }
        /**
          * addUnit
          */
        UnitsDialogController.prototype.addUnit = function (unit) {
            this.UnitsService.add(unit);
        };
        /**
         * editUnit
         */
        UnitsDialogController.prototype.editUnit = function () {
            this.UnitsService.update(this.unit);
        };
        return UnitsDialogController;
    }(UnitsController));
    UnitsController.$inject = ['$mdDialog', 'UnitsService', '$timeout'];
    UnitsDialogController.$inject = ['$mdDialog', 'UnitsService', 'unit', '$timeout'];
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
                    $mdSidenav(component_id_1).close();
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
    function run($rootScope, DashboardService, NotificationService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var name = toState.title;
            stateNameModifier(name);
            startNotification();
        });
        function stateNameModifier(name) {
            DashboardService.stateNameModifier(name);
        }
        function startNotification() {
            NotificationService.getNotification();
        }
    }
    run.$inject = ['$rootScope', 'DashboardService', 'NotificationService'];
    angular
        .module('inventory-management')
        .run(run);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var BaseService = (function () {
        function BaseService($http, $q) {
            this.$http = $http;
            this.$q = $q;
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
                .then(function (resp) { return resp; })
                .catch(function (err) {
                var headers = err.headers(), contentType = headers['content-type'], databaseError = 'Database is dead. See readme file inside your installer.', apiError = 'API is dead. See readme file inside your installer.';
                if (err.status === -1)
                    throw apiError;
                if (err.status === 503)
                    throw databaseError;
                if (err.status === 500) {
                    if (contentType.search('text/html') > -1) {
                        throw databaseError;
                    }
                    throw err.data.message;
                }
                throw 'Error has occured. ' + JSON.stringify(err);
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
                .then(function (resp) { return resp; })
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
                .then(function (resp) { return resp; })
                .catch(function (err) {
                throw 'Error has occured. ' + err;
            });
        };
        /**
         * get_localFile
         */
        BaseService.prototype.get_localFile = function (url) {
            var config = {
                url: url,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            return this.$http(config)
                .then(function (resp) { return resp; })
                .catch(function (err) {
                throw 'Error has occured. ' + err;
            });
        };
        return BaseService;
    }());
    app.BaseService = BaseService;
    BaseService.$inject = ['$http', '$q'];
    angular
        .module('inventory-management')
        .service('BaseService', BaseService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var BrandsService = (function () {
        function BrandsService(ToastService, DialogService, BaseService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
            this.BaseService = BaseService;
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
        /**
         * add
         */
        BrandsService.prototype.add = function (brand) {
            var _this = this;
            var brandModel = {
                brand: brand
            };
            this.BaseService
                .post_request('/addBrand', brandModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * update
         */
        BrandsService.prototype.update = function (brand) {
            var _this = this;
            var brandModel = {
                brand: brand
            };
            this.BaseService
                .post_request('/editBrand', brandModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * view
         */
        BrandsService.prototype.view = function () {
            var _this = this;
            this.BaseService
                .post_request('/viewBrands', {})
                .then(function (resp) {
                _this.listBrands = resp.data.listBrands;
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * remove
         */
        BrandsService.prototype.remove = function (brand) {
            var _this = this;
            var brandModel = {
                brand: brand
            };
            this.BaseService
                .post_request('/deleteBrand', brandModel)
                .then(function (resp) {
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        return BrandsService;
    }());
    BrandsService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    angular
        .module('inventory-management')
        .service('BrandsService', BrandsService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var CategoriesService = (function () {
        function CategoriesService(ToastService, DialogService, BaseService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
            this.BaseService = BaseService;
            this.listCategories = [];
        }
        /**
         * showToast
         */
        CategoriesService.prototype.showToast = function (message) {
            this.ToastService.showToast(message);
        };
        /**
         * showDialog
         */
        CategoriesService.prototype.showDialog = function (config) {
            return this.DialogService.showDialog(config);
        };
        /**
         * hideDialog
         */
        CategoriesService.prototype.hideDialog = function () {
            this.DialogService.hideDialog();
        };
        /**
         * add
         */
        CategoriesService.prototype.add = function (category) {
            var _this = this;
            var categoryModel = {
                category: category
            };
            this.BaseService
                .post_request('/addCategory', categoryModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * update
         */
        CategoriesService.prototype.update = function (category) {
            var _this = this;
            var categoryModel = {
                category: category
            };
            this.BaseService
                .post_request('/editCategory', categoryModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * view
         */
        CategoriesService.prototype.view = function () {
            var _this = this;
            this.BaseService
                .post_request('/viewCategories', {})
                .then(function (resp) {
                _this.listCategories = resp.data.listCategories;
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * remove
         */
        CategoriesService.prototype.remove = function (category) {
            var _this = this;
            var categoryModel = {
                category: category
            };
            this.BaseService
                .post_request('/deleteCategory', categoryModel)
                .then(function (resp) {
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        return CategoriesService;
    }());
    CategoriesService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    angular
        .module('inventory-management')
        .service('CategoriesService', CategoriesService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var DashboardService = (function () {
        function DashboardService(ToastService, DialogService, BaseService, $q) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
            this.BaseService = BaseService;
            this.$q = $q;
            this.state = {};
            this.listLowStocks = [];
            this.chartConfig = {
                series: []
            };
        }
        DashboardService.prototype.stateNameModifier = function (name) {
            this.state['name'] = name;
        };
        /**
         * showToast
         */
        DashboardService.prototype.showToast = function (message) {
            this.ToastService.showToast(message);
        };
        /**
         * showDialog
         */
        DashboardService.prototype.showDialog = function (config) {
            return this.DialogService.showDialog(config);
        };
        /**
         * hideDialog
         */
        DashboardService.prototype.hideDialog = function () {
            this.DialogService.hideDialog();
        };
        /**
         * getLowStocks
         */
        DashboardService.prototype.getLowStocks = function () {
            var _this = this;
            return this.BaseService
                .post_request('/stockTracker', {})
                .then(function (resp) {
                _this.listLowStocks = resp.data.listItems;
                return resp.data.listItems;
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        return DashboardService;
    }());
    DashboardService.$inject = ['ToastService', 'DialogService', 'BaseService', '$q'];
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
    var ItemsService = (function () {
        function ItemsService(ToastService, DialogService, BaseService, LocalStorageService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
            this.BaseService = BaseService;
            this.LocalStorageService = LocalStorageService;
            this.listItems = [];
            this.listBrands = [];
            this.listUnits = [];
            this.listCategories = [];
            this.listSuppliers = [];
        }
        /**
         * showToast
         */
        ItemsService.prototype.showToast = function (message) {
            this.ToastService.showToast(message);
        };
        /**
         * showDialog
         */
        ItemsService.prototype.showDialog = function (config) {
            return this.DialogService.showDialog(config);
        };
        /**
         * hideDialog
         */
        ItemsService.prototype.hideDialog = function () {
            this.DialogService.hideDialog();
        };
        /**
         * add
         */
        ItemsService.prototype.add = function (item, selectedSuppliers) {
            var _this = this;
            var itemModel = {
                item: item,
                listSuppliers: selectedSuppliers
            };
            this.BaseService
                .post_request('/addItem', itemModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
        * update
        */
        ItemsService.prototype.update = function (item, itemID, selectedSuppliers) {
            var _this = this;
            var itemModel = {
                item: item,
                listSuppliers: selectedSuppliers
            };
            this.BaseService
                .post_request('/editItem', itemModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * view
         */
        ItemsService.prototype.view = function () {
            var _this = this;
            this.BaseService
                .post_request('/viewItems', {})
                .then(function (resp) {
                _this.listItems = resp.data.listItems;
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * remove
         */
        ItemsService.prototype.remove = function (item) {
            var _this = this;
            var itemModel = {
                item: item
            };
            this.BaseService
                .post_request('/deleteItem', itemModel)
                .then(function (resp) {
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        return ItemsService;
    }());
    ItemsService.$inject = ['ToastService', 'DialogService', 'BaseService', 'LocalStorageService'];
    angular
        .module('inventory-management')
        .service('ItemsService', ItemsService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var LocalStorageService = (function () {
        function LocalStorageService($window) {
            this.$window = $window;
        }
        /**
         * set
         */
        LocalStorageService.prototype.set = function (key, value) {
            this.$window.localStorage.setItem(key, value);
        };
        /**
         * get
         */
        LocalStorageService.prototype.get = function (key) {
            return this.$window.localStorage.getItem(key);
        };
        /**
         * remove
         */
        LocalStorageService.prototype.remove = function (key) {
            this.$window.localStorage.removeItem(key);
        };
        return LocalStorageService;
    }());
    LocalStorageService.$inject = ['$window'];
    angular
        .module('inventory-management')
        .service('LocalStorageService', LocalStorageService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var NotificationService = (function () {
        function NotificationService(BaseService) {
            this.BaseService = BaseService;
            this.lowStock = {
                count: 0
            };
        }
        /**
         * getNotification
         */
        NotificationService.prototype.getNotification = function () {
            var _this = this;
            return this.getServerURL()
                .then(function (serverURL) {
                var url = [serverURL, '/getNotification'].join('');
                var source = new EventSource(url);
                source.onmessage = function (event) {
                    // console.log(event.data);
                    var data = event.data;
                    if (data !== undefined)
                        if (data > 0) {
                            _this.lowStock.count = data;
                        }
                        else {
                            _this.lowStock.count = 0;
                        }
                    return event.data;
                };
            });
        };
        NotificationService.prototype.getServerConfigFile = function () {
            return this.BaseService.get_localFile('server-config.json')
                .then(function (res) { return res; });
        };
        NotificationService.prototype.getServerURL = function () {
            return this.getServerConfigFile()
                .then(function (response) {
                var data = response.data;
                var url = '';
                url = [data.url, data.port].join(':');
                url = [url, data.app_context_root].join('/');
                return url;
            });
        };
        return NotificationService;
    }());
    NotificationService.$inject = ['BaseService'];
    angular
        .module('inventory-management')
        .service('NotificationService', NotificationService);
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
            }
        };
        function getServerConfigFile() {
            var $http = $injector.get('$http');
            return $http.get('server-config.json')
                .then(function (resp) { return resp; });
        }
        function getServerURL() {
            return getServerConfigFile()
                .then(function (resp) {
                var data = resp.data;
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
    var StocksService = (function () {
        function StocksService(ToastService, DialogService, BaseService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
            this.BaseService = BaseService;
            this.listStocks = [];
        }
        /**
         * showToast
         */
        StocksService.prototype.showToast = function (message) {
            this.ToastService.showToast(message);
        };
        /**
         * showDialog
         */
        StocksService.prototype.showDialog = function (config) {
            return this.DialogService.showDialog(config);
        };
        /**
         * hideDialog
         */
        StocksService.prototype.hideDialog = function () {
            this.DialogService.hideDialog();
        };
        /**
        * add
        */
        StocksService.prototype.add = function (stock) {
            var _this = this;
            var stockModel = {
                stock: stock,
                item: stock.item
            };
            this.BaseService
                .post_request('/addStock', stockModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * update
         */
        StocksService.prototype.update = function (stock) {
            var _this = this;
            var stockModel = {
                stock: stock
            };
            this.BaseService
                .post_request('/editStock', stockModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * view
         */
        StocksService.prototype.view = function () {
            var _this = this;
            this.BaseService
                .post_request('/viewStocks', {})
                .then(function (resp) {
                _this.listStocks = resp.data.listStocks;
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * remove
         */
        StocksService.prototype.remove = function (stock) {
            var _this = this;
            var stockModel = {
                stock: stock
            };
            this.BaseService
                .post_request('/deleteStock', stockModel)
                .then(function (resp) {
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        return StocksService;
    }());
    StocksService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    angular
        .module('inventory-management')
        .service('StocksService', StocksService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var SuppliersService = (function () {
        function SuppliersService(ToastService, DialogService, BaseService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
            this.BaseService = BaseService;
            this.listSuppliers = [];
        }
        /**
         * showToast
         */
        SuppliersService.prototype.showToast = function (message) {
            this.ToastService.showToast(message);
        };
        /**
         * showDialog
         */
        SuppliersService.prototype.showDialog = function (config) {
            return this.DialogService.showDialog(config);
        };
        /**
         * hideDialog
         */
        SuppliersService.prototype.hideDialog = function () {
            this.DialogService.hideDialog();
        };
        /**
        * add
        */
        SuppliersService.prototype.add = function (supplier) {
            var _this = this;
            var supplierModel = {
                supplier: supplier
            };
            this.BaseService
                .post_request('/addSupplier', supplierModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * update
         */
        SuppliersService.prototype.update = function (supplier) {
            var _this = this;
            var supplierModel = {
                supplier: supplier
            };
            this.BaseService
                .post_request('/editSupplier', supplierModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * view
         */
        SuppliersService.prototype.view = function () {
            var _this = this;
            this.BaseService
                .post_request('/viewSuppliers', {})
                .then(function (resp) {
                _this.listSuppliers = resp.data.listSuppliers;
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * remove
         */
        SuppliersService.prototype.remove = function (supplier) {
            var _this = this;
            var supplierModel = {
                supplier: supplier
            };
            this.BaseService
                .post_request('/deleteSupplier', supplierModel)
                .then(function (resp) {
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        return SuppliersService;
    }());
    SuppliersService.$inject = ['ToastService', 'DialogService', 'BaseService'];
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
                .action('close')
                .position('top right')
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
    var UIDService = (function () {
        function UIDService() {
        }
        /**
         * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
         */
        UIDService.prototype.generateUID = function () {
            return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4).toUpperCase();
        };
        return UIDService;
    }());
    angular
        .module('inventory-management')
        .service('UIDService', UIDService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var UnitsService = (function () {
        function UnitsService(ToastService, DialogService, BaseService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
            this.BaseService = BaseService;
            this.listUnits = [];
        }
        /**
         * showToast
         */
        UnitsService.prototype.showToast = function (message) {
            this.ToastService.showToast(message);
        };
        /**
         * showDialog
         */
        UnitsService.prototype.showDialog = function (config) {
            return this.DialogService.showDialog(config);
        };
        /**
         * hideDialog
         */
        UnitsService.prototype.hideDialog = function () {
            this.DialogService.hideDialog();
        };
        /**
         * add
         */
        UnitsService.prototype.add = function (unit) {
            var _this = this;
            var unitModel = {
                unit: unit
            };
            this.BaseService
                .post_request('/addUnit', unitModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * update
         */
        UnitsService.prototype.update = function (unit) {
            var _this = this;
            var unitModel = {
                unit: unit
            };
            this.BaseService
                .post_request('/editUnit', unitModel)
                .then(function (resp) {
                _this.hideDialog();
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * view
         */
        UnitsService.prototype.view = function () {
            var _this = this;
            this.BaseService
                .post_request('/viewUnits', {})
                .then(function (resp) {
                _this.listUnits = resp.data.listUnits;
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        /**
         * remove
         */
        UnitsService.prototype.remove = function (unit) {
            var _this = this;
            var unitModel = {
                unit: unit
            };
            this.BaseService
                .post_request('/deleteUnit', unitModel)
                .then(function (resp) {
                _this.view();
                _this.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.showToast(err);
            });
        };
        return UnitsService;
    }());
    UnitsService.$inject = ['ToastService', 'DialogService', 'BaseService'];
    angular
        .module('inventory-management')
        .service('UnitsService', UnitsService);
})(app || (app = {}));
//# sourceMappingURL=bundle.js.map