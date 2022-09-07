import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateEmployeeLeaveComponent } from './create-employee-leave/create-employee-leave.component';
import { DeleteEmployeeLeaveComponent } from './delete-employee-leave/delete-employee-leave.component';
import { EditEmployeeLeaveComponent } from './edit-employee-leave/edit-employee-leave.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'employee-leaves',
        component: EmployeeLeavesComponent,
      },
      {
        path: 'create-employee-leave',
        component: CreateEmployeeLeaveComponent,
      },
      {
        path: 'edit-employee-leave/:id',
        component: EditEmployeeLeaveComponent,
      },
      {
        path: 'delete-employee-leave/:id',
        component: DeleteEmployeeLeaveComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class EmployeeLeaveRoutingModule { }
