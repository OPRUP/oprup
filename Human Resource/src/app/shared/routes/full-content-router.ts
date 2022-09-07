import { Routes } from '@angular/router';

export const full_content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'dashboard-hr',
    loadChildren: () =>
      import('../../dashboard-hr/dashboard-hr.module').then(
        (m) => m.DashboardHrModule
      ),
  },
  {
    path: 'stores',
    loadChildren: () =>
      import('../../store/store.module').then((m) => m.StoreModule),
  },

  {
    path: 'top-managements',
    loadChildren: () =>
      import('../../top-managements/top-managements.module').then(
        (m) => m.TopManagementsModule
      ),
  },

  {
    path: 'companies',
    loadChildren: () =>
      import('../../companies/companies.module').then((m) => m.CompaniesModule),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('../../employees/employees.module').then((m) => m.EmployeesModule),
  },


  {
    path: 'salary-objects',
    loadChildren: () =>
      import('../../salary-objects/salary-objects.module').then(
        (m) => m.SalaryObjectsModule
      ),
  },
  {
    path: 'employee-salary-objects',
    loadChildren: () =>
      import(
        '../../employee-salary-objects/employee-salary-objects.module'
      ).then((m) => m.EmployeeSalaryObjectsModule),
  },
  {
    path: 'slips',
    loadChildren: () =>
      import('../../slips/slips.module').then((m) => m.SlipsModule),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('../../departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },

  {
    path: 'sections',
    loadChildren: () =>
      import('../../sections/sections.module').then((m) => m.SectionsModule),
  },
  {
    path: 'central-jobs',
    loadChildren: () =>
      import('../../central-jobs/central-jobs.module').then(
        (m) => m.CentralJobsModule
      ),
  },
  // {
  //   path: 'job-titles',
  //   loadChildren: () =>
  //     import('../../job-titles/job-titles.module').then(
  //       (m) => m.JobTitlesModule
  //     ),
  // },
  {
    path: 'qualifications',
    loadChildren: () =>
      import('../../qualifications/qualifications.module').then(
        (m) => m.QualificationsModule
      ),
  },
  {
    path: 'majors',
    loadChildren: () =>
      import('../../majors/majors.module').then((m) => m.MajorsModule),
  },
  {
    path: 'universities',
    loadChildren: () =>
      import('../../universities/universities.module').then(
        (m) => m.UniversitiesModule
      ),
  },
  {
    path: 'banks',
    loadChildren: () =>
      import('../../banks/banks.module').then((m) => m.BanksModule),
  },
  {
    path: 'insurance-companies',
    loadChildren: () =>
      import('../../insurance-companies/insurance-companies.module').then(
        (m) => m.InsuranceCompaniesModule
      ),
  },



  {
    path: 'sheets',
    loadChildren: () =>
      import('../../sheet/sheet.module').then((m) => m.SheetModule),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('../../notification/notification.module').then(
        (m) => m.NotificationModule
      ),
  },

  {
    path: 'report',
    loadChildren: () =>
      import('../../report/report.module').then((m) => m.ReportModule),
  },





  // {
  //   path: 'working-times',
  //   loadChildren: () => import('../../working-times/working-times.module').then(m => m.WorkingTimesModule),
  // },
  // {
  //   path: 'Countries',
  //   loadChildren: () => import('../../countries/countries/').then(m => m.CountriesModule),
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('../../settings/settings.module').then(m => m.SettingsModule),
  // },
  // {
  //   path: 'apps',
  //   loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule),
  // },
  // {
  //   path: 'apps/chat',
  //   loadChildren: () => import('../../components/apps/chat/chat.module').then(m => m.ChatModule)
  // },
  // {
  //   path: 'apps/contact',
  //   loadChildren: () => import('../../components/apps/contact/contact.module').then(m => m.ContactModule)
  // },
  // {
  //   path: 'apps/filemanager',
  //   loadChildren: () => import('../../components/apps/filemanager/filemanager.module').then(m => m.FilemanagerModule)
  // },
  // {
  //   path: 'apps/todolist',
  //   loadChildren: () => import('../../components/apps/todolist/todolist.module').then(m => m.TodolistModule)
  // },
  // {
  //   path: 'apps/userlist',
  //   loadChildren: () => import('../../components/apps/userlist/userlist.module').then(m => m.UserlistModule)
  // },
  // {
  //   path: 'widgets',
  //   loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormElementModule)
  // },
  // {
  //   path: 'charts',
  //   loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartssModule),
  // },
  // {
  //   path: 'maps',
  //   loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule),
  // },
  // {
  //   path: 'tables',
  //   loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule),
  // },
  // {
  //   path: 'elements',
  //   loadChildren: () => import('../../components//elements/elements.module').then(m => m.ElementsModule)
  // },
  // {
  //   path: 'icons',
  //   loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
  // },
  // {
  //   path: 'pages',
  //   loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
  // },
  // {
  //   path: 'pages/profile',
  //   loadChildren: () => import('../../components/pages/profile/profile.module').then(m => m.ProfileModule)
  // },
  // {
  //   path: 'pages/email',
  //   loadChildren: () => import('../../components/pages/email/email.module').then(m => m.EmailModule)
  // },
  // {
  //   path: 'pages/pricing',
  //   loadChildren: () => import('../../components/pages/pricing/pricing.module').then(m => m.PricingModule)
  // },
  // {
  //   path: 'pages/invoice',
  //   loadChildren: () => import('../../components/pages/invoice/invoice.module').then(m => m.InvoiceModule)
  // },
  // {
  //   path: 'pages/blog',
  //   loadChildren: () => import('../../components/pages/blog/blog.module').then(m => m.BlogModule)
  // },
  // {
  //   path: 'ecommerce',
  //   loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.EcommerceModule),
  // },
  // {
  //   path: 'basic-elements',
  //   loadChildren: () => import('../../components/basci-elements/basic-elements.module').then(m => m.BasciElementsModule)
  // },
  // {
  //   path: 'firebase',
  //   loadChildren: () => import('../../components/firebase/firebase.module').then(m => m.FirebaseModule)
  // }
];
