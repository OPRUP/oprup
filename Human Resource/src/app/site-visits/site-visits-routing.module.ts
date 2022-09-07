import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSiteVisitsComponent } from './create-site-visits/create-site-visits.component';
import { DeleteSiteVisitsComponent } from './delete-site-visits/delete-site-visits.component';
import { EditSiteVisitsComponent } from './edit-site-visits/edit-site-visits.component';
import { PrintSiteVisitsComponent } from './print-site-visits/print-site-visits.component';
import { SiteVisitsComponent } from './site-visits/site-visits.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'site-visits',
        component: SiteVisitsComponent,
      },
      {
      path: 'create-site-visits',
        component: CreateSiteVisitsComponent,
      },
      {
        path: 'edit-site-visits/:id',
        component:EditSiteVisitsComponent,
      },
      {
        path:'delete-site-visits/:id',
        component: DeleteSiteVisitsComponent,
      },   {
        path: 'print-site-visits',
        component:PrintSiteVisitsComponent,
      },
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class SiteVisitsRoutingModule { }
