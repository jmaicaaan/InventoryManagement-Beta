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
        'ngMessages',
        'ui.router',
        'md.data.table',
        'material.components.autocomplete',
        'chart.js'
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
            onEnter: app.ItemOnEnter,
            title: 'Items'
        })
            .state('dashboard.items.details', {
            url: '/details?item',
            templateUrl: 'app/templates/Items/items-details.html',
            controller: 'ItemDetailsController',
            controllerAs: 'vm',
            title: 'Item Details'
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
    var BrandsController = (function (_super) {
        __extends(BrandsController, _super);
        function BrandsController($mdDialog, BrandsService, BaseService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$mdDialog = $mdDialog;
            _this.BrandsService = BrandsService;
            _this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            _this.viewBrands();
            return _this;
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
            var templateUrl = 'app/templates/Brands/brands-dialog.html', brand = {};
            this.showDialog(templateUrl, brand);
        };
        /**
         * showEditDialog
         */
        BrandsController.prototype.showEditDialog = function (brand) {
            var templateUrl = 'app/templates/Brands/brands-edit-dialog.html';
            this.showDialog(templateUrl, brand);
        };
        /**
         * viewBrands
         */
        BrandsController.prototype.viewBrands = function () {
            var _this = this;
            this.view_without_data('/viewBrands')
                .then(function (brands) {
                _this.BrandsService.listBrands = brands.data.listBrands;
            })
                .catch(function (err) {
                _this.BrandsService.showToast(err);
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
                    _this.BrandsService.showToast(resp.data.message);
                })
                    .catch(function (err) {
                    _this.BrandsService.showToast(err);
                });
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
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
                .then(function (resp) {
                _this.BrandsService.hideDialog();
                _this.viewBrands();
                _this.BrandsService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.BrandsService.showToast(err);
            });
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
                _this.BrandsService.hideDialog();
                _this.viewBrands();
                _this.BrandsService.showToast(resp.data.message);
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
            _this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            _this.viewCategories();
            return _this;
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
            this.CategoriesService.showDialog(config);
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
            var templateUrl = 'app/templates/Categories/categories-dialog.html', category = {};
            this.showDialog(templateUrl, category);
        };
        /**
         * showEditDialog
         */
        CategoriesController.prototype.showEditDialog = function (category) {
            var templateUrl = 'app/templates/Categories/categories-edit-dialog.html';
            this.showDialog(templateUrl, category);
        };
        /**
         * viewCategories
         */
        CategoriesController.prototype.viewCategories = function () {
            var _this = this;
            this.view_without_data('/viewCategories')
                .then(function (categories) {
                _this.CategoriesService.listCategories = categories.data.listCategories;
            })
                .catch(function (err) {
                _this.CategoriesService.showToast(err);
            });
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
                var categoryModel = {
                    category: category
                };
                _this.remove('/deleteCategory', categoryModel)
                    .then(function (resp) {
                    _this.viewCategories();
                    _this.CategoriesService.showToast(resp.data.message);
                })
                    .catch(function (err) {
                    _this.CategoriesService.showToast(err);
                });
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
            });
        };
        return CategoriesController;
    }(app.BaseController));
    var CategoriesDialogController = (function (_super) {
        __extends(CategoriesDialogController, _super);
        function CategoriesDialogController($mdDialog, CategoriesService, BaseService, category) {
            var _this = _super.call(this, $mdDialog, CategoriesService, BaseService) || this;
            _this.category = category;
            return _this;
        }
        /**
         * addCategory
         */
        CategoriesDialogController.prototype.addCategory = function (category) {
            var _this = this;
            var categoryModel = {
                category: category
            };
            this.add('/addCategory', categoryModel)
                .then(function (resp) {
                _this.CategoriesService.hideDialog();
                _this.viewCategories();
                _this.CategoriesService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.CategoriesService.showToast(err);
            });
        };
        /**
         * editCategory
         */
        CategoriesDialogController.prototype.editCategory = function () {
            var _this = this;
            var categoryModel = {
                category: this.category
            };
            this.update('/editCategory', categoryModel)
                .then(function (resp) {
                _this.CategoriesService.hideDialog();
                _this.viewCategories();
                _this.CategoriesService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.CategoriesService.showToast(err);
            });
        };
        return CategoriesDialogController;
    }(CategoriesController));
    CategoriesController.$inject = ['$mdDialog', 'CategoriesService', 'BaseService'];
    CategoriesDialogController.$inject = ['$mdDialog', 'CategoriesService', 'BaseService', 'category'];
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
            this.labels = ['Item with lowest stocks'];
            this.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
            this.series = ["Series 1", "Series 2"];
            this.options = { legend: { display: true } };
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
        function ItemsController($mdDialog, ItemsService, BaseService, $state, LocalStorageService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$mdDialog = $mdDialog;
            _this.ItemsService = ItemsService;
            _this.$state = $state;
            _this.LocalStorageService = LocalStorageService;
            _this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            return _this;
        }
        /**
         * ShowDialog
         */
        ItemsController.prototype.showDialog = function (templateUrl, item) {
            var config = {
                templateUrl: templateUrl,
                controller: ItemsDialogController,
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
            var templateUrl = 'app/templates/Items/items-dialog.html', item = {};
            this.showDialog(templateUrl, item);
        };
        /**
         * showEditDialog
         */
        ItemsController.prototype.showEditDialog = function (item) {
            var templateUrl = 'app/templates/Items/items-edit-dialog.html';
            this.showDialog(templateUrl, item);
        };
        /**
         * viewItems
         */
        ItemsController.prototype.viewItems = function () {
            var _this = this;
            this.view_without_data('/viewItems')
                .then(function (items) {
                _this.ItemsService.listItems = items.data.listItems;
            })
                .catch(function (err) {
                _this.ItemsService.showToast(err);
            });
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
                var itemModel = {
                    item: item
                };
                _this.remove('/deleteItem', itemModel)
                    .then(function (resp) {
                    _this.viewItems();
                    _this.ItemsService.showToast(resp.data.message);
                })
                    .catch(function (err) {
                    _this.ItemsService.showToast(err);
                });
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
        return ItemsController;
    }(app.BaseController));
    var ItemsDialogController = (function (_super) {
        __extends(ItemsDialogController, _super);
        function ItemsDialogController($mdDialog, ItemsService, BaseService, selectedItem, $state, LocalStorageService, UIDService) {
            var _this = _super.call(this, $mdDialog, ItemsService, BaseService, $state, LocalStorageService) || this;
            _this.selectedItem = selectedItem;
            _this.UIDService = UIDService;
            _this.selectedSuppliers = [];
            _this.require_match = true;
            _this.item = {};
            return _this;
        }
        /**
         * addItem
         */
        ItemsDialogController.prototype.addItem = function (item) {
            var _this = this;
            var itemModel = {
                item: item,
                listSuppliers: this.selectedSuppliers
            };
            this.add('/addItem', itemModel)
                .then(function (resp) {
                _this.ItemsService.hideDialog();
                _this.viewItems();
                _this.ItemsService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.ItemsService.showToast(err);
            });
        };
        /**
         * generateItemCode
         */
        ItemsDialogController.prototype.generateItemCode = function () {
            this.item.code = this.UIDService.generateUID();
        };
        return ItemsDialogController;
    }(ItemsController));
    ItemsController.$inject = ['$mdDialog', 'ItemsService', 'BaseService', '$state', 'LocalStorageService'];
    ItemsDialogController.$inject = ['$mdDialog', 'ItemsService', 'BaseService', 'selectedItem', '$state', 'LocalStorageService', 'UIDService'];
    angular
        .module('inventory-management')
        .controller('ItemsController', ItemsController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var ItemDetailsController = (function (_super) {
        __extends(ItemDetailsController, _super);
        function ItemDetailsController($stateParams, LocalStorageService, ItemsService, BaseService, UIDService) {
            var _this = _super.call(this, BaseService) || this;
            _this.$stateParams = $stateParams;
            _this.LocalStorageService = LocalStorageService;
            _this.ItemsService = ItemsService;
            _this.UIDService = UIDService;
            _this.item = {};
            _this.selectedSuppliers = [];
            _this.item = _this.getItem();
            _this.selectedSuppliers = _this.item.listSuppliers;
            return _this;
        }
        /**
         * getItem
         */
        ItemDetailsController.prototype.getItem = function () {
            var itemID = this.$stateParams['item'];
            var itemLocalStorage = this.LocalStorageService.get(itemID);
            return JSON.parse(itemLocalStorage);
        };
        /**
         * editItem
         */
        ItemDetailsController.prototype.editItem = function (item) {
            var _this = this;
            var itemModel = {
                item: item,
                listSuppliers: this.selectedSuppliers
            };
            this.update('/editItem', itemModel)
                .then(function (resp) {
                _this.viewItems();
                _this.ItemsService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.ItemsService.showToast(err);
            });
        };
        /**
        * viewItems
        */
        ItemDetailsController.prototype.viewItems = function () {
            var _this = this;
            this.view_without_data('/viewItems')
                .then(function (items) {
                _this.ItemsService.listItems = items.data.listItems;
            })
                .catch(function (err) {
                _this.ItemsService.showToast(err);
            });
        };
        /**
         * generateItemCode
         */
        ItemDetailsController.prototype.generateItemCode = function () {
            this.item.code = this.UIDService.generateUID();
        };
        return ItemDetailsController;
    }(app.BaseController));
    ItemDetailsController.$inject = ['$stateParams', 'LocalStorageService', 'ItemsService', 'BaseService', 'UIDService'];
    angular
        .module('inventory-management')
        .controller('ItemDetailsController', ItemDetailsController);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    function ItemOnEnter(BaseService, ItemsService) {
        viewItems();
        loadBrands();
        loadUnits();
        loadCategories();
        loadSuppliers();
        function viewItems() {
            BaseService.post_request('/viewItems', {})
                .then(function (items) {
                ItemsService.listItems = items.data.listItems;
            })
                .catch(function (err) {
                ItemsService.showToast(err);
            });
        }
        function loadBrands() {
            BaseService.post_request('/viewBrands', {})
                .then(function (brands) {
                ItemsService.listBrands = brands.data.listBrands;
            })
                .catch(function (err) {
                ItemsService.showToast(err);
            });
        }
        function loadUnits() {
            BaseService.post_request('/viewUnits', {})
                .then(function (units) {
                ItemsService.listUnits = units.data.listUnits;
            })
                .catch(function (err) {
                ItemsService.showToast(err);
            });
        }
        function loadCategories() {
            BaseService.post_request('/viewCategories', {})
                .then(function (categories) {
                ItemsService.listCategories = categories.data.listCategories;
            })
                .catch(function (err) {
                ItemsService.showToast(err);
            });
        }
        function loadSuppliers() {
            BaseService.post_request('/viewSuppliers', {})
                .then(function (suppliers) {
                ItemsService.listSuppliers = suppliers.data.listSuppliers;
            })
                .catch(function (err) {
                ItemsService.showToast(err);
            });
        }
    }
    app.ItemOnEnter = ItemOnEnter;
    ItemOnEnter.$inject = ['BaseService', 'ItemsService'];
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
            _this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            _this.viewStocks();
            return _this;
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
            var templateUrl = 'app/templates/Stocks/stocks-dialog.html', stock = {};
            this.showDialog(templateUrl, stock);
        };
        /**
         * viewStocks
         */
        StocksController.prototype.viewStocks = function () {
            var _this = this;
            this.view_without_data('/viewStocks')
                .then(function (stocks) {
                _this.StocksService.listStocks = stocks.data.listStocks;
            })
                .catch(function (err) {
                _this.StocksService.showToast(err);
            });
        };
        return StocksController;
    }(app.BaseController));
    var StocksDialogController = (function (_super) {
        __extends(StocksDialogController, _super);
        function StocksDialogController($mdDialog, StocksService, BaseService, ItemsService, stock) {
            var _this = _super.call(this, $mdDialog, StocksService, BaseService) || this;
            _this.ItemsService = ItemsService;
            _this.stock = stock;
            _this.quantity = [];
            return _this;
        }
        /**
        * addStock
        */
        StocksDialogController.prototype.addStock = function (stock) {
            var _this = this;
            var stockModel = {
                stock: stock,
                item: stock.item
            };
            this.add("/addStock", stockModel)
                .then(function (resp) {
                _this.StocksService.hideDialog();
                _this.viewStocks();
                _this.StocksService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.StocksService.showToast(err);
            });
        };
        /**
         * loadItems
         */
        StocksDialogController.prototype.loadItems = function () {
            var _this = this;
            return this.view_without_data('/viewItems')
                .then(function (items) {
                _this.ItemsService.listItems = items.data.listItems;
                return _this.ItemsService.listItems;
            })
                .catch(function (err) {
                _this.ItemsService.showToast(err);
            });
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
    StocksController.$inject = ['$mdDialog', 'StocksService', 'BaseService'];
    StocksDialogController.$inject = ['$mdDialog', 'StocksService', 'BaseService', 'ItemsService', 'stock'];
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
            _this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            _this.viewSuppliers();
            return _this;
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
            var templateUrl = 'app/templates/Suppliers/suppliers-dialog.html', supplier = {};
            this.showDialog(templateUrl, supplier);
        };
        /**
         * showEditDialog
         */
        SuppliersController.prototype.showEditDialog = function (supplier) {
            var templateUrl = 'app/templates/Suppliers/suppliers-edit-dialog.html';
            this.showDialog(templateUrl, supplier);
        };
        /**
         * viewSuppliers
         */
        SuppliersController.prototype.viewSuppliers = function () {
            var _this = this;
            this.view_without_data('/viewSuppliers')
                .then(function (suppliers) {
                _this.SuppliersService.listSuppliers = suppliers.data.listSuppliers;
            })
                .catch(function (err) {
                _this.SuppliersService.showToast(err);
            });
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
                var supplierModel = {
                    supplier: supplier
                };
                _this.remove('/deleteSupplier', supplierModel)
                    .then(function (resp) {
                    _this.viewSuppliers();
                    _this.SuppliersService.showToast(resp.data.message);
                })
                    .catch(function (err) {
                    _this.SuppliersService.showToast(err);
                });
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
            });
        };
        return SuppliersController;
    }(app.BaseController));
    var SupplierDialogController = (function (_super) {
        __extends(SupplierDialogController, _super);
        function SupplierDialogController($mdDialog, SuppliersService, BaseService, supplier) {
            var _this = _super.call(this, $mdDialog, SuppliersService, BaseService) || this;
            _this.supplier = supplier;
            return _this;
        }
        /**
         * addSupplier
         */
        SupplierDialogController.prototype.addSupplier = function (supplier) {
            var _this = this;
            var supplierModel = {
                supplier: supplier
            };
            this.add('/addSupplier', supplierModel)
                .then(function (response) {
                _this.SuppliersService.hideDialog();
                _this.viewSuppliers();
                _this.SuppliersService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.SuppliersService.showToast(err);
            });
        };
        /**
         * editsupplier
         */
        SupplierDialogController.prototype.editSupplier = function () {
            var _this = this;
            var supplierModel = {
                supplier: this.supplier
            };
            this.update('/editSupplier', supplierModel)
                .then(function (resp) {
                _this.SuppliersService.hideDialog();
                _this.viewSuppliers();
                _this.SuppliersService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.SuppliersService.showToast(err);
            });
        };
        return SupplierDialogController;
    }(SuppliersController));
    SuppliersController.$inject = ['$mdDialog', 'SuppliersService', 'BaseService'];
    SupplierDialogController.$inject = ['$mdDialog', 'SuppliersService', 'BaseService', 'supplier'];
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
            _this.md_query = {
                order: 'name',
                limit: 5,
                page: 1
            };
            _this.viewUnits();
            return _this;
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
            var templateUrl = 'app/templates/Units/units-dialog.html', unit = {};
            this.showDialog(templateUrl, unit);
        };
        /**
         * showEditDialog
         */
        UnitsController.prototype.showEditDialog = function (unit) {
            var templateUrl = 'app/templates/Units/units-edit-dialog.html';
            this.showDialog(templateUrl, unit);
        };
        /**
         * viewUnits
         */
        UnitsController.prototype.viewUnits = function () {
            var _this = this;
            this.view_without_data('/viewUnits')
                .then(function (units) {
                _this.UnitsService.listUnits = units.data.listUnits;
            })
                .catch(function (err) {
                _this.UnitsService.showToast(err);
            });
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
                var unitModel = {
                    unit: unit
                };
                _this.remove('/deleteUnit', unitModel)
                    .then(function (resp) {
                    _this.viewUnits();
                    _this.UnitsService.showToast(resp.data.message);
                })
                    .catch(function (err) {
                    _this.UnitsService.showToast(err);
                });
            })
                .catch(function (err) {
                console.log('Confirm Dialog cancelled.');
            });
        };
        return UnitsController;
    }(app.BaseController));
    var UnitsDialogController = (function (_super) {
        __extends(UnitsDialogController, _super);
        function UnitsDialogController($mdDialog, UnitsService, BaseService, unit) {
            var _this = _super.call(this, $mdDialog, UnitsService, BaseService) || this;
            _this.unit = unit;
            return _this;
        }
        /**
          * addUnit
          */
        UnitsDialogController.prototype.addUnit = function (unit) {
            var _this = this;
            var unitModel = {
                unit: unit
            };
            this.add('/addUnit', unitModel)
                .then(function (response) {
                _this.UnitsService.hideDialog();
                _this.viewUnits();
                _this.UnitsService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.UnitsService.showToast(err);
            });
        };
        /**
         * editUnit
         */
        UnitsDialogController.prototype.editUnit = function () {
            var _this = this;
            var unitModel = {
                unit: this.unit
            };
            this.update('/editUnit', unitModel)
                .then(function (resp) {
                _this.UnitsService.hideDialog();
                _this.viewUnits();
                _this.UnitsService.showToast(resp.data.message);
            })
                .catch(function (err) {
                _this.UnitsService.showToast(err);
            });
        };
        return UnitsDialogController;
    }(UnitsController));
    UnitsController.$inject = ['$mdDialog', 'UnitsService', 'BaseService'];
    UnitsDialogController.$inject = ['$mdDialog', 'UnitsService', 'BaseService', 'unit'];
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
    function run($rootScope, DashboardService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var name = toState.title;
            stateNameModifier(name);
        });
        function stateNameModifier(name) {
            DashboardService.stateNameModifier(name);
        }
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
    var CategoriesService = (function () {
        function CategoriesService(ToastService, DialogService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
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
        return CategoriesService;
    }());
    CategoriesService.$inject = ['ToastService', 'DialogService'];
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
    var ItemsService = (function () {
        function ItemsService(ToastService, DialogService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
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
        return ItemsService;
    }());
    ItemsService.$inject = ['ToastService', 'DialogService'];
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
                alert(JSON.stringify(response));
                if (response.status === -1)
                    throw 'API is dead.';
                if (response.status === 500)
                    throw response.data.message;
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
    var StocksService = (function () {
        function StocksService(ToastService, DialogService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
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
        return StocksService;
    }());
    StocksService.$inject = ['ToastService', 'DialogService'];
    angular
        .module('inventory-management')
        .service('StocksService', StocksService);
})(app || (app = {}));
"use strict";
var app;
(function (app) {
    'use strict';
    var SuppliersService = (function () {
        function SuppliersService(ToastService, DialogService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
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
        return SuppliersService;
    }());
    SuppliersService.$inject = ['ToastService', 'DialogService'];
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
    var UIDService = (function () {
        function UIDService() {
        }
        /**
         * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
         */
        UIDService.prototype.generateUID = function () {
            return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
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
        function UnitsService(ToastService, DialogService) {
            this.ToastService = ToastService;
            this.DialogService = DialogService;
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
        return UnitsService;
    }());
    UnitsService.$inject = ['ToastService', 'DialogService'];
    angular
        .module('inventory-management')
        .service('UnitsService', UnitsService);
})(app || (app = {}));
//# sourceMappingURL=bundle.js.map