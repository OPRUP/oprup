import { Routes } from '@angular/router';

export const sales_content: Routes = [
  {
    path: 'sales',
    loadChildren: () =>
      import('../../dashboard-sales/dashboard-sales.module').then((m) => m.DashboardSalesModule),
  },
  {
    path: 'view-quotation',
    loadChildren: () => import('../../quotation/quotation.module').then(m => m.QuotationModule),
  },

  {
    path: 'customer',
    loadChildren: () =>
      import('../../customer/customer.module').then((m) => m.CustomerModule),
  },


  {
    path: 'items',
    loadChildren: () =>
      import('../../items/items.module').then((m) => m.ItemsModule),
  },
  {
    path: 'Contract',
    loadChildren: () =>
      import('../../contract/contract.module').then((m) => m.ContractModule),
  },
  {
    path: 'Contract-Extensions',
    loadChildren: () =>
      import('../../contract-extension/contract-extension.module').then((m) => m.ContractExtensionModule),
  },

    {
    path: 'oprup-invoices',
    loadChildren: () => import('../../oprup-invoices/oprup-invoices.module').then(m => m.OprupInvoicesModule),

  },
 


];
