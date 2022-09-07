import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardReportRoutingModule } from './dashboard-report-routing.module';
import { DashboardReportComponent } from './dashboard-report.component';


@NgModule({
  declarations: [
    DashboardReportComponent
  ],
  imports: [
    CommonModule,
    DashboardReportRoutingModule
  ]
})
export class DashboardReportModule { }
