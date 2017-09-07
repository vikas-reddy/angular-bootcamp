import { combineReducers, Action } from '@ngrx/store';

import { IViewsFilterState, viewsFilter } from './views-filter-state';
import { IViewsBreakdownState, viewsBreakdown } from './views-breakdown-state';

export interface IDashboardState {
  viewsFilter: IViewsFilterState;
  currentVideo: string;
  viewsBreakdown: IViewsBreakdownState;
  topList: string[];
}

const VIDEO_SELECTED = 'VIDEO_SELECTED';
export const createVideoSelectedAction = (id: string): Action => {
  return {
    type: VIDEO_SELECTED,
    payload: id
  };
};

const currentVideo = (prevState: string = undefined, action: Action): string => {
  switch (action.type) {
    case VIDEO_SELECTED:
      return action.payload;
    default:
      return prevState;
  }
};

const topList = (prevState: string[] = [], action: Action): string[] => {
  switch (action.type) {
    default:
      return prevState;
  }
};

export const dashboardReducer = combineReducers({
  viewsFilter,
  currentVideo,
  viewsBreakdown,
  topList
});
