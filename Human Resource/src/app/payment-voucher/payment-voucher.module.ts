import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentVoucherRoutingModule } from './payment-voucher-routing.module';
import { PaymentVouchersComponent } from './payment-vouchers/payment-vouchers.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CreatePaymentVoucherComponent } from './create-payment-voucher/create-payment-voucher.component';
import { EditPaymentVoucherComponent } from './edit-payment-voucher/edit-payment-voucher.component';
import { DeletePaymentVoucherComponent } from './delete-payment-voucher/delete-payment-voucher.component';
import { PrintPaymentVoucherComponent } from './print-payment-voucher/print-payment-voucher.component';


@NgModule({
  declarations: [
    PaymentVouchersComponent,
    CreatePaymentVoucherComponent,
    EditPaymentVoucherComponent,
    DeletePaymentVoucherComponent,
    PrintPaymentVoucherComponent
  ],
  imports: [
    CommonModule,
    PaymentVoucherRoutingModule,
    CommonModule,
     MatNativeDateModule,
     MatButtonModule, 
     ReactiveFormsModule,
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
     MatSelectModule,
  ]
})
export class PaymentVoucherModule { }
