import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPurchaseRoutingModule } from './dashboard-purchase-routing.module';
import { DashboardPurchaseComponent } from './dashboard-purchase.component';


@NgModule({
  declarations: [
    DashboardPurchaseComponent
  ],
  imports: [
    CommonModule,
    DashboardPurchaseRoutingModule
  ]
})
export class DashboardPurchaseModule { }
