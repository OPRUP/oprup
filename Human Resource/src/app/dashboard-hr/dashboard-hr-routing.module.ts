import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHrComponent } from './dashboard-hr.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardHrComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardHrRoutingModule { }
