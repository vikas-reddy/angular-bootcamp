import { Store, Action, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';
import { IDashboardState, dashboardReducer } from './dashboard-state';
import { IVideo } from './interfaces';

// The app state and dashboard state are linked together, more than we would
// prefer. There is an upcoming "fractal state" feature in Store to help with
// this.

export interface IAppState {
  dashboard: IDashboardState;
  videoList: IVideo[];
}

const VIDEOS_ARRIVED = 'VIDEOS_ARRIVED';

export const createVideosArrivedAction = (videoList: IVideo[]): Action => {
  return {
    type: VIDEOS_ARRIVED,
    payload: videoList
  };
};

const videoListReducer = (state: IVideo[] = [], action: Action) => {
  switch (action.type) {
    case VIDEOS_ARRIVED:
      return action.payload;
    default:
      return state;
  }
};

const metaReducers = environment.production
  ? [combineReducers]
  : [storeFreeze, combineReducers];

const reducers = compose(...metaReducers)({
  dashboard: dashboardReducer,
  videoList: videoListReducer
});

export function reducer(state: any, action: any) {
  return reducers(state, action);
}
