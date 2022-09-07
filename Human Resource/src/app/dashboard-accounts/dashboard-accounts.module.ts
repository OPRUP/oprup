import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAccountsRoutingModule } from './dashboard-accounts-routing.module';
import { DashboardAccountsComponent } from './dashboard-accounts/dashboard-accounts.component';


@NgModule({
  declarations: [
    DashboardAccountsComponent
  ],
  imports: [
    CommonModule,
    DashboardAccountsRoutingModule
  ]
})
export class DashboardAccountsModule { }
