import { PrintCompaniesComponent } from './print-companies/print-companies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CompaniesComponent } from './companies/companies.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'create-company',
        component: CreateCompanyComponent,
      },
      {
        path: 'edit-company/:id',
        component: EditCompanyComponent,
      },
      {
        path: 'delete-company/:id',
        component: DeleteCompanyComponent,
      },
      {
        path: 'print-companies',
        component: PrintCompaniesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class CompaniesRoutingModule { }
