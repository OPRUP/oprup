
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApproveResidenceCardComponent } from './approve-residence-card/approve-residence-card.component';
import { CreateResidenceCardComponent } from './create-residence-card/create-residence-card.component';
import { PrintResidenceCardComponent } from './print-residence-card/print-residence-card.component';
import { RejectResidenceCardComponent } from './reject-residence-card/reject-residence-card.component';
import { ResidenceCardRequestsComponent } from './residence-card-requests/residence-card-requests.component';

const routes: Routes = [

  
  {
    path: '',
      children: [
        {
          path: 'residence-card-requests',
          component: ResidenceCardRequestsComponent,
        },
        {
          path: 'create-residence-card',
          component: CreateResidenceCardComponent
        },
      
        {
          path: 'reject-residence-card/:id',
          component: RejectResidenceCardComponent
        },
        {
          path: 'approve-residence-card/:id',
          component:ApproveResidenceCardComponent
        },
        {
          path:'print-residence-card',
          component : PrintResidenceCardComponent
  
        },
       ]
       },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class ResidenceCardRequestRoutingModule { }

