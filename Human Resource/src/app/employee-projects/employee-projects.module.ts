import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProjectsRoutingModule } from './employee-projects-routing.module';
import { ViewEmployeeProjectsComponent } from './view-employee-projects/view-employee-projects.component';
import { CreateEmployeeProjectsComponent } from './create-employee-projects/create-employee-projects.component';
import { PrintEmployeeProjectsComponent } from './print-employee-projects/print-employee-projects.component';
import { DeleteEmployeeProjectsComponent } from './delete-employee-projects/delete-employee-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BanksRoutingModule } from '../banks/banks-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { EditEmployeeProjectComponent } from './edit-employee-project/edit-employee-project.component';

@NgModule({
  declarations: [
    ViewEmployeeProjectsComponent,
    CreateEmployeeProjectsComponent,
    PrintEmployeeProjectsComponent,
    DeleteEmployeeProjectsComponent,
    EditEmployeeProjectComponent

  ],
  imports: [
    CommonModule,
    EmployeeProjectsRoutingModule,
    CommonModule,
    BanksRoutingModule,
    FormsModule,
    NgbModule,


    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    NgSelectModule,
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    NgSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class EmployeeProjectsModule { }
