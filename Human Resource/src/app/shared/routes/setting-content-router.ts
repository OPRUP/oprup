import { Routes } from '@angular/router';

export const setting_content: Routes = [
 
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
    path: 'setting',
    loadChildren: () =>
      import('../../dashboard-setting/dashboard-setting.module').then((m) => m.DashboardSettingModule),
  },
  {
    path: 'task',
    loadChildren: () => import('../../task/task.module').then(m => m.TaskModule),
  },
  
  
];
