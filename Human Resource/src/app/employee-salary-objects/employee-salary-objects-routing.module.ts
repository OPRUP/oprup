import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateEmployeeSalaryObjectComponent } from './create-employee-salary-object/create-employee-salary-object.component';
import { DeleteEmployeeSalaryObjectComponent } from './delete-employee-salary-object/delete-employee-salary-object.component';
import { EditEmployeeSalaryObjectComponent } from './edit-employee-salary-object/edit-employee-salary-object.component';
import { EmployeeSalaryObjectsComponent } from './employee-salary-objects/employee-salary-objects.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'employee-salary-objects',
        component: EmployeeSalaryObjectsComponent,
      },
      {
        path: 'create-employee-salary-object/:id',
        component: CreateEmployeeSalaryObjectComponent,
      },
      {
        path: 'edit-employee-salary-object/:id',
        component: EditEmployeeSalaryObjectComponent,
      },
      {
        path: 'delete-employee-salary-object/:id',
        component: DeleteEmployeeSalaryObjectComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class EmployeeSalaryObjectsRoutingModule { }
