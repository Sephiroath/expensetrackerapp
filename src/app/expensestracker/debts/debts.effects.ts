import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import {
  ActionDebtsPersist,
  DEBTS_KEY,
  DebtsActionTypes
} from './debts.reducer';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistTodos(): Observable<Action> {
    return this.actions$
      .ofType(DebtsActionTypes.PERSIST)
      .pipe(
        tap((action: ActionDebtsPersist) =>
          this.localStorageService.setItem(DEBTS_KEY, action.payload.debts)
        )
      );
  }
}
