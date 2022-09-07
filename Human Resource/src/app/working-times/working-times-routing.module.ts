import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateWorkingTimeComponent } from './create-working-time/create-working-time.component';
import { WorkingTimesComponent } from './working-times/working-times.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'working-times',
        component: WorkingTimesComponent,
      },
      {
        path: 'create-working-time',
        component: CreateWorkingTimeComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class WorkingTimesRoutingModule { }
