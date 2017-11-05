import { Injectable } from '@angular/core';
import { Store } from './store';
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
    SessionStorageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SessionStorageService.ctorParameters = function () { return [
        { type: Store, },
    ]; };
    return SessionStorageService;
}());
export { SessionStorageService };
//# sourceMappingURL=session-storage.service.js.map