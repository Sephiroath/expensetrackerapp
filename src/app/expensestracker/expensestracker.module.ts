import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { ExpensestrackerRoutingModule } from './expensestracker-routing.module';
import { ExpensestrackerComponent } from './expensestracker/expensestracker.component';

@NgModule({
  imports: [
    SharedModule,
    ExpensestrackerRoutingModule
  ],
  declarations: [ExpensestrackerComponent]
})
export class ExpensestrackerModule { }
