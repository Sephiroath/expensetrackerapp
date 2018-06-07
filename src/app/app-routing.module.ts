import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'expensestracker',
    pathMatch: 'full'
  },
  {
    path: 'expensestracker',
    loadChildren: 'app/expensestracker/expensestracker.module#ExpensestrackerModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
