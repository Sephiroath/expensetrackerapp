import { Action } from '@ngrx/store';

export const DEBTS_KEY = 'EXPENSESTRACKER.EXPENSES';

export enum DebtsActionTypes {
  ADD = '[Debts] Add',
  REMOVE = '[Debts] Remove',
  UPDATE = '[Debts] Update',
  PERSIST = '[Debts] Persist'
}

export class ActionDebtsAdd implements Action {
  readonly type = DebtsActionTypes.ADD;
  constructor(public payload: { debt: Debt }) {}
}

export class ActionDebtsRemove implements Action {
  readonly type = DebtsActionTypes.REMOVE;
  constructor(public payload: { id: number }) {}
}

export class ActionDebtsUpdate implements Action {
  readonly type = DebtsActionTypes.UPDATE;
  constructor(public payload: { debt: Debt }) {}
}

export class ActionDebtsPersist implements Action {
  readonly type = DebtsActionTypes.PERSIST;
  constructor(public payload: { debts: Debt[] }) {}
}

export type DebtsActions =
  | ActionDebtsAdd
  | ActionDebtsRemove
  | ActionDebtsUpdate
  | ActionDebtsPersist;

export const initialState: DebtsState = {
  debts: []
};

export const selectorDebts = state => state.expensestracker.debts;

export function debtsReducer(
    state: DebtsState = initialState,
    action: DebtsActions
  ): DebtsState {
  switch (action.type) {
      case DebtsActionTypes.ADD:
      return {
          ...state,
          debts: state.debts.concat(action.payload.debt)
      };

      case DebtsActionTypes.REMOVE:
      return {
          ...state,
          debts: state.debts.filter((item: Debt) => item.debtId === action.payload.id)
      };

      case DebtsActionTypes.UPDATE:
      const updatedDebts = state.debts.map(debt => {
          if (debt.debtId === action.payload.debt.debtId) {
              return { ...debt, ...action.payload.debt };
          }
          return debt;
      });
      return {
          ...state,
          debts: updatedDebts
      };

      default:
      return state;
  }
}

export interface Debt {
  debtId: number;
  name: string;
  description: string;
  frecuencyId: number;
  nextDueDate: Date;
  isRecurrent: boolean;
  amount: number;
  debtCategoryId: number;
}

export interface DebtsState {
  debts: Debt[];
}
