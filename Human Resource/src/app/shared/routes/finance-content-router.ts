import { Routes } from '@angular/router';

export const finance_content: Routes = [
  {
    path: 'finance',
    loadChildren: () =>
      import('../../dashboard-finance/dashboard-finance.module').then((m) => m.DashboardFinanceModule),
  },
  {
    path: 'coa',
    loadChildren: () => import('../../coa/coa.module').then(m => m.CoaModule),
  },
  {
    path: 'cost-center',
    loadChildren: () => import('../../cost-center/cost-center.module').then(m => m.CostCenterModule),
  },

  {
    path: 'acc-rep',
    loadChildren: () => import('../../account-report/account-report.module').then(m => m.AccountReportModule),
  },



];
