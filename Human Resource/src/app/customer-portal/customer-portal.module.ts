import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { ContractsComponent } from './contracts/contracts.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { EmployeeProjectDetailsComponent } from './employee-project-details/employee-project-details.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';


@NgModule({
  declarations: [
    ContractsComponent,
    CustomerDashboardComponent,
    EmployeeProjectComponent,
    EmployeeProjectDetailsComponent,
    InsuranceComponent,
    InsuranceDetailsComponent,

  ],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
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
    TranslateModule,
    MatListModule,
    NgSelectModule,
    NgSelectModule,
    MatCardModule,
    HttpClientModule,
  ]
})
export class CustomerPortalModule { }
