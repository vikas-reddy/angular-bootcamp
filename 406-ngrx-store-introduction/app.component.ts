import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { PickBerryAction, AppState, PickAppleAction, PickApplesAction, EmptyCartAction } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  berry$: Observable<number>;
  apple$: Observable<number>;
  total$: Observable<number>;

  constructor(public store: Store<AppState>) {
    this.berry$ = store.select(state => state.berryCounter);
    this.apple$ = store.select(state => state.appleCounter);
    this.total$ = store.map(s => s.berryCounter + s.appleCounter);
  }

  pickBerry() {
    this.store.dispatch(new PickBerryAction());
  }

  pickApple() {
    this.store.dispatch(new PickAppleAction());
  }

  pickApples() {
    this.store.dispatch(new PickApplesAction(3));
  }

  empty() {
    this.store.dispatch(new EmptyCartAction());
  }
}
