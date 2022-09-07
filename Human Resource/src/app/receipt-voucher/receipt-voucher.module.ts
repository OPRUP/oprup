import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptVoucherRoutingModule } from './receipt-voucher-routing.module';
import { CreateReceiptVoucherComponent } from './create-receipt-voucher/create-receipt-voucher.component';
import { DeleteReceiptVoucherComponent } from './delete-receipt-voucher/delete-receipt-voucher.component';
import { ListReceiptVoucherComponent } from './list-receipt-voucher/list-receipt-voucher.component';
import { EditReceiptVoucherComponent } from './edit-receipt-voucher/edit-receipt-voucher.component';
import { PrintReceiptVoucherComponent } from './print-receipt-voucher/print-receipt-voucher.component';
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
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CreateReceiptVoucherComponent,
    DeleteReceiptVoucherComponent,
    ListReceiptVoucherComponent,
    EditReceiptVoucherComponent,
    PrintReceiptVoucherComponent,

  ],
  imports: [
    CommonModule,
    ReceiptVoucherRoutingModule,
    NgbModule,
    HttpClientModule,
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
    TranslateModule
    
  ]
})
export class ReceiptVoucherModule { }
