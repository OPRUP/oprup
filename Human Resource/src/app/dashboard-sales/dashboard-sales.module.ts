import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSalesRoutingModule } from './dashboard-sales-routing.module';
import { DashboardSalesComponent } from './dashboard-sales.component';


@NgModule({
  declarations: [
    DashboardSalesComponent
  ],
  imports: [
    CommonModule,
    DashboardSalesRoutingModule
  ]
})
export class DashboardSalesModule { }
