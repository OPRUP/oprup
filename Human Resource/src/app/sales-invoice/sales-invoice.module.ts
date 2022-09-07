import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesInvoiceRoutingModule } from './sales-invoice-routing.module';
import { CreateSalesInvoiceComponent } from './create-sales-invoice/create-sales-invoice.component';
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
import { EditSalesInvoiceComponent } from './edit-sales-invoice/edit-sales-invoice.component';
import { MatIconModule } from '@angular/material/icon';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';
import { PrintSalesinvoiceComponent } from './print-salesinvoice/print-salesinvoice.component';
import { DeleteSalesInvoiceComponent } from './delete-sales-invoice/delete-sales-invoice.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreateSalesInvoiceComponent,
    EditSalesInvoiceComponent,
    SalesInvoiceComponent,
    PrintSalesinvoiceComponent,
    DeleteSalesInvoiceComponent
  ],
  imports: [
    CommonModule,
    SalesInvoiceRoutingModule,
    NgbModule,
    
    // NgxDropzoneModule,
    // NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,


    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
     MatIconModule,
     HttpClientModule


  ]
})
export class SalesInvoiceModule { }
