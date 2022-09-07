import { PrintJobTitlesComponent } from './print-job-titles/print-job-titles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateJobTitleComponent } from './create-job-title/create-job-title.component';
import { DeleteJobTitleComponent } from './delete-job-title/delete-job-title.component';
import { EditJobTitleComponent } from './edit-job-title/edit-job-title.component';
import { JobTitlesComponent } from './job-titles/job-titles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'job-titles',
        component: JobTitlesComponent,
      },
      {
        path: 'create-job-title',
        component: CreateJobTitleComponent,
      },
      {
        path: 'edit-job-title/:id',
        component: EditJobTitleComponent,
      },
      {
        path: 'delete-job-title/:id',
        component: DeleteJobTitleComponent,
      },
      {
        path: 'print-job-title',
        component: PrintJobTitlesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class JobTitlesRoutingModule { }
