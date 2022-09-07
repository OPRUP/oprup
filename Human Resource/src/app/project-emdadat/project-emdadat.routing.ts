import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';

import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectPrintComponent } from './project-print/project-print.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'project-view',
        component: ProjectViewComponent,
      },
      {
        path: 'project-create',
        component: ProjectCreateComponent,
      },
      {
        path: 'project-edit/:id',
        component: ProjectEditComponent,
      },
      {
        path: 'project-print',
        component: ProjectPrintComponent,
      },
      {
        path: 'project-delete/:id',
        component:ProjectDeleteComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class ProjectEmdadatRoutes {}
// export const ProjectEmdadatRoutes = RouterModule.forChild(routes);
