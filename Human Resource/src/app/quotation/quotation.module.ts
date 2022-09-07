import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationsComponent } from './quotations/quotations.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSelectModule } from '@angular/material/select';
import { ViewQuotationComponent } from './view-quotation/view-quotation.component';
import { PrintQuotationComponent } from './print-quotation/print-quotation.component';
import { DeleteQuotationComponent } from './delete-quotation/delete-quotation.component';
import { EditQuotationComponent } from './edit-quotation/edit-quotation.component';


@NgModule({
  declarations: [
    QuotationsComponent,
    ViewQuotationComponent,
    PrintQuotationComponent,
    DeleteQuotationComponent,
    EditQuotationComponent
  ],
  imports: [
    CommonModule,
    QuotationRoutingModule,
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
     MatNativeDateModule,
     MatSelectModule,
  ]
})
export class QuotationModule { }
