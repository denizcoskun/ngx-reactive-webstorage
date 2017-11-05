import { NgModule } from '@angular/core';
import { Store, LocalStorageService, SessionStorageService } from './services';
var ReactiveWebStorageModule = /** @class */ (function () {
    function ReactiveWebStorageModule() {
    }
    // tslint:disable-next-line:member-access
    ReactiveWebStorageModule.setLocalStorageKeys = function (keys) {
        return {
            ngModule: ReactiveWebStorageModule,
            providers: [{ provide: 'localStoragekeys', useValue: keys }]
        };
    };
    ReactiveWebStorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    providers: [Store, LocalStorageService, SessionStorageService]
                },] },
    ];
    /** @nocollapse */
    ReactiveWebStorageModule.ctorParameters = function () { return []; };
    return ReactiveWebStorageModule;
}());
export { ReactiveWebStorageModule };
//# sourceMappingURL=reactive-webstorage.module.js.map