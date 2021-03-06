import { Action, combineReducers } from '@ngrx/store';

const PICK_BERRY = 'PICK_BERRY';
export class PickBerryAction implements Action {
  type = PICK_BERRY;
}
const PICK_APPLE = 'PICK_APPLE';
export class PickAppleAction implements Action {
  type = PICK_APPLE;
}
const PICK_APPLES = 'PICK_APPLES';
export class PickApplesAction implements Action {
  type = PICK_APPLES;
  constructor(public payload: number) { }
}
const EMPTY_CART = 'EMPTY_CART';
export class EmptyCartAction implements Action {
  type = EMPTY_CART;
}

export interface AppState {
  berryCounter: number;
  appleCounter: number;
}

export function berryCounterReducer
  (value: number = 0, action: (PickBerryAction | EmptyCartAction)): number {
    switch (action.type) {
      case PICK_BERRY:
        return value + 1;

      case EMPTY_CART:
        return 0;

      default:
        return value;
    }
  }

export function appleCounterReducer (value: number = 0, action: (PickAppleAction | PickApplesAction)): number {
  switch (action.type) {
    // If you have too many apples, they spill and you lose them all.
    case PICK_APPLE:
      const x = value + 1;
      return x > 10 ? 0 : x;

    case PICK_APPLES:
      const y = value + (action as PickApplesAction).payload;
      return y > 10 ? 0 : y;

    case EMPTY_CART:
      return 0;

    default:
      return value;
  }
};
