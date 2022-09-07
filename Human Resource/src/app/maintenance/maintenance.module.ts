import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { MaintenanceCreateComponent } from './Maintenance-create/Maintenance-create.component';
import { MaintenanceDeleteComponent } from './Maintenance-delete/Maintenance-delete.component';
import { MaintenanceEditComponent } from './Maintenance-edit/Maintenance-edit.component';
import { MaintenancePrintComponent } from './Maintenance-print/Maintenance-print.component';
import { MaintenanceComponent } from './Maintenance/Maintenance.component';


@NgModule({
  declarations: [
    MaintenanceComponent,
    MaintenanceCreateComponent,
    MaintenanceDeleteComponent,
    MaintenanceEditComponent,
    MaintenancePrintComponent

  ],
  imports: [
    CommonModule,
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
    HttpClientModule,
    MaintenanceRoutingModule,
    ReactiveFormsModule
  ]
})
export class MaintenanceModule { }
