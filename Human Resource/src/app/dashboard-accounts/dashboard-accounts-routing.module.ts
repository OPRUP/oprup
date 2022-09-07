import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardAccountsComponent } from './dashboard-accounts/dashboard-accounts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardAccountsComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class DashboardAccountsRoutingModule { }
