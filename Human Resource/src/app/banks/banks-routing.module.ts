import { PrintBanksComponent } from './print-banks/print-banks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BanksComponent } from './banks/banks.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { DeleteBankComponent } from './delete-bank/delete-bank.component';
import { EditBankComponent } from './edit-bank/edit-bank.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'banks',
        component: BanksComponent,
      },
      {
        path: 'create-bank',
        component: CreateBankComponent,
      },
      {
        path: 'edit-bank/:id',
        component: EditBankComponent,
      },
      {
        path: 'delete-bank/:id',
        component: DeleteBankComponent,
      },   {
        path: 'print-bank',
        component:PrintBanksComponent,
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class BanksRoutingModule { }
