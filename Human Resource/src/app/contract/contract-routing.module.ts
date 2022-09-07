import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContractComponent } from './contract/contract.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { DeleteContractComponent } from './delete-contract/delete-contract.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { PrintContractComponent } from './print-contract/print-contract.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Contract',
        component:ContractComponent,
       },
       {
        path: 'create-Contract',
        component:CreateContractComponent,
      },
      {
        path: 'edit-Contract/:id',
        component:EditContractComponent,
      },
      {
        path: 'delete-Contract/:id',
        component:DeleteContractComponent,
      },   {
        path: 'print-Contract/:id',
        component:PrintContractComponent,
      },
    ]

    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class ContractRoutingModule { }
