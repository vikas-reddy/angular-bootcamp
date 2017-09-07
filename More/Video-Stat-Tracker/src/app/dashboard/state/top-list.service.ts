import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './app-state';

@Injectable()
export class TopListService {

  constructor(private store: Store<IAppState>) { }

  getTopList() {
    return this.store.select(state => state.videoList);
  }
}
