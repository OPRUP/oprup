import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApproveVacationComponent } from './approve-vacation/approve-vacation.component';
import { CreateVacationComponent } from './create-vacation/create-vacation.component';
import { DeleteVacationComponent } from './delete-vacation/delete-vacation.component';
import { EditVacationComponent } from './edit-vacation/edit-vacation.component';
import { PrintVacationComponent } from './print-vacation/print-vacation.component';
import { RejectVacationComponent } from './reject-vacation/reject-vacation.component';
import { VacationsComponent } from './vacations/vacations.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vacations',
        component: VacationsComponent,
      },
      {
        path: 'create-vacation',
        component: CreateVacationComponent,
      },
      {
        path: 'edit-vacation/:id',
        component: EditVacationComponent,
      },
      {
        path: 'delete-vacation/:id',
        component: DeleteVacationComponent,
      },
      {
        path: 'approve-vacation/:id',
        component: ApproveVacationComponent,
       
      },
      {
        path: 'reject-vacation/:id',
        component: RejectVacationComponent,
       
      },
      {
        path: 'print-vacation',
        component: PrintVacationComponent,
       
      },
     

      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class VacationRoutingModule { }
