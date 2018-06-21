import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ExpensestrackerRoutingModule } from './expensestracker-routing.module';
import { ExpensestrackerComponent } from './expensestracker/expensestracker.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  imports: [
    SharedModule,
    ExpensestrackerRoutingModule,
    StoreModule.forFeature('expensestracker', {
    }),
    EffectsModule.forFeature([])
  ],
  declarations: [ExpensestrackerComponent, ExpenseComponent]
})
export class ExpensestrackerModule { }
