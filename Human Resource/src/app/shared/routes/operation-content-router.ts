import { Routes } from '@angular/router';

export const operation_content: Routes = [



  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'dashboard-op',
    loadChildren: () =>
      import('../../dashboard-operation/dashboard-operation.module').then(
        (m) => m.DashboardOperationModule
      ),
  },


  {
    path: 'project-emdadat',
    loadChildren: () =>
      import('../../project-emdadat/project-emdadat.module').then(
        (m) => m.ProjectEmdadatModule
      ),
  },

  {
    path: 'vacation',
    loadChildren: () =>
      import('../../vacation/vacation.module').then((m) => m.VacationModule),
  },
  {
    path: 'employee-leave',
    loadChildren: () =>
      import('../../employee-leave/employee-leave.module').then(
        (m) => m.EmployeeLeaveModule
      ),
  },
  {
    path: 'advances',
    loadChildren: () =>
      import('../../advances/advances.module').then((m) => m.AdvancesModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('../../follow-up/follow-up.module').then((m) => m.FollowUpModule),
  },
  {
    path: 'task',
    loadChildren: () => import('../../task/task.module').then(m => m.TaskModule),
  },
  {
    path:'dashboard-follow',
    loadChildren:() => import('../../follow-up/follow-up.module').then(m=>m.FollowUpModule),
   },
   {
    path: 'Transportation',
    loadChildren: () => import('../../Transportation/Transportation.module').then(m => m.TransportationModule),
  },
  {
    path: 'Maintenance',
    loadChildren: () => import('../../maintenance/maintenance.module').then(m => m.MaintenanceModule),
  },
  {
    path: 'Taskeen',
    loadChildren: () => import('../../Taskeen/Taskeen.module').then(m => m.TaskeenModule),
  },
  {
    path: 'RoomsTaskeen',
    loadChildren: () => import('../../RoomsTaskeen/RoomsTaskeen.module').then(m => m.RoomsTaskeenModule),
  },
  {
    path: 'KitchenTaskeen',
    loadChildren: () => import('../../KitchenTaskeen/KitchenTaskeen.module').then(m => m.KitchenTaskeenModule),
  },

  {
    path: 'TravelingEmloyee',
    loadChildren: () => import('../../traveling-emloyee/traveling-emloyee.module').then(m => m.TravelingEmloyeeModule),
  },
  {
    path: 'finalExit',
    loadChildren: () => import('../../final-exit/final-exit.module').then(m => m.FinalExitModule),
  },
  {
    path: 'ATMRequest',
    loadChildren: () => import('../../atm-request/atm-request.module').then(m => m.AtmRequestModule),
  },
  {
    path: 'ResidenceCard',
    loadChildren: () => import('../../residence-card-request/residence-card-request.module').then(m => m.ResidenceCardRequestModule),
  },
  {
    path: 'employee-projects',
    loadChildren: () =>
      import('../../employee-projects/employee-projects.module').then(
        (m) => m.EmployeeProjectsModule
      ),
  },

  {
    path: 'skiprequest',
    loadChildren: () =>
      import('../../skiprequest/skiprequest.module').then(
        (m) => m.SkiprequestModule
      ),
  },
  {
    path: 'renewingresidence',
    loadChildren: () =>
      import('../../renewing-residence/renewing-residence.module').then(
        (m) => m.RenewingResidenceModule
      ),
  },
  {
    path: 'recruitmentcompany',
    loadChildren: () =>
      import('../../recruitment-company/recruitment-company.module').then(
        (m) => m.RecruitmentCompanyModule
      ),
  },
  {
    path: 'Survey',
    loadChildren: () =>
      import('../../survey/survey.module').then((m) => m.SurveyModule),
  },

  {
    path: 'customer-portal',
    loadChildren: () =>
      import('../../customer-portal/customer-portal.module').then(
        (m) => m.CustomerPortalModule
      ),
  },
  {
    path: 'site-visits',
    loadChildren: () =>
      import('../../site-visits/site-visits.module').then(
        (m) => m.SiteVisitsModule
      ),
  },

  {
    path: 'skip-request',
    loadChildren: () =>
      import('../../skiprequest/skiprequest.module').then(
        (m) => m.SkiprequestModule
      ),
  },



  {
    path: 'renewing-residence',
    loadChildren: () =>
      import('../../renewing-residence/renewing-residence.module').then(
        (m) => m.RenewingResidenceModule
      ),
  },






];
