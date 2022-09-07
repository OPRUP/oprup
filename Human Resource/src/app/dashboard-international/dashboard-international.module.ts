import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardInternationalRoutingModule } from './dashboard-international-routing.module';
import { DashboardInternationalComponent } from './dashboard-international.component';


@NgModule({
  declarations: [
    DashboardInternationalComponent
  ],
  imports: [
    CommonModule,
    DashboardInternationalRoutingModule
  ]
})
export class DashboardInternationalModule { }
