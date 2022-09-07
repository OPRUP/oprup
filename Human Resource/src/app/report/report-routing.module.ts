import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReportComponent } from './report/report.component';

const routes: Routes = [


  {
    path: '',
    children: [
      {
        path: 'report',
        component: ReportComponent,
      },
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class ReportRoutingModule { }
