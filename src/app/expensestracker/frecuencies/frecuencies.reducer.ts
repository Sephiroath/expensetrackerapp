import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const FRECUENCIES_KEY = 'EXPENSESTRACKER.FRECUENCIES';

export enum FrecuenciesActionTypes {
  RETRIEVE = '[Frecuencies] Retrieve',
  RETRIEVE_SUCCESS = '[Frecuencies] Retrieve Success',
  RETRIEVE_ERROR = '[Frecuencies] Retrieve Error'
}

export class ActionFrecuenciesRetrieve implements Action {
  readonly type = FrecuenciesActionTypes.RETRIEVE;
  constructor(public payload: { }) {}
}

export class ActionFrecuenciesRetrieveSuccess implements Action {
  readonly type = FrecuenciesActionTypes.RETRIEVE_SUCCESS;
  constructor(public payload: { frecuencies: Frecuency[] }) {}
}

export class ActionFrecuenciesRetrieveError implements Action {
  readonly type = FrecuenciesActionTypes.RETRIEVE_ERROR;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export type FrecuenciesActions =
  | ActionFrecuenciesRetrieve
  | ActionFrecuenciesRetrieveSuccess
  | ActionFrecuenciesRetrieveError;

export const initialState: FrecuenciesState = {
  frecuencies: [],
  loading: false
};

export const selectorFrecuencies = state => state.expensestracker.frecuencies;

export function frecuenciesReducer(
    state: FrecuenciesState = initialState,
    action: FrecuenciesActions
  ): FrecuenciesState {
  switch (action.type) {
    case FrecuenciesActionTypes.RETRIEVE:
    return {
      ...state,
      loading: true,
      frecuencies: null,
      error: null
    };

  case FrecuenciesActionTypes.RETRIEVE_SUCCESS:
    return {
      ...state,
      loading: false,
      frecuencies: action.payload.frecuencies,
      error: null
    };

  case FrecuenciesActionTypes.RETRIEVE_ERROR:
    return {
      ...state,
      loading: false,
      frecuencies: null,
      error: action.payload.error
    };

    default:
      return state;
  }
}

export interface Frecuency {
  frecuencyId: number;
  description: string;
}

export interface FrecuenciesState {
  frecuencies: Frecuency[];
  loading?: boolean;
  error?: HttpErrorResponse;
}
