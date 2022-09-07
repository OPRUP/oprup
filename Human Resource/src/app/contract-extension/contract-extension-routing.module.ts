import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExtensionComponent } from './create-extension/create-extension.component';
import { DeleteExtensionComponent } from './delete-extension/delete-extension.component';
import { ExtensionsComponent } from './extensions/extensions.component';
import { PrintExtensionComponent } from './print-extension/print-extension.component';

const routes: Routes = [ {
  path: '',
  children: [
    {
      path: 'Extensions',
      component:ExtensionsComponent,
     },
     {
      path: 'create-Extension',
      component:CreateExtensionComponent,
    },
    {
      path: 'print-Extension/:id',
      component:PrintExtensionComponent,
    },
    {
      path: 'delete-Extension/:id',
      component:DeleteExtensionComponent,
    },
    // {
    //   path: 'edit-Contract/:id',
    //   component:EditContractComponent,
    // },
    // {
    //   path: 'delete-Contract/:id',
    //   component:DeleteContractComponent,
    // },   {
    //   path: 'print-Contract/:id',
    //   component:PrintContractComponent,
    // },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractExtensionRoutingModule { }
