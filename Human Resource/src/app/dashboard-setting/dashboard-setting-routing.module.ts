import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardSettingComponent } from './dashboard-setting.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardSettingComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class DashboardSettingRoutingModule { }
