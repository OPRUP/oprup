import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateJobComponent } from './create-job/create-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { JobComponent } from './job/job.component';
import { PrintJobComponent } from './print-job/print-job.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'job',
        component: JobComponent,
      },
      {
      path: 'create-job',
        component: CreateJobComponent,
      },
      {
        path: 'edit-job/:id',
        component:EditJobComponent,
      },
      {
        path:'delete-job/:id',
        component: DeleteJobComponent,
      },   {
        path: 'print-job',
        component:PrintJobComponent,
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class JobRoutingModule { }
