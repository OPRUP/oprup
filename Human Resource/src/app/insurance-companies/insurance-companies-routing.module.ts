import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreateInsuranceCompanyComponent } from './create-insurance-company/create-insurance-company.component';
import { DeleteInsuranceCompanyComponent } from './delete-insurance-company/delete-insurance-company.component';
import { EditInsuranceCompanyComponent } from './edit-insurance-company/edit-insurance-company.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
import { PrintInsurancesCompaniesComponent } from './print-insurances-companies/print-insurances-companies.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'insurance-companies',
        component: InsuranceCompaniesComponent,
      },
      {
        path: 'create-insurance-company',
        component: CreateInsuranceCompanyComponent,
      },
      {
        path: 'edit-insurance-company/:id',
        component: EditInsuranceCompanyComponent,
      },
      {
        path: 'delete-insurance-company/:id',
        component: DeleteInsuranceCompanyComponent,
      },
      {
        path: 'print-insurance-companies',
        component: PrintInsurancesCompaniesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule]
})
export class InsuranceCompaniesRoutingModule { }
