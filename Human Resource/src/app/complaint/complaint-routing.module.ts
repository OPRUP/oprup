import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ComplaintCreateComponent } from './complaint-create/complaint-create.component';
import { ComplaintDeleteComponent } from './complaint-delete/complaint-delete.component';
import { ComplaintEditComponent } from './complaint-edit/complaint-edit.component';
import { ComplaintPrintComponent } from './complaint-print/complaint-print.component';
import { ComplaintComponent } from './complaint/complaint.component';

const routes: Routes = [
  {
  path: '',
  children: [
    {
      path: 'complaint',
      component: ComplaintComponent,
    },
    {
      path: 'complaint-create',
      component: ComplaintCreateComponent,
    },
    {
      path: 'complaint-edit/:id',
      component: ComplaintEditComponent,
    },
    {
      path: 'complaint-print',
      component: ComplaintPrintComponent,
    },
    {
      path: 'complaint-delete/:id',
      component:ComplaintDeleteComponent,
    },

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class ComplaintRoutingModule { }
