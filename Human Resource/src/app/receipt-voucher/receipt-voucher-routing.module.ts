import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReceiptVoucherComponent } from './create-receipt-voucher/create-receipt-voucher.component';
import { DeleteReceiptVoucherComponent } from './delete-receipt-voucher/delete-receipt-voucher.component';
import { EditReceiptVoucherComponent } from './edit-receipt-voucher/edit-receipt-voucher.component';
import { ListReceiptVoucherComponent } from './list-receipt-voucher/list-receipt-voucher.component';
import { PrintReceiptVoucherComponent } from './print-receipt-voucher/print-receipt-voucher.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'receipt-voucher',
      component: ListReceiptVoucherComponent,
    },
    
    {
      path: 'create-receipt-voucher',
      component: CreateReceiptVoucherComponent,
    },
    {
      path: 'edit-receipt-voucher/:id',
      component: EditReceiptVoucherComponent,
    },
    {
      path: 'delete-receipt-voucher/:id',
      component: DeleteReceiptVoucherComponent,
    },
    {
      path: 'print-receipt-voucher/:id',
      component: PrintReceiptVoucherComponent,
    },

  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptVoucherRoutingModule {


}
