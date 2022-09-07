import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RoomsTaskeenComponent } from './RoomsTaskeen/RoomsTaskeen.component';
import { RoomsTaskeen_createComponent } from './RoomsTaskeen_create/RoomsTaskeen_create.component';
import { RoomsTaskeen_deleteComponent } from './RoomsTaskeen_delete/RoomsTaskeen_delete.component';
import { RoomsTaskeen_editComponent } from './RoomsTaskeen_edit/RoomsTaskeen_edit.component';
import { RoomsTaskeen_printComponent } from './RoomsTaskeen_print/RoomsTaskeen_print.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'RoomsTaskeen',
        component: RoomsTaskeenComponent,
      },
      {
        path: 'RoomsTaskeen-create',
        component: RoomsTaskeen_createComponent,
      },
      {
        path: 'RoomsTaskeen-edit/:id',
        component: RoomsTaskeen_editComponent,
      },
      {
        path: 'RoomsTaskeen-print',
        component: RoomsTaskeen_printComponent,
      },
      {
        path: 'RoomsTaskeen-delete/:id',
        component:RoomsTaskeen_deleteComponent,
      },

    ]
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})

export class RoomsTaskeenRoutes {}

