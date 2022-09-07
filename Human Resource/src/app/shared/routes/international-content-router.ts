import { Routes } from '@angular/router';

export const international_content: Routes = [

  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

//   {
//     path: 'dashboard-op',
//     loadChildren: () =>
//       import('../../dashboard-operation/dashboard-operation.module').then(
//         (m) => m.DashboardOperationModule
//       ),
//   },

  {
    path: 'international',
    loadChildren: () =>
      import('../../dashboard-international/dashboard-international.module').then((m) => m.DashboardInternationalModule),
  },
  {
    path: 'job',
    loadChildren: () => import('../../job/job.module').then(m => m.JobModule),
  },
  {
    path: 'recruitmentcompany',
  loadChildren: () => import('../../recruitment-company/recruitment-company.module').then(m => m.RecruitmentCompanyModule),
  },
  {
    path: 'complaint',
  loadChildren: () => import('../../complaint/complaint.module').then(m => m.ComplaintModule),
  },
  {
    path: 'visa',
  loadChildren: () => import('../../visa/visa.module').then(m => m.VisaModule),
  },
];
