import { PrintUniversitiesComponent } from './print-universities/print-universities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateUniversityComponent } from './create-university/create-university.component';
import { DeleteUniversityComponent } from './delete-university/delete-university.component';
import { EditUniversityComponent } from './edit-university/edit-university.component';
import { UniversitiesComponent } from './universities/universities.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'universities',
        component: UniversitiesComponent,
      },
      {
        path: 'create-university',
        component: CreateUniversityComponent,
      },
      {
        path: 'edit-university/:id',
        component: EditUniversityComponent,
      },
      {
        path: 'delete-university/:id',
        component: DeleteUniversityComponent,
      },
      {
        path: 'print-university',
        component: PrintUniversitiesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class UniversitiesRoutingModule { }
