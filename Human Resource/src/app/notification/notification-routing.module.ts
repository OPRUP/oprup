import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ViewNotificationComponent } from './view-notification/view-notification.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'notify',
        component: ViewNotificationComponent,
      },
     

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class NotificationRoutingModule { }
