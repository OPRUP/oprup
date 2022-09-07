import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RejectAdvanceComponent } from '../advances/reject-advance/reject-advance.component';
import { ApproveAtmRequestComponent } from './approve-atm-request/approve-atm-request.component';
import { AtmRequestsComponent } from './atm-requests/atm-requests.component';
import { CreateAtmRequestComponent } from './create-atm-request/create-atm-request.component';
import { PrintAtmRequestComponent } from './print-atm-request/print-atm-request.component';
import { RejectAtmRequestComponent } from './reject-atm-request/reject-atm-request.component';

const routes: Routes = [

  
  {
    path: '',
      children: [
        {
          path: 'atm-requests',
          component: AtmRequestsComponent,
        },
        {
          path: 'create-atm-request',
          component: CreateAtmRequestComponent
        },
      
        {
          path: 'reject-atm-request/:id',
          component: RejectAtmRequestComponent
        },
        {
          path: 'approve-atm-request/:id',
          component:ApproveAtmRequestComponent
        },
        {
          path:'print-atm-request',
          component : PrintAtmRequestComponent
  
        },
       ]
       },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class AtmRequestRoutingModule { }

