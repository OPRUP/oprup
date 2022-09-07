import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlipsRoutingModule } from './slips-routing.module';
import { CreateSlipComponent } from './create-slip/create-slip.component';
import { EditSlipComponent } from './edit-slip/edit-slip.component';
import { DeleteSlipComponent } from './delete-slip/delete-slip.component';
import { SlipsComponent } from './slips/slips.component';
import { FormsModule } from '@angular/forms';
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
import { ListSlipsComponent } from './list-slips/list-slips.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [

    CreateSlipComponent,
    EditSlipComponent,
    DeleteSlipComponent,
    SlipsComponent,
    ListSlipsComponent,
    PaySlipComponent,
    PaymentComponent,

  ],
  imports: [
    CommonModule,
    SlipsRoutingModule,
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
    MatListModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class SlipsModule { }
