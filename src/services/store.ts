import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

@Injectable()
export class Store extends BehaviorSubject<any> {
  private dispatcher = new Subject();
  constructor( @Inject('localStoragekeys') @Optional() keys: string[]) {
    super({});
    const initialState: any = keys && keys.length > 0 ? this.getFromLocalStorage(keys) : {};

    this.dispatcher
      .startWith({})
      .scan((state, payload) => this.reducer(state, payload), initialState)
      .subscribe((state) => super.next(state));

  }

  public getAll() {
    return this;
  }

  public getItem<T>(key: string): Observable <T | null>  {
    if (!!key && typeof key === 'string') {
      return this.map((state) => state[key]);
    }
  }

  public setItem<T>(key: string, payload: T) {
    if (!key) { return; }
    this.dispatcher.next({ key, payload });
  }

  public removeItem(key: string) {
    if (!key) { return; }
    this.dispatcher.next({ key, payload: null });
  }

  private reducer(state: any, payload: any) {
    return {
      ...state,
      [payload['key']]: payload['payload']
    };
  }

  private getFromLocalStorage(keys: string[]) {
    const initialState: any = {};
    keys.forEach((key) => {
      try {
        const payload = JSON.parse(localStorage.getItem(key));
        initialState[key] = payload;
      // tslint:disable-next-line:no-empty
      } catch (error) {

      }
    });
    return initialState;
  }

}
