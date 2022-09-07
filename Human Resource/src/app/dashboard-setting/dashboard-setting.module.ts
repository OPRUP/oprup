import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSettingRoutingModule } from './dashboard-setting-routing.module';
import { DashboardSettingComponent } from './dashboard-setting.component';
 


@NgModule({
  declarations: [
    DashboardSettingComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardSettingRoutingModule
  ]
})
export class DashboardSettingModule { }
