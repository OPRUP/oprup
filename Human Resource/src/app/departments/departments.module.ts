import { PrintDepartmentComponent } from './print-department/print-department.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments/departments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    DepartmentsComponent,
    CreateDepartmentComponent,
    EditDepartmentComponent,
    DeleteDepartmentComponent,
    PrintDepartmentComponent

  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModule,
    NgxDropzoneModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    NgSelectModule,

    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    NgSelectModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgSelectModule,
    ReactiveFormsModule

  ]
})
export class DepartmentsModule { }
