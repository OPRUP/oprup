import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeSalaryObjectsRoutingModule } from './employee-salary-objects-routing.module';
import { EmployeeSalaryObjectsComponent } from './employee-salary-objects/employee-salary-objects.component';
import { DeleteEmployeeSalaryObjectComponent } from './delete-employee-salary-object/delete-employee-salary-object.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CreateEmployeeSalaryObjectComponent } from './create-employee-salary-object/create-employee-salary-object.component';
import { EditEmployeeSalaryObjectComponent } from './edit-employee-salary-object/edit-employee-salary-object.component';


@NgModule({
  declarations: [

    EmployeeSalaryObjectsComponent,
    CreateEmployeeSalaryObjectComponent,
    EditEmployeeSalaryObjectComponent,
    DeleteEmployeeSalaryObjectComponent,


  ],
  imports: [
    CommonModule,
    EmployeeSalaryObjectsRoutingModule,
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
    MatListModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,


  ]
})
export class EmployeeSalaryObjectsModule { }
