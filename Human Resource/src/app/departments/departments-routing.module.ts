import { PrintDepartmentComponent } from './print-department/print-department.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'departments',
        component: DepartmentsComponent,
      },
      {
        path: 'create-department',
        component: CreateDepartmentComponent,
      },
      {
        path: 'edit-department/:id',
        component: EditDepartmentComponent,
      },

      {
        path: 'delete-department/:id',
        component: DeleteDepartmentComponent,
      },
      {
        path: 'print-department',
        component: PrintDepartmentComponent,
      },



    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class DepartmentsRoutingModule { }
