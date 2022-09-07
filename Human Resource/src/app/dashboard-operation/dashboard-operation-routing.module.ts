import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardOperationComponent } from './dashboard-operation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardOperationComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class DashboardOperationRoutingModule { }
