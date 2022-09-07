import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaintenanceCreateComponent } from './Maintenance-create/Maintenance-create.component';
import { MaintenanceDeleteComponent } from './Maintenance-delete/Maintenance-delete.component';
import { MaintenanceEditComponent } from './Maintenance-edit/Maintenance-edit.component';
import { MaintenancePrintComponent } from './Maintenance-print/Maintenance-print.component';
import { MaintenanceComponent } from './Maintenance/Maintenance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Maintenance',
        component: MaintenanceComponent,
      },
      {
        path: 'Maintenance-create',
        component: MaintenanceCreateComponent,
      },
      {
        path: 'Maintenance-edit/:id',
        component: MaintenanceEditComponent,
      },
      {
        path: 'Maintenance-print',
        component: MaintenancePrintComponent,
      },
      {
        path: 'Maintenance-delete/:id',
        component:MaintenanceDeleteComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class MaintenanceRoutingModule { }
