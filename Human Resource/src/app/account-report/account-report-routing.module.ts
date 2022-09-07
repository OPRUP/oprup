import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountReportComponent } from './account-report/account-report.component';
import { IncomeStatementComponent } from './income-statement/income-statement.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';

const routes: Routes = [
  {path:'acc-rep',component:AccountReportComponent},
  {path:'trial',component:TrialBalanceComponent},
  {path:'income',component:IncomeStatementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TranslateModule]
})
export class AccountReportRoutingModule { }
