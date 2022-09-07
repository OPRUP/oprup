import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApproveFinalExitComponent } from './approve-final-exit/approve-final-exit.component';
import { FinalExitsComponent } from './final-exits/final-exits.component';
import { PrintFinalExitComponent } from './print-final-exit/print-final-exit.component';
import { RejectFinalExitComponent } from './reject-final-exit/reject-final-exit.component';
import { RequestFinalExitComponent } from './request-final-exit/request-final-exit.component';



const routes: Routes = [


  {
  path: '',
    children: [
      {
        path: 'final-exits',
        component: FinalExitsComponent,
      },
      {
        path: 'request-final-exit',
        component: RequestFinalExitComponent
      },
    
      {
        path: 'reject-final-exit/:id',
        component: RejectFinalExitComponent
      },
      {
        path: 'approve-final-exit/:id',
        component: ApproveFinalExitComponent
      },
      {
        path:'print-final-exit',
        component : PrintFinalExitComponent

      },
    ]
    },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class FinalExitRoutingModule { }
