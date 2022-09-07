import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContractsComponent } from './contracts/contracts.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EmployeeProjectDetailsComponent } from './employee-project-details/employee-project-details.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { InsuranceComponent } from './insurance/insurance.component';

const routes: Routes = [{
  path: '',
children: [
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
  },
  {
    path: 'contracts',
    component: ContractsComponent,
  },
  {
    path: 'employee-project',
    component: EmployeeProjectComponent,
  },
  {
    path: 'employee-project-details/:id',
    component: EmployeeProjectDetailsComponent,
  },
  {
    path: 'employee-insurance',
    component: InsuranceComponent,
  },
  {
    path: 'employee-insurance-details/:id',
    component: InsuranceDetailsComponent,
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class CustomerPortalRoutingModule { }
