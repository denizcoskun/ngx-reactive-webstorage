/**
 * ngx-reactive-webstorage - Angular Reactive WebStorage
 * @version v1.0.0
 * @author Coskun Deniz <c.deniz@gmail.com>
 * @link https://github.com/denizcoskun/ngx-reactive-webstorage#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs/BehaviorSubject"), require("rxjs/Subject"), require("rxjs/add/operator/scan"), require("rxjs/add/operator/map"), require("rxjs/add/operator/do"), require("rxjs/add/operator/startWith"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs/BehaviorSubject", "rxjs/Subject", "rxjs/add/operator/scan", "rxjs/add/operator/map", "rxjs/add/operator/do", "rxjs/add/operator/startWith"], factory);
	else if(typeof exports === 'object')
		exports["ticktock"] = factory(require("@angular/core"), require("rxjs/BehaviorSubject"), require("rxjs/Subject"), require("rxjs/add/operator/scan"), require("rxjs/add/operator/map"), require("rxjs/add/operator/do"), require("rxjs/add/operator/startWith"));
	else
		root["ticktock"] = factory(root["ng"]["core"], root["Rx"], root["Rx"], root["Rx"], root["Rx"], root["Rx"], root["Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var BehaviorSubject_1 = __webpack_require__(6);
var Subject_1 = __webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(keys) {
        var _this = _super.call(this, {}) || this;
        _this.dispatcher = new Subject_1.Subject();
        var initialState = keys && keys.length > 0 ? _this.getFromLocalStorage(keys) : {};
        _this.dispatcher
            .startWith({})
            .scan(function (state, payload) { return _this.reducer(state, payload); }, initialState)
            .subscribe(function (state) { return _super.prototype.next.call(_this, state); });
        return _this;
    }
    Store.prototype.getAll = function () {
        return this;
    };
    Store.prototype.getItem = function (key) {
        if (!!key && typeof key === 'string') {
            return this.map(function (state) { return state[key]; });
        }
    };
    Store.prototype.setItem = function (key, payload) {
        if (!key) {
            return;
        }
        this.dispatcher.next({ key: key, payload: payload });
    };
    Store.prototype.removeItem = function (key) {
        if (!key) {
            return;
        }
        this.dispatcher.next({ key: key, payload: null });
    };
    Store.prototype.reducer = function (state, payload) {
        return __assign({}, state, (_a = {}, _a[payload['key']] = payload['payload'], _a));
        var _a;
    };
    Store.prototype.getFromLocalStorage = function (keys) {
        var initialState = {};
        keys.forEach(function (key) {
            try {
                var payload = JSON.parse(localStorage.getItem(key));
                initialState[key] = payload;
                // tslint:disable-next-line:no-empty
            }
            catch (error) {
            }
        });
        return initialState;
    };
    Store = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('localStoragekeys')), __param(0, core_1.Optional()),
        __metadata("design:paramtypes", [Array])
    ], Store);
    return Store;
}(BehaviorSubject_1.BehaviorSubject));
exports.Store = Store;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var local_storage_service_1 = __webpack_require__(5);
exports.LocalStorageService = local_storage_service_1.LocalStorageService;
var session_storage_service_1 = __webpack_require__(12);
exports.SessionStorageService = session_storage_service_1.SessionStorageService;
var store_1 = __webpack_require__(1);
exports.Store = store_1.Store;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reactive_webstorage_module_1 = __webpack_require__(4);
exports.ReactiveWebStorageModule = reactive_webstorage_module_1.ReactiveWebStorageModule;
var _1 = __webpack_require__(2);
exports.LocalStorageService = _1.LocalStorageService;
exports.SessionStorageService = _1.SessionStorageService;
exports.Store = _1.Store;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var services_1 = __webpack_require__(2);
var ReactiveWebStorageModule = /** @class */ (function () {
    function ReactiveWebStorageModule() {
    }
    ReactiveWebStorageModule_1 = ReactiveWebStorageModule;
    // tslint:disable-next-line:member-access
    ReactiveWebStorageModule.setLocalStorageKeys = function (keys) {
        return {
            ngModule: ReactiveWebStorageModule_1,
            providers: [{ provide: 'localStoragekeys', useValue: keys }]
        };
    };
    ReactiveWebStorageModule = ReactiveWebStorageModule_1 = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [],
            providers: [services_1.Store, services_1.LocalStorageService, services_1.SessionStorageService]
        })
    ], ReactiveWebStorageModule);
    return ReactiveWebStorageModule;
    var ReactiveWebStorageModule_1;
}());
exports.ReactiveWebStorageModule = ReactiveWebStorageModule;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var store_1 = __webpack_require__(1);
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(store) {
        this.store = store;
    }
    LocalStorageService.prototype.setItem = function (key, payload) {
        this.syncWithLocalStorage(key, payload);
        this.store.setItem(key, payload);
    };
    LocalStorageService.prototype.getItem = function (key) {
        return this.store.getItem(key);
    };
    LocalStorageService.prototype.removeItem = function (key) {
        this.syncWithLocalStorage(key, null);
    };
    LocalStorageService.prototype.syncWithLocalStorage = function (key, payload) {
        try {
            if (!!payload) {
                localStorage.setItem(key, JSON.stringify(payload));
            }
            else {
                localStorage.removeItem(key);
            }
            // tslint:disable-next-line:no-empty
        }
        catch (error) {
        }
    };
    LocalStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var store_1 = __webpack_require__(1);
var SessionStorageService = /** @class */ (function () {
    function SessionStorageService(store) {
        this.store = store;
    }
    SessionStorageService.prototype.setItem = function (key, payload) {
        this.store.setItem(key, payload);
    };
    SessionStorageService.prototype.getItem = function (key) {
        return this.store.getItem(key);
    };
    SessionStorageService.prototype.removeItem = function (key) {
        this.store.removeItem(key);
    };
    SessionStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store])
    ], SessionStorageService);
    return SessionStorageService;
}());
exports.SessionStorageService = SessionStorageService;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.umd.js.map