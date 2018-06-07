import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensestrackerComponent } from './expensestracker/expensestracker.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensestrackerComponent,
    children: [{
      path: '',
      redirectTo: 'expensestracker',
      pathMatch: 'full'
    },
    {
      path: 'expensestracker',
      component: ExpensestrackerComponent,
      data: {
        title: 'Projects'
      }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensestrackerRoutingModule { }
