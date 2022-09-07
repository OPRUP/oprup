import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardFinanceRoutingModule } from './dashboard-finance-routing.module';
import { DashboardFinanceComponent } from './dashboard-finance/dashboard-finance.component';


@NgModule({
  declarations: [
    DashboardFinanceComponent
  ],
  imports: [
    CommonModule,
    DashboardFinanceRoutingModule
  ]
})
export class DashboardFinanceModule { }
