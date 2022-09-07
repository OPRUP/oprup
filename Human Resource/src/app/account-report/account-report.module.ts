import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountReportRoutingModule } from './account-report-routing.module';
import { AccountReportComponent } from './account-report/account-report.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatButtonModule } from '@angular/material/button';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';
import { IncomeStatementComponent } from './income-statement/income-statement.component';


@NgModule({
  declarations: [
    AccountReportComponent,
    TrialBalanceComponent,
    IncomeStatementComponent
  ],
  imports: [
    CommonModule,
     NgbModule,
    AccountReportRoutingModule,
    MatNativeDateModule,
    MatButtonModule, 
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    NgSelectModule,
    MatDatepickerModule,
    MatSelectModule,
  ]
})
export class AccountReportModule { }
