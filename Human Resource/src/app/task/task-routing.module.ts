import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EmployeeTaskComponent } from './employee-task/employee-task.component';
import { PrintTaskComponent } from './print-task/print-task.component';

import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'task',
        component: TasksComponent,
      },
      {
        path: 'employeetask',
        component: EmployeeTaskComponent,
      },
      {
        path: 'create-task',
        component: CreateTaskComponent,
      },
      {
        path: 'edit-task/:id',
        component: EditTaskComponent,
      },
      {
        path: 'delete-task/:id',
        component: DeleteTaskComponent,
      }, {
        path: 'print-task',
        component:PrintTaskComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class TaskRoutingModule { }
