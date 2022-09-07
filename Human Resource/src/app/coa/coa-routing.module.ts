import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CoaComponent } from './coa/coa.component';
import { CreateCoaComponent } from './create-coa/create-coa.component';
import { EditCoaComponent } from './edit-coa/edit-coa.component';
import { PrintCoaComponent } from './print-coa/print-coa.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'coa',
        component: CoaComponent,
      },
      {
        path: 'create-coa',
        component: CreateCoaComponent,
      },
      {
        path: 'edit-coa/:id',
        component: EditCoaComponent,
      },
      {
        path: 'print-coa/:id',
        component: PrintCoaComponent,
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class CoaRoutingModule { }
