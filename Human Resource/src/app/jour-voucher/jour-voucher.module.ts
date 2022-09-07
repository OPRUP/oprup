import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourVoucherRoutingModule } from './jour-voucher-routing.module';
import { CreateJourVoucherComponent } from './create-jour-voucher/create-jour-voucher.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
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
import { JourVoucherComponent } from './jour-voucher/jour-voucher.component';
import { DeleteJourVoucherComponent } from './delete-jour-voucher/delete-jour-voucher.component';
import { EditJourVoucherComponent } from './edit-jour-voucher/edit-jour-voucher.component';
import { PrintJourVoucherComponent } from './print-jour-voucher/print-jour-voucher.component';


@NgModule({
  declarations: [
    CreateJourVoucherComponent,
    JourVoucherComponent,
    DeleteJourVoucherComponent,
    PrintJourVoucherComponent,
    EditJourVoucherComponent

  ],
  imports: [
    CommonModule,
    JourVoucherRoutingModule,
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
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class JourVoucherModule { }
