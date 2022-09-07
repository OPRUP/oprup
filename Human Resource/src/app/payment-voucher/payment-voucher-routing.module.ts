import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreatePaymentVoucherComponent } from './create-payment-voucher/create-payment-voucher.component';
import { DeletePaymentVoucherComponent } from './delete-payment-voucher/delete-payment-voucher.component';
import { EditPaymentVoucherComponent } from './edit-payment-voucher/edit-payment-voucher.component';
// import { EditPaymentVoucherComponent } from './edit-payment-voucher/edit-payment-voucher.component';
import { PaymentVouchersComponent } from './payment-vouchers/payment-vouchers.component';
import { PrintPaymentVoucherComponent } from './print-payment-voucher/print-payment-voucher.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'paymentVouchers',
        component: PaymentVouchersComponent,
      },
     

      {
        path: 'create-paymentVoucher',
        component: CreatePaymentVoucherComponent,
      },
      {
        path: 'edit-paymentVoucher/:id',
        component: EditPaymentVoucherComponent,
      },

      {
        path: 'delete-paymentVoucher/:id',
        component: DeletePaymentVoucherComponent,
      },
      {
        path: 'print-paymentVoucher/:id',
        component: PrintPaymentVoucherComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class PaymentVoucherRoutingModule { }
