import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { KitchenTaskeenComponent } from './KitchenTaskeen/KitchenTaskeen.component';
import { KitchenTaskeen_createComponent } from './KitchenTaskeen_create/KitchenTaskeen_create.component';
import { KitchenTaskeen_deleteComponent } from './KitchenTaskeen_delete/KitchenTaskeen_delete.component';
import { KitchenTaskeen_editComponent } from './KitchenTaskeen_edit/KitchenTaskeen_edit.component';
import { KitchenTaskeen_printComponent } from './KitchenTaskeen_print/KitchenTaskeen_print.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'KitchenTaskeen',
        component: KitchenTaskeenComponent,
      },
      {
        path: 'KitchenTaskeen_create',
        component: KitchenTaskeen_createComponent,
      },
      {
        path: 'KitchenTaskeen_edit/:id',
        component: KitchenTaskeen_editComponent,
      },
      {
        path: 'KitchenTaskeen_print',
        component: KitchenTaskeen_printComponent,
      },
      {
        path: 'KitchenTaskeen_delete/:id',
        component:KitchenTaskeen_deleteComponent,
      },

    ]
   },
];

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})

export class KitchenTaskeenRoutes {}
