import { Injectable } from '@angular/core';
import { Store } from './store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {
  constructor(private store: Store) {}

  public setItem<T>(key: string, payload: T) {
    this.syncWithLocalStorage(key, payload);
    this.store.setItem(key, payload);
  }

  public getItem<T>(key: string): Observable<T> {
    return this.store.getItem(key);
  }

  public removeItem(key: string) {
    this.syncWithLocalStorage(key, null);
  }

  private syncWithLocalStorage(key: string, payload: any) {
    try {
      if (!!payload) {
        localStorage.setItem(key, JSON.stringify(payload));
      } else  {
        localStorage.removeItem(key);
      }
    // tslint:disable-next-line:no-empty
    } catch (error) {

    }
  }
}
