import { Injectable } from '@angular/core';
import { Store } from './store';
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
    LocalStorageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocalStorageService.ctorParameters = function () { return [
        { type: Store, },
    ]; };
    return LocalStorageService;
}());
export { LocalStorageService };
//# sourceMappingURL=local-storage.service.js.map