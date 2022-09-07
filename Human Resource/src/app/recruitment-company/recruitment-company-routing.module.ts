import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateRecruitmentCompanyComponent } from './create-recruitment-company/create-recruitment-company.component';
import { DeleteRecruitmentCompanyComponent } from './delete-recruitment-company/delete-recruitment-company.component';
import { EditRecruitmentCompanynyComponent } from './edit-recruitment-companyny/edit-recruitment-companyny.component';
import { PrintRecruitmentCompanynyComponent } from './print-recruitment-companyny/print-recruitment-companyny.component';
import { RecruitmentCompanyComponent } from './recruitment-company/recruitment-company.component';

const routes: Routes = [


  {
    path: '',
    children: [
      {
        path: 'recruitmentcompany',
        component: RecruitmentCompanyComponent,
      },
      {
        path: 'create-recruitmentcompany',
        component:CreateRecruitmentCompanyComponent,
      },
      {
        path: 'edit-recruitmentcompany/:id',
        component: EditRecruitmentCompanynyComponent,
      },
      {
        path: 'delete-recruitmentcompany/:id',
        component: DeleteRecruitmentCompanyComponent,
      },   {
        path: 'print-recruitmentcompany',
        component:PrintRecruitmentCompanynyComponent,
      },
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class RecruitmentCompanyRoutingModule { }
