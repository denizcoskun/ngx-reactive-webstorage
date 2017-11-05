import { Store } from './store';
import { Observable } from 'rxjs/Observable';
export declare class SessionStorageService {
    private store;
    constructor(store: Store);
    setItem<T>(key: string, payload: T): void;
    getItem<T>(key: string): Observable<T>;
    removeItem(key: string): void;
}
