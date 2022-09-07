import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Printer } from 'angular-feather/icons';
import { CreateRenewingResidenceComponent } from './create-renewing-residence/create-renewing-residence.component';
import { DeleteRenewingResidenceComponent } from './delete-renewing-residence/delete-renewing-residence.component';
import { EditRenewingResidenceComponent } from './edit-renewing-residence/edit-renewing-residence.component';
import { PrintRenewingResidenceComponent } from './print-renewing-residence/print-renewing-residence.component';
import { RenewingResidenceComponent } from './renewing-residence/renewing-residence.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'renewingresidence',
        component:RenewingResidenceComponent,
      },
      {
        path: 'create-renewingresidence',
        component: CreateRenewingResidenceComponent,
      },
      {
        path: 'edit-renewingresidence/:id',
        component: EditRenewingResidenceComponent,
      },
      {
        path: 'delete-renewingresidence/:id',
        component:DeleteRenewingResidenceComponent,
      },   {
        path: 'print-renewingresidence',
        component:PrintRenewingResidenceComponent,
      },
    ]
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class RenewingResidenceRoutingModule { }
