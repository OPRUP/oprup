import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSlipComponent } from './create-slip/create-slip.component';
import { DeleteSlipComponent } from './delete-slip/delete-slip.component';
import { EditSlipComponent } from './edit-slip/edit-slip.component';
import { ListSlipsComponent } from './list-slips/list-slips.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { PaymentComponent } from './payment/payment.component';
import { SlipsComponent } from './slips/slips.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'slips',
        component: SlipsComponent,
      },
      {
        path: 'create-slip/:eid/:cid',
        component: CreateSlipComponent,
      },
      {
        path: 'edit-slip/:id',
        component: EditSlipComponent,
      },
      {
        path: 'delete-slip/:id',
        component: DeleteSlipComponent,
      },
      {
        path: 'list-slips/:id',
        component: ListSlipsComponent,
      },
      {
        path: 'payment/:id',
        component: PaymentComponent,
      },
      {
        path: 'pay-slip/:id/:cid',
        component: PaySlipComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class SlipsRoutingModule { }
