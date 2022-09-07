import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtorNoticeRoutingModule } from './debtor-notice-routing.module';
import { DebtorNoticeComponent } from './debtor-notice/debtor-notice.component';
import { CreateDebtorNoticeComponent } from './create-debtor-notice/create-debtor-notice.component';
import { DeleteDebtorNoticeComponent } from './delete-debtor-notice/delete-debtor-notice.component';
import { PrintDebtorNoticeComponent } from './print-debtor-notice/print-debtor-notice.component';
import { EditDebtorNoticeComponent } from './edit-debtor-notice/edit-debtor-notice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    DebtorNoticeComponent,
    CreateDebtorNoticeComponent,
    DeleteDebtorNoticeComponent,
    PrintDebtorNoticeComponent,
    EditDebtorNoticeComponent
  ],
  imports: [
    CommonModule,
    DebtorNoticeRoutingModule,
    NgbModule,
    NgxDropzoneModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    NgSelectModule,
    NgSelectModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ]
})
export class DebtorNoticeModule { }
