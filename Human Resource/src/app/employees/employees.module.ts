import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { CreateEmployeeDetailsComponent } from './create-employee-details/create-employee-details.component';
import { CreateEmployee03DocumentsComponent } from './create-employee03-documents/create-employee03-documents.component';
import { CreateEmployee05AddressComponent } from './create-employee05-address/create-employee05-address.component';
import { CreateEmployee06QualificationComponent } from './create-employee06-qualification/create-employee06-qualification.component';
import { CreateEmployee07WorkExperienceComponent } from './create-employee07-work-experience/create-employee07-work-experience.component';
import { CreateEmployee08BankAccountComponent } from './create-employee08-bank-account/create-employee08-bank-account.component';
import { CreateEmployee09ContractComponent } from './create-employee09-contract/create-employee09-contract.component';
import { CreateEmployee10HealthInsuranceComponent } from './create-employee10-hokome/create-employee10-hokome.component';
import { CreateEmployee11EmployeedInformationComponent } from './create-employee11-employeed-information/create-employee11-employeed-information.component';
import { EmployeeContractDetailsComponent } from './create-employee09-contract/employee-contract-details/employee-contract-details.component';
import { ListOfEmployeesComponent } from './list-of-employees/list-of-employees.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EmployeeResidenceAndTransportationComponent } from './employee-residence-and-transportation/employee-residence-and-transportation.component';
import { EditEmployeeResidenceAndTransportationComponent } from './edit-employee-residence-and-transportation/edit-employee-residence-and-transportation.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    EmployeeDetailsComponent,
    CreateEmployeeDetailsComponent,
    CreateEmployee03DocumentsComponent,
    CreateEmployee05AddressComponent,
    CreateEmployee06QualificationComponent,
    CreateEmployee07WorkExperienceComponent,
    CreateEmployee08BankAccountComponent,
    CreateEmployee09ContractComponent,
    CreateEmployee10HealthInsuranceComponent,
    CreateEmployee11EmployeedInformationComponent,
    EmployeeContractDetailsComponent,
    ListOfEmployeesComponent,
    EmployeeResidenceAndTransportationComponent,
    EditEmployeeResidenceAndTransportationComponent


  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgbModule,
    NgxDropzoneModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    NgSelectModule,
    NgSelectModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class EmployeesModule { }
export interface Employee03_Document {}
