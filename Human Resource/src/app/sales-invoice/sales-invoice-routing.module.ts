import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSalesInvoiceComponent } from './create-sales-invoice/create-sales-invoice.component';
import { DeleteSalesInvoiceComponent } from './delete-sales-invoice/delete-sales-invoice.component';
import { EditSalesInvoiceComponent } from './edit-sales-invoice/edit-sales-invoice.component';
import { PrintSalesinvoiceComponent } from './print-salesinvoice/print-salesinvoice.component';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create-sales-invoice',
        component: CreateSalesInvoiceComponent,
      },
      {
        path: 'edit-sales-invoice/:id',
        component:EditSalesInvoiceComponent,
      },
      {
        path: 'print-sales-invoice/:id',
        component:PrintSalesinvoiceComponent,
      }, {
        path: 'sales-invoice',
        component:SalesInvoiceComponent,
      },
      {
        path: 'delete-sales-invoice/:id',
        component:DeleteSalesInvoiceComponent,
      },

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class SalesInvoiceRoutingModule { }
