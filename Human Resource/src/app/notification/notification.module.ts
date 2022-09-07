import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { ViewNotificationComponent } from './view-notification/view-notification.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ViewNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MatTableModule,

  ]
})
export class NotificationModule { }
