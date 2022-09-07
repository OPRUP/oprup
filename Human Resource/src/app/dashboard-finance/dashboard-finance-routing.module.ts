import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFinanceComponent } from './dashboard-finance/dashboard-finance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardFinanceComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardFinanceRoutingModule { }
