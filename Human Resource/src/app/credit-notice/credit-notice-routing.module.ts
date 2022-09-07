import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateCreditNoticeComponent } from './create-credit-notice/create-credit-notice.component';
import { CreditNoticeComponent } from './credit-notice/credit-notice.component';
import { DeleteCreditNoticeComponent } from './delete-credit-notice/delete-credit-notice.component';
import { EditCreditNoticeComponent } from './edit-credit-notice/edit-credit-notice.component';
import { PrintCreditNoticeComponent } from './print-credit-notice/print-credit-notice.component';

const routes: Routes = [


  {
    path: '',
    children: [
      {
        path: 'creditNotice',
        component:CreditNoticeComponent,
      },
      {
        path: 'create-creditNotice',
        component:CreateCreditNoticeComponent,
      },
      {
        path: 'edit-creditNotice/:id',
        component:EditCreditNoticeComponent,
      },
      {
        path: 'delete-creditNotice/:id',
        component:DeleteCreditNoticeComponent,
      },   {
        path: 'print-creditNotice/:id',
        component:PrintCreditNoticeComponent,
      },
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class CreditNoticeRoutingModule { }
