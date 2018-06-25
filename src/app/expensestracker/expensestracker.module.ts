import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ExpensestrackerRoutingModule } from './expensestracker-routing.module';
import { ExpensestrackerComponent } from './expensestracker/expensestracker.component';
import { DebtsComponent } from './debts/debts.component';
import { FrecuenciesComponent } from './frecuencies/frecuencies.component';
import { FrecuenciesService } from '@app/expensestracker/frecuencies/frecuencies.service';

@NgModule({
  imports: [
    SharedModule,
    ExpensestrackerRoutingModule,
    StoreModule.forFeature('expensestracker', {
    }),
    EffectsModule.forFeature([])
  ],
  declarations: [ExpensestrackerComponent, DebtsComponent, FrecuenciesComponent],
  providers: [FrecuenciesService]
})
export class ExpensestrackerModule { }
