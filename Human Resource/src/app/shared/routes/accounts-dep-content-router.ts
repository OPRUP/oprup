import { Routes } from '@angular/router';

export const accounts_dep_content: Routes = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('../../dashboard-accounts/dashboard-accounts.module').then((m) => m.DashboardAccountsModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },


  {
    path: 'sales-invoice',
    loadChildren: () =>
      import('../../sales-invoice/sales-invoice.module').then((m) => m.SalesInvoiceModule),
  },
  {
    path: 'paymentPermission',
    loadChildren: () => import('../../payment-permission/payment-permission.module').then(m => m.PaymentPermissionModule),
  },


   {
    path: 'jour-voucher',
    loadChildren: () => import('../../jour-voucher/jour-voucher.module').then(m => m.JourVoucherModule),
  },
  {
    path: 'paymentVouchers',
    loadChildren: () => import('../../payment-voucher/payment-voucher.module').then(m => m.PaymentVoucherModule),
  },
  {
    path: 'receipt-voucher',
    loadChildren: () => import('../../receipt-voucher/receipt-voucher.module').then(m => m.ReceiptVoucherModule),
  },
{
  path: 'creditNotice',
  loadChildren: () =>
    import('../../credit-notice/credit-notice.module').then((m) => m.CreditNoticeModule),
},
{
  path: 'debtorNotice',
  loadChildren: () =>
    import('../../debtor-notice/debtor-notice.module').then((m) => m.DebtorNoticeModule),
},
// {
//   path: 'report',
//   loadChildren: () =>
//     import('../../report/report.module').then((m) => m.ReportModule),
// },
{
  path: 'acc-rep',
  loadChildren: () => import('../../account-report/account-report.module').then(m => m.AccountReportModule),
},
{
  path: 'trial',
  loadChildren: () => import('../../account-report/account-report.module').then(m => m.AccountReportModule),
},
{
  path: 'income',
  loadChildren: () => import('../../account-report/account-report.module').then(m => m.AccountReportModule),
},


];
