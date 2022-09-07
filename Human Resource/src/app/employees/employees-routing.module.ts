import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateEmployeeDetailsComponent } from './create-employee-details/create-employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateEmployee03DocumentsComponent } from './create-employee03-documents/create-employee03-documents.component';
import { CreateEmployee05AddressComponent } from './create-employee05-address/create-employee05-address.component';
import { CreateEmployee06QualificationComponent } from './create-employee06-qualification/create-employee06-qualification.component';
import { CreateEmployee07WorkExperienceComponent } from './create-employee07-work-experience/create-employee07-work-experience.component';
import { CreateEmployee08BankAccountComponent } from './create-employee08-bank-account/create-employee08-bank-account.component';
import { CreateEmployee09ContractComponent } from './create-employee09-contract/create-employee09-contract.component';
import { EmployeeContractDetailsComponent } from './create-employee09-contract/employee-contract-details/employee-contract-details.component';
import { CreateEmployee10HealthInsuranceComponent } from './create-employee10-hokome/create-employee10-hokome.component';
import { CreateEmployee11EmployeedInformationComponent } from './create-employee11-employeed-information/create-employee11-employeed-information.component';
//import { CreateEmployee11EmployeedInformationComponent } from './create-employee11-employeed-information/create-employee11-employeed-information.component';
import { EditEmployeeResidenceAndTransportationComponent } from './edit-employee-residence-and-transportation/edit-employee-residence-and-transportation.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeResidenceAndTransportationComponent } from './employee-residence-and-transportation/employee-residence-and-transportation.component';
import { EmployeesComponent } from './employees/employees.component';
import { ListOfEmployeesComponent } from './list-of-employees/list-of-employees.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'employees',
        component: EmployeesComponent,
      },
      {
        path: 'create-employee',
        component: CreateEmployeeComponent,
      },
      {
        path: 'view-employee/:id',
        component: ViewEmployeeComponent,
      },


       {
        path: 'create-employee-details/:id',
        component: CreateEmployeeDetailsComponent,
      },

      {
        path: 'create-employee03-documents/:id',
        component: CreateEmployee03DocumentsComponent,
      },

      {
        path: 'create-employee05-address/:id',
        component: CreateEmployee05AddressComponent,
      },
      {
        path: 'create-employee06-qualification/:id',
        component: CreateEmployee06QualificationComponent,
      },
      {
        path: 'create-employee07-work-experience/:id',
        component: CreateEmployee07WorkExperienceComponent,
      },
      {
        path: 'create-employee08-bank-account/:id',
        component: CreateEmployee08BankAccountComponent,
      },
      {
        path: 'create-employee09-contract/:id',
        component: CreateEmployee09ContractComponent,
      },
      {
        path: 'create-employee10-hokome/:id',
        component: CreateEmployee10HealthInsuranceComponent,
      },
      {
        path: 'create-employee11-employeed-information/:id',
        component: CreateEmployee11EmployeedInformationComponent,
      },
      {
        path: 'employee-contract-details/:eid/:cid',
        component: EmployeeContractDetailsComponent,
      },
      {
        path: 'employee-details',
        component: EmployeeDetailsComponent,
      },
      {
        path: 'list-of-employees',
        component: ListOfEmployeesComponent,
      },
      {
        path: 'employee-residence-transportation/:id',
        component: EmployeeResidenceAndTransportationComponent,
      },
      {
        path: 'edit-employee-residence-transportation/:id',
        component: EditEmployeeResidenceAndTransportationComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class EmployeesRoutingModule { }
export class EmployeeImageProfileRoutingModule { }
