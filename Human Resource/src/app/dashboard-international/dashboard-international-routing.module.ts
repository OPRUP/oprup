import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardInternationalComponent } from './dashboard-international.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardInternationalComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class DashboardInternationalRoutingModule { }
