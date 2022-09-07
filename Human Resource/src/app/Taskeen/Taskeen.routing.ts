import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TaskeenComponent } from './Taskeen/Taskeen.component';
import { Taskeen_createComponent } from './Taskeen_create/Taskeen_create.component';
import { Taskeen_DeleteComponent } from './Taskeen_Delete/Taskeen_Delete.component';
import { Taskeen_EditComponent } from './Taskeen_Edit/Taskeen_Edit.component';
import { Taskeen_PrintComponent } from './Taskeen_Print/Taskeen_Print.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Taskeen',
        component: TaskeenComponent,
      },
      {
        path: 'Taskeen-create',
        component: Taskeen_createComponent,
      },
      {
        path: 'Taskeen-edit/:id',
        component: Taskeen_EditComponent,
      },
      {
        path: 'Taskeen-print',
        component: Taskeen_PrintComponent,
      },
      {
        path: 'Taskeen-delete/:id',
        component:Taskeen_DeleteComponent,
      },

    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})

export class TaskeenRoutes {}
