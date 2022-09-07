import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSkiprequestComponent } from './create-skiprequest/create-skiprequest.component';
import { DeleteSkiprequestComponent } from './delete-skiprequest/delete-skiprequest.component';
import { EditSkiprequestComponent } from './edit-skiprequest/edit-skiprequest.component';
import { PrintSkiprequestComponent } from './print-skiprequest/print-skiprequest.component';
import { SkiprequestComponent } from './skiprequest/skiprequest.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'skiprequest',
        component:SkiprequestComponent,
      },
      {
        path: 'create-skiprequest',
        component: CreateSkiprequestComponent,
      },
      {
        path: 'edit-skiprequest/:id',
        component: EditSkiprequestComponent,
      },
      {
        path: 'delete-skiprequest/:id',
        component:DeleteSkiprequestComponent,
      },   {
        path: 'print-skiprequest',
        component:PrintSkiprequestComponent,
      },
    ]
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})


export class SkiprequestRoutingModule { }
