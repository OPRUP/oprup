import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSalaryObjectComponent } from './create-salary-object/create-salary-object.component';
import { DeleteSalaryObjectComponent } from './delete-salary-object/delete-salary-object.component';
import { EditSalaryObjectComponent } from './edit-salary-object/edit-salary-object.component';
import { SalaryObjectsComponent } from './salary-objects/salary-objects.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'salary-objects',
        component: SalaryObjectsComponent,
      },
      {
        path: 'create-salary-object',
        component: CreateSalaryObjectComponent,
      },
      {
        path: 'edit-salary-object/:id',
        component: EditSalaryObjectComponent,
      },
      {
        path: 'delete-salary-object/:id',
        component: DeleteSalaryObjectComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class SalaryObjectsRoutingModule { }
