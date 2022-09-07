import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreatePaymentPermissionComponent } from './create-payment-permission/create-payment-permission.component';
import { DeletePaymentPermissionComponent } from './delete-payment-permission/delete-payment-permission.component';
import { EditPaymentPermissionComponent } from './edit-payment-permission/edit-payment-permission.component';
import { PaymentPermissionComponent } from './payment-permission/payment-permission.component';
import { PrintPaymentPermissionComponent } from './print-payment-permission/print-payment-permission.component';

const routes: Routes = [
  {
    path: '',
    children: [
      
     

      {
        path: 'create-paymentPermission',
        component: CreatePaymentPermissionComponent,
      },
      {
        path: 'edit-paymentPermission/:id',
        component: EditPaymentPermissionComponent,
      },

      {
        path: 'delete-paymentPermission/:id',
        component: DeletePaymentPermissionComponent,
      },
      {
        path: 'paymentPermission',
        component: PaymentPermissionComponent,
      },
      {
        path: 'print-paymentPermission/:id',
        component: PrintPaymentPermissionComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class PaymentPermissionRoutingModule { }
