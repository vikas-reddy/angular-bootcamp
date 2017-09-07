import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { IAppState } from './app-state';
import { createVideoSelectedAction } from './dashboard-state';
import { IVideo } from './app.service';

@Injectable()
export class DashboardService {

  currentVideo: Observable<IVideo>;

  constructor(private store: Store<IAppState>) {
    this.currentVideo = Observable.combineLatest(
      this.store.select(appState => appState.dashboard.currentVideo ),
      this.store.select(appState => appState.videoList),
      (id: string, list: IVideo[]) => list.find(video => video.id === id));
  }

  setCurrentVideo(id: string) {
    this.store.dispatch(createVideoSelectedAction(id));
  }
}
