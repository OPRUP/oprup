import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewingResidenceRoutingModule } from './renewing-residence-routing.module';
import { CreateRenewingResidenceComponent } from './create-renewing-residence/create-renewing-residence.component';
import { DeleteRenewingResidenceComponent } from './delete-renewing-residence/delete-renewing-residence.component';
import { EditRenewingResidenceComponent } from './edit-renewing-residence/edit-renewing-residence.component';
import { RenewingResidenceComponent } from './renewing-residence/renewing-residence.component';
import { PrintRenewingResidenceComponent } from './print-renewing-residence/print-renewing-residence.component';
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
    CreateRenewingResidenceComponent,
    DeleteRenewingResidenceComponent,
    EditRenewingResidenceComponent,
    RenewingResidenceComponent,
    PrintRenewingResidenceComponent
  ],
  imports: [
    CommonModule,
    RenewingResidenceRoutingModule,
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
export class RenewingResidenceModule { }
