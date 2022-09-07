import { PrintSectionsComponent } from './print-sections/print-sections.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSectionComponent } from './create-section/create-section.component';
import { DeleteSectionComponent } from './delete-section/delete-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sections',
        component: SectionsComponent,
      },
      {
        path: 'create-section',
        component: CreateSectionComponent,
      },
      {
        path: 'edit-section/:id',
        component: EditSectionComponent,
      },
      {
        path: 'delete-section/:id',
        component: DeleteSectionComponent,
      },
      {
        path: 'print-sections',
        component: PrintSectionsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class SectionsRoutingModule { }
