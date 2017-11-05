import { NgModule, ModuleWithProviders } from '@angular/core';
import { Store, LocalStorageService, SessionStorageService } from './services';

@NgModule({
  imports: [],
  declarations: [],
  providers: [Store, LocalStorageService, SessionStorageService]
})
export class ReactiveWebStorageModule {
  // tslint:disable-next-line:member-access
  static setLocalStorageKeys(keys?: string[]): ModuleWithProviders {
    return {
      ngModule: ReactiveWebStorageModule,
      providers: [{provide: 'localStoragekeys', useValue: keys}]
    };
  }
 }
