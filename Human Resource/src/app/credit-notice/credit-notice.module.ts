import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditNoticeRoutingModule } from './credit-notice-routing.module';
import { CreditNoticeComponent } from './credit-notice/credit-notice.component';
import { CreateCreditNoticeComponent } from './create-credit-notice/create-credit-notice.component';
import { EditCreditNoticeComponent } from './edit-credit-notice/edit-credit-notice.component';
import { PrintCreditNoticeComponent } from './print-credit-notice/print-credit-notice.component';
import { DeleteCreditNoticeComponent } from './delete-credit-notice/delete-credit-notice.component';
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
    CreditNoticeComponent,
    CreateCreditNoticeComponent,
    EditCreditNoticeComponent,
    PrintCreditNoticeComponent,
    DeleteCreditNoticeComponent
  ],
  imports: [
    CommonModule,
    CreditNoticeRoutingModule,
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
export class CreditNoticeModule { }
