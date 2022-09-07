import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TranslateModule } from '@ngx-translate/core';

import { StoresComponent } from './stores/stores.component';
import { PrintStoreComponent } from './print-store/print-store.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { DeleteStoreComponent } from './delete-store/delete-store.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'stores',
        component: StoresComponent,
      },
      {
        path: 'create-store',
        component: CreateStoreComponent,
      },
      {
        path: 'edit-store/:id',
        component: EditStoreComponent,
      },

      {
        path: 'delete-store/:id',
        component: DeleteStoreComponent,
      },
      {
        path: 'print-store',
        component: PrintStoreComponent,
      },



    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class StoreRoutingModule { }















/////////////////////////



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class DepartmentsRoutingModule { }
