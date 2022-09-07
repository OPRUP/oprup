import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PrintInvoiceComponent } from './print-invoice/print-invoice.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'invoices',
        component: InvoicesComponent,
      },
      {
        path: 'create-invoice',
        component: CreateInvoiceComponent,
      },
      {
        // path: 'print-invoice/:customerName/:taxNumber/:invoiceDate/:price/:tax',
        path: 'print-invoice/:id',
        component: PrintInvoiceComponent,
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class OprupInvoicesRoutingModule { }
