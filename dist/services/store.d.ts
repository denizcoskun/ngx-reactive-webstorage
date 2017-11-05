import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
export declare class Store extends BehaviorSubject<any> {
    private dispatcher;
    constructor(keys: string[]);
    getAll(): this;
    getItem<T>(key: string): Observable<T | null>;
    setItem<T>(key: string, payload: T): void;
    removeItem(key: string): void;
    private reducer(state, payload);
    private getFromLocalStorage(keys);
}
