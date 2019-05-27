import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'app', component: ExpensesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
