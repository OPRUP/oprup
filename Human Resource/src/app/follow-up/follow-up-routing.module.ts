import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DashboardFollowComponent } from './dashboard-follow/dashboard-follow.component';
import { HokomiDetailsComponent } from './hokomi-details/hokomi-details.component';
import { NumOfEmployeeComponent } from './num-of-employee/num-of-employee.component';
import { NumOfProjectsComponent } from './num-of-projects/num-of-projects.component';
import { PassPortsExpiresComponent } from './pass-ports-expires/pass-ports-expires.component';
import { QiwaEmployeeComponent } from './qiwa-employee/qiwa-employee.component';
import { ResidenceComponent } from './residence/residence.component';
import { TravellingEmployeeComponent } from './travelling-employee/travelling-employee.component';

const routes: Routes = [{
  
  path: '',
  children: [
    {
      path: '',
      component: DashboardFollowComponent
    },
    {
      path: 'employeeCount',
      component: NumOfEmployeeComponent
    },
    {
      path: 'projectCount',
      component: NumOfProjectsComponent
    },
    {
      path: 'creditCards',
      component: CreditCardComponent
    },
    {
      path: 'residence',
      component: ResidenceComponent
    },
    {
      path: 'traveling-employee',
      component: TravellingEmployeeComponent
    },
     {
      path: 'qiwa-employee',
      component: QiwaEmployeeComponent
    },
    {
      path: 'passports-expiry',
      component: PassPortsExpiresComponent
    },
    {
      path: 'hokomi-details',
      component: HokomiDetailsComponent
    },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowUpRoutingModule { }
