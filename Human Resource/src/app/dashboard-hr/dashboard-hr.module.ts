import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardHrRoutingModule } from './dashboard-hr-routing.module';
import { DashboardHrComponent } from './dashboard-hr.component';


@NgModule({
  declarations: [
    DashboardHrComponent

  ],
  imports: [
    CommonModule,
    DashboardHrRoutingModule
  ]
})
export class DashboardHrModule { }
