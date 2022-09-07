import { PrintTopManagementComponent } from './print-top-management/print-top-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateTopManagementComponent } from './create-top-management/create-top-management.component';
import { DeleteTopManagementComponent } from './delete-top-management/delete-top-management.component';
import { EditTopManagementComponent } from './edit-top-management/edit-top-management.component';
import { TopManagementsComponent } from './top-managements/top-managements.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'top-managements',
        component: TopManagementsComponent,
      },
      {
        path: 'create-top-management',
        component: CreateTopManagementComponent,
      },
      {
        path: 'edit-top-management/:id',
        component: EditTopManagementComponent,
      },
      {
        path: 'delete-top-management/:id',
        component: DeleteTopManagementComponent,
      },
      {
        path: 'print-top-management',
        component: PrintTopManagementComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class TopManagementsRoutingModule {

}
