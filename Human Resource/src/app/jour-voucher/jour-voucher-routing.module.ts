import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateJourVoucherComponent } from './create-jour-voucher/create-jour-voucher.component';
import { DeleteJourVoucherComponent } from './delete-jour-voucher/delete-jour-voucher.component';
import { EditJourVoucherComponent } from './edit-jour-voucher/edit-jour-voucher.component';
import { JourVoucherComponent } from './jour-voucher/jour-voucher.component';
import { PrintJourVoucherComponent } from './print-jour-voucher/print-jour-voucher.component';

const routes: Routes = [
  {
    path: '',
    children: [
{
       path: 'create-jour-voucher',
       component: CreateJourVoucherComponent,
},
{
        path: 'jour-voucher',
        component: JourVoucherComponent,
},
{
        path:'print-jour-voucher/:id',
        component: PrintJourVoucherComponent,
},
{
        path:'edit-jour-voucher/:id',
        component: EditJourVoucherComponent,
},
{
       path:'delete-jour-voucher/:id',
       component: DeleteJourVoucherComponent,
}


    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class JourVoucherRoutingModule { }
