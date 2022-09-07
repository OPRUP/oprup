import { Routes } from '@angular/router';

export const report_content: Routes = [

  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'dashboard-rep',
    loadChildren: () =>
      import('../../dashboard-report/dashboard-report.module').then(
        (m) => m.DashboardReportModule
      ),
  },

 

  {
    path: 'report',
    loadChildren: () =>
      import('../../dashboard-report/dashboard-report.module').then((m) => m.DashboardReportModule),
  },
  {
    path: 'example',
    loadChildren: () => import('../../task/task.module').then(m => m.TaskModule),
  },




];
