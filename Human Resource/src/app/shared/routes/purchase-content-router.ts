import { Routes } from '@angular/router';

export const purchase_content: Routes = [
  {
    path: 'purchase',
    loadChildren: () =>
      import('../../dashboard-purchase/dashboard-purchase.module').then((m) => m.DashboardPurchaseModule),
  },
  // {
  //   path: 'qutation',
  //   loadChildren: () => import('../../task/task.module').then(m => m.TaskModule),
  // },
  {
    path: 'vendor',
    loadChildren: () =>
      import('../../vendor/vendor.module').then((m) => m.VendorModule),
  },

  {
    path: 'purchasing',
    loadChildren: () => import('../../purchasing/purchasing.module').then(m => m.PurchasingModule),
  },

];
