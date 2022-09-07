import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeLeaveRoutingModule } from './employee-leave-routing.module';
import { CreateEmployeeLeaveComponent } from './create-employee-leave/create-employee-leave.component';
import { DeleteEmployeeLeaveComponent } from './delete-employee-leave/delete-employee-leave.component';
import { EditEmployeeLeaveComponent } from './edit-employee-leave/edit-employee-leave.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    EmployeeLeavesComponent,
    CreateEmployeeLeaveComponent,
    EditEmployeeLeaveComponent,
    DeleteEmployeeLeaveComponent
  ],
  imports: [
    CommonModule,
    EmployeeLeaveRoutingModule,
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
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class EmployeeLeaveModule { }
