import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TransportationComponent } from './Transportation/Transportation.component';
import { Transportation_createComponent } from './Transportation_create/Transportation_create.component';
import { Transportation_deleteComponent } from './Transportation_delete/Transportation_delete.component';
import { Transportation_editComponent } from './Transportation_edit/Transportation_edit.component';
import { Transportation_printComponent } from './Transportation_print/Transportation_print.component';

const routes: Routes = [
  {  path: '',
  children: [
    {
      path: 'Transportation',
      component: TransportationComponent,
    },
    {
      path: 'Transportation-create',
      component: Transportation_createComponent,
    },
    {
      path: 'Transportation-edit/:id',
      component: Transportation_editComponent,
    },
    {
      path: 'Transportation-print',
      component: Transportation_printComponent,
    },
    {
      path: 'Transportation-delete/:id',
      component:Transportation_deleteComponent,
    },

  ]
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})

export class TransportationRoutes {}


