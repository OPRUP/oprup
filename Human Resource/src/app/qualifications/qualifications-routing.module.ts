import { PrintQualificationsComponent } from './print-qualifications/print-qualifications.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateQualificationComponent } from './create-qualification/create-qualification.component';
import { DeleteQualificationComponent } from './delete-qualification/delete-qualification.component';
import { EditQualificationComponent } from './edit-qualification/edit-qualification.component';
import { QualificationsComponent } from './qualifications/qualifications.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'qualifications',
        component: QualificationsComponent,
      },
      {
        path: 'create-qualification',
        component: CreateQualificationComponent,
      },
      {
        path: 'edit-qualification/:id',
        component: EditQualificationComponent,
      },
      {
        path: 'delete-qualification/:id',
        component: DeleteQualificationComponent,
      },
      {
        path: 'print-qualifications',
        component: PrintQualificationsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class QualificationsRoutingModule { }
