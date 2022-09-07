import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateEmployeeProjectsComponent } from './create-employee-projects/create-employee-projects.component';
import { DeleteEmployeeProjectsComponent } from './delete-employee-projects/delete-employee-projects.component';
import { EditEmployeeProjectComponent } from './edit-employee-project/edit-employee-project.component';
import { PrintEmployeeProjectsComponent } from './print-employee-projects/print-employee-projects.component';
import { ViewEmployeeProjectsComponent } from './view-employee-projects/view-employee-projects.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'employee-projects',
        component:ViewEmployeeProjectsComponent,
      },
      {
        path: 'create-employeeProjects',
        component:CreateEmployeeProjectsComponent,
      },
      {
        path: 'edit-employeeProjects/:id',
        component:EditEmployeeProjectComponent,
      },
      {
        path: 'delete-employeeProjects/:id',
        component:DeleteEmployeeProjectsComponent,
      },   {
        path: 'print-employeeProjects',
        component:PrintEmployeeProjectsComponent,
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class EmployeeProjectsRoutingModule { }
