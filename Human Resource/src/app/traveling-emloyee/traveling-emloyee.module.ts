import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelingEmloyeeRoutingModule } from './traveling-emloyee-routing.module';
import { TravelingEmployeeComponent } from './traveling-employee/traveling-employee.component';
import { CreateTravelingEmployeeComponent } from './create-traveling-employee/create-traveling-employee.component';
import { DeleteTravelingEmployeeComponent } from './delete-traveling-employee/delete-traveling-employee.component';
import { EditTravelingEmployeeComponent } from './edit-traveling-employee/edit-traveling-employee.component';
import { PrintTravelingEmployeeComponent } from './print-traveling-employee/print-traveling-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    TravelingEmployeeComponent,
    CreateTravelingEmployeeComponent,
    DeleteTravelingEmployeeComponent,
    EditTravelingEmployeeComponent,
    PrintTravelingEmployeeComponent
  ],
  imports: [
    CommonModule,
    TravelingEmloyeeRoutingModule,
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
    ReactiveFormsModule
  ]
})
export class TravelingEmloyeeModule { }
