import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVisaComponent } from './create-visa/create-visa.component';
import { DeleteVisaComponent } from './delete-visa/delete-visa.component';
import { ListVisaComponent } from './list-visa/list-visa.component';
import { PrintVisaComponent } from './print-visa/print-visa.component';
import { UpdateVisaComponent } from './update-visa/update-visa.component';

const routes: Routes = [
  {
  path: '',
  children: [
    {
      path: 'create-visa',
      component: CreateVisaComponent,
    },
    {
      path: 'visa',
      component: ListVisaComponent,
    },
    {
      path: 'edit-visa/:id',
      component: UpdateVisaComponent,
    },
    {
      path: 'delete-visa/:id',
      component: DeleteVisaComponent,
    },
    {
      path: 'print-visa',
      component: PrintVisaComponent,
    },
  ]
},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaRoutingModule { }
