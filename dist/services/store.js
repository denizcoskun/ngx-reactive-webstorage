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
import { Injectable, Inject, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(keys) {
        var _this = _super.call(this, {}) || this;
        _this.dispatcher = new Subject();
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
    Store.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Store.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: ['localStoragekeys',] }, { type: Optional },] },
    ]; };
    return Store;
}(BehaviorSubject));
export { Store };
//# sourceMappingURL=store.js.map