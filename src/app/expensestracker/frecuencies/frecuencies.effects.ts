import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import {
  ActionFrecuenciesRetrieve,
  ActionFrecuenciesRetrieveError,
  ActionFrecuenciesRetrieveSuccess,
  FRECUENCIES_KEY,
  FrecuenciesActionTypes
} from './frecuencies.reducer';
import { FrecuenciesService } from './frecuencies.service';

@Injectable()
export class StockMarketEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private service: FrecuenciesService
  ) {}

  @Effect()
  retrieveStock(): Observable<Action> {
    return this.actions$.ofType(FrecuenciesActionTypes.RETRIEVE).pipe(
      tap((action: ActionFrecuenciesRetrieve) =>
        this.localStorageService.setItem(FRECUENCIES_KEY, {})
      ),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((action: ActionFrecuenciesRetrieve) =>
        this.service
          .retrieveFrecuencies()
          .pipe(
            map(frecuencies => new ActionFrecuenciesRetrieveSuccess ({ frecuencies })),
            catchError(error =>
              of(new ActionFrecuenciesRetrieveError ({ error }))
            )
          )
      )
    );
  }
}
