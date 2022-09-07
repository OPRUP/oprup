import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AdvanceRequestComponent } from './advance-request/advance-request.component';
import { AdvancesPrintComponent } from './advances-print/advances-print.component';
import { AdvancesComponent } from './advances/advances.component';
import { ApproveAdvanceComponent } from './approve-advance/approve-advance.component';
import { RejectAdvanceComponent } from './reject-advance/reject-advance.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'advance-request',
        component: AdvanceRequestComponent
      },
      {
        path: 'advances',
        component: AdvancesComponent
      },
      {
        path: 'approve-advance/:id',
        component: ApproveAdvanceComponent
      },
      {
        path: 'reject-advance/:id',
        component: RejectAdvanceComponent
      },
      {
        path: 'advance-print',
        component: AdvancesPrintComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class AdvancesRoutingModule { }
