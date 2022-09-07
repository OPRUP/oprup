import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPurchaseComponent } from './dashboard-purchase.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardPurchaseComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPurchaseRoutingModule { }
