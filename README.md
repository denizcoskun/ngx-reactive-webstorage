# Reactive WebStorage for Angular

RxJS powered Reactive storage with the feature of synchronization between `LocalStorage API`.

This library is inspired by the idea from [@ngrx/store](https://github.com/ngrx/platform). The scope of the @ngrx/store has been narrowed to simple add/remove operations for the sake of the quick implementation and less boilerplate.
All the methods WebStorage API has been preserved within the library. (`setItem`,`getItem`,`removeItem`)
## Setup
Install via [npm](http://npmjs.com) :

```
npm install ngx-reactive-webstorage --save
```

ReactiveWebStorageModule should be imported in app.module.ts.
```typescript
import { ReactiveWebStorageModule } from 'ngx-reactive-webstorage';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveWebStorageModule,
    ...
  ]
  ...
})
export class AppModule {}
```

If LocalStorage are to be used, localstorage keys that will be used should be defined to synchronize localstorage and reactive Store at startup.

```typescript
import { ReactiveWebStorageModule } from 'ngx-reactive-webstorage';

// set localstorage keys to sync with at startup
export const storageKeys = ["user", "token"];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveWebStorageModule.setLocalStorageKeys(keys),
    ...
  ]
  ...
})
export class AppModule {}
```



## Usage

Now you just have to inject the service where you need it :

```typescript
import { LocalStorage, SessionStorage } from 'ngx-reactive-webstorage';

@Component({
...
})
export class AppComponent {
  user: Observable<string>;
  constructor(private localStorage: LocalStorage, private sessionStorage: SessionStorage) {
    this.user = this.localStorage.getItem("user"); // { name:"Thomas", surname: "Anderson" }
  }
  
  saveUser(user: any) {
    this.localStorage.setItem("user", user);
  }
  
  removeUser() {
    this.localStorage.removeItem("user");
  }
  
}
```
```html
<p *ngIf="user | async as user">Welcome {{ user.name }}</p>
```
