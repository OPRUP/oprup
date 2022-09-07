import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateDebtorNoticeComponent } from './create-debtor-notice/create-debtor-notice.component';
import { DebtorNoticeComponent } from './debtor-notice/debtor-notice.component';
import { DeleteDebtorNoticeComponent } from './delete-debtor-notice/delete-debtor-notice.component';
import { EditDebtorNoticeComponent } from './edit-debtor-notice/edit-debtor-notice.component';
import { PrintDebtorNoticeComponent } from './print-debtor-notice/print-debtor-notice.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'debtorNotice',
        component:DebtorNoticeComponent,
      },
      {
        path: 'create-debtorNotice',
        component:CreateDebtorNoticeComponent,
      },
      {
        path: 'edit-debtorNotice/:id',
        component:EditDebtorNoticeComponent,
      },
      {
        path: 'delete-debtorNotice/:id',
        component:DeleteDebtorNoticeComponent,
      },   {
        path: 'print-debtorNotice/:id',
        component:PrintDebtorNoticeComponent,
      },
    ]
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class DebtorNoticeRoutingModule { }
