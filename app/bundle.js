var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    'use strict';
    angular
        .module('inventory-management', [
        'ngMaterial',
        'ui.router',
        'md.data.table'
    ]);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('dashboard', {
            url: '/',
            templateUrl: 'app/templates/Dashboard/dashboard.html'
        })
            .state('dashboard.items', {
            url: 'items',
            templateUrl: 'app/templates/Items/items.html',
            controller: 'ItemsController',
            controllerAs: 'vm'
        })
            .state('dashboard.suppliers', {
            url: 'suppliers',
            templateUrl: 'app/templates/Suppliers/suppliers.html',
            controller: 'SuppliersController',
            controllerAs: 'vm'
        })
            .state('dashboard.stocks', {
            url: 'stocks',
            templateUrl: 'app/templates/Stocks/stocks.html',
            controller: 'StocksController',
            controllerAs: 'vm'
        });
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    angular
        .module('inventory-management')
        .config(config);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var BaseController = (function () {
        function BaseController() {
        }
        /**
         * add
         */
        BaseController.prototype.add = function (url, data) {
            console.log(data);
            console.log(url);
        };
        /**
         * update
         */
        BaseController.prototype.update = function (url, data) {
        };
        /**
         * remove
         */
        BaseController.prototype.remove = function (url, data) {
        };
        /**
         * view
         */
        BaseController.prototype.view = function (url) {
            return null;
        };
        return BaseController;
    }());
    app.BaseController = BaseController;
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var BrandsController = (function (_super) {
        __extends(BrandsController, _super);
        function BrandsController() {
            return _super.apply(this, arguments) || this;
        }
        /**
         * showDialog
         */
        BrandsController.prototype.showDialog = function () {
        };
        /**
         * hideDialog
         */
        BrandsController.prototype.hideDialog = function () {
        };
        return BrandsController;
    }(app.BaseController));
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var CategoriesController = (function (_super) {
        __extends(CategoriesController, _super);
        function CategoriesController() {
            return _super.apply(this, arguments) || this;
        }
        /**
         * showDialog
         */
        CategoriesController.prototype.showDialog = function () {
        };
        /**
         * hideDialog
         */
        CategoriesController.prototype.hideDialog = function () {
        };
        return CategoriesController;
    }(app.BaseController));
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var ItemsController = (function (_super) {
        __extends(ItemsController, _super);
        function ItemsController($mdDialog) {
            var _this = _super.call(this) || this;
            _this.$mdDialog = $mdDialog;
            return _this;
        }
        /**
         * ShowDialog
         */
        ItemsController.prototype.showDialog = function () {
            this.$mdDialog.show({
                templateUrl: 'app/templates/Items/items-dialog.html'
            });
        };
        /**
         * HideDialog
         */
        ItemsController.prototype.hideDialog = function () {
        };
        return ItemsController;
    }(app.BaseController));
    var ItemsDialogController = (function (_super) {
        __extends(ItemsDialogController, _super);
        function ItemsDialogController() {
            return _super.apply(this, arguments) || this;
        }
        /**
         * addItems
         */
        ItemsDialogController.prototype.addItems = function (item) {
            this.add("Sample URL", item);
        };
        return ItemsDialogController;
    }(ItemsController));
    angular
        .module('inventory-management')
        .controller('ItemsController', ItemsController);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var StocksController = (function (_super) {
        __extends(StocksController, _super);
        function StocksController($mdDialog) {
            var _this = _super.call(this) || this;
            _this.$mdDialog = $mdDialog;
            return _this;
        }
        /**
         * ShowDialog
         */
        StocksController.prototype.showDialog = function () {
            this.$mdDialog.show({
                templateUrl: 'app/templates/Stocks/stocks-dialog.html'
            });
        };
        /**
         * HideDialog
         */
        StocksController.prototype.hideDialog = function () {
        };
        return StocksController;
    }(app.BaseController));
    var StocksDialogController = (function (_super) {
        __extends(StocksDialogController, _super);
        function StocksDialogController() {
            return _super.apply(this, arguments) || this;
        }
        StocksDialogController.prototype.addStocks = function (stock) {
            this.add("Sample URL", stock);
        };
        return StocksDialogController;
    }(StocksController));
    angular
        .module('inventory-management')
        .controller('StocksController', StocksController);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var SuppliersController = (function (_super) {
        __extends(SuppliersController, _super);
        function SuppliersController($mdDialog) {
            var _this = _super.call(this) || this;
            _this.$mdDialog = $mdDialog;
            return _this;
        }
        /**
         * ShowDialog
         */
        SuppliersController.prototype.showDialog = function () {
            this.$mdDialog.show({
                templateUrl: 'app/templates/Suppliers/suppliers-dialog.html',
                controller: SupplierDialogController,
                controllerAs: 'vm'
            });
        };
        /**
         * HideDialog
         */
        SuppliersController.prototype.hideDialog = function () {
        };
        return SuppliersController;
    }(app.BaseController));
    var SupplierDialogController = (function (_super) {
        __extends(SupplierDialogController, _super);
        function SupplierDialogController() {
            return _super.apply(this, arguments) || this;
        }
        /**
         * add
         */
        SupplierDialogController.prototype.addSupplier = function (supplier) {
            this.add("Sample URL", supplier);
        };
        return SupplierDialogController;
    }(SuppliersController));
    angular
        .module('inventory-management')
        .controller('SuppliersController', SuppliersController);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var UnitsController = (function (_super) {
        __extends(UnitsController, _super);
        function UnitsController() {
            return _super.apply(this, arguments) || this;
        }
        /**
         * showDialog
         */
        UnitsController.prototype.showDialog = function () {
        };
        /**
         * hideDialog
         */
        UnitsController.prototype.hideDialog = function () {
        };
        return UnitsController;
    }(app.BaseController));
})(app || (app = {}));
//# sourceMappingURL=bundle.js.map