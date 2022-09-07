import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardReportComponent } from './dashboard-report.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardReportComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class DashboardReportRoutingModule { }
