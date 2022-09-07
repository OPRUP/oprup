import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardOperationRoutingModule } from './dashboard-operation-routing.module';
import { DashboardOperationComponent } from './dashboard-operation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DashboardOperationComponent
  ],
  imports: [
    CommonModule,
    DashboardOperationRoutingModule,

  ]
})
export class DashboardOperationModule { }
