import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoriFullLayoutComponent } from './shared/components/hori-full-layout/hori-full-layout.component';
import { AccountsFullContentComponent } from './shared/components/layouts/accounts-full-content/accounts-full-content.component';
import { ContentStyleComponent } from './shared/components/layouts/content-style/content-style.component';
import { ErrorStyleComponent } from './shared/components/layouts/error-style/error-style.component';
import { FinanceFullContentComponent } from './shared/components/layouts/finance-full-content/finance-full-content.component';
import { FullContentComponent } from './shared/components/layouts/full-content/full-content.component';
import { InternationalFullContentComponent } from './shared/components/layouts/international-full-content/international-full-content.component';
import { OperationFullContentComponent } from './shared/components/layouts/operation-full-content/operation-full-content.component';
import { PurchaseFullContentComponent } from './shared/components/layouts/purchase-full-content/purchase-full-content.component';
import { ReportFullContentComponent } from './shared/components/layouts/report-full-content/report-full-content.component';
import { SalesFullContentComponent } from './shared/components/layouts/sales-full-content/sales-full-content.component';
import { accounts_dep_content } from './shared/routes/accounts-dep-content-router';
import { custom_content } from './shared/routes/custom-content-router';
import { error_content } from './shared/routes/error-content-router';
import { finance_content } from './shared/routes/finance-content-router';
import { full_content } from './shared/routes/full-content-router';
import { international_content } from './shared/routes/international-content-router';
import { operation_content } from './shared/routes/operation-content-router';
import { purchase_content } from './shared/routes/purchase-content-router';
import { report_content } from './shared/routes/report-content-router';
import { sales_content } from './shared/routes/sales-content-router';

const routes: Routes = [
  { path: '', redirectTo:'auth/login', pathMatch: 'full'},
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
   { path: '', component: FullContentComponent, children: full_content },
  //{ path: 'hr', component: FullContentComponent, children: full_content },
  { path: 'operation', component: OperationFullContentComponent, children: operation_content },
  { path: 'finance', component: FinanceFullContentComponent, children: finance_content },
  { path: 'sales', component: SalesFullContentComponent, children: sales_content },
  { path: 'purchase', component: PurchaseFullContentComponent, children: purchase_content },
  { path: 'report', component: ReportFullContentComponent, children: report_content },
  { path: 'accounts', component: AccountsFullContentComponent, children: accounts_dep_content },
  { path: 'international', component: InternationalFullContentComponent, children: international_content },
  { path: '', component: HoriFullLayoutComponent, children: full_content },
  { path: '', component: ErrorStyleComponent, children: error_content },
  { path: '', component: ContentStyleComponent, children: custom_content },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    useHash:true,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
],
  exports: [RouterModule, TranslateModule]
})
export class AppRoutingModule { }
