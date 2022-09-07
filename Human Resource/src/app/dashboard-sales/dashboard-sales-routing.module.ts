import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardSalesComponent } from './dashboard-sales.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardSalesComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class DashboardSalesRoutingModule { }
