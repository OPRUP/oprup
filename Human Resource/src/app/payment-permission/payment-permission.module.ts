import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentPermissionRoutingModule } from './payment-permission-routing.module';
import { CreatePaymentPermissionComponent } from './create-payment-permission/create-payment-permission.component';
import { EditPaymentPermissionComponent } from './edit-payment-permission/edit-payment-permission.component';
import { DeletePaymentPermissionComponent } from './delete-payment-permission/delete-payment-permission.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { PaymentPermissionComponent } from './payment-permission/payment-permission.component';

import { PrintPaymentPermissionComponent } from './print-payment-permission/print-payment-permission.component';


@NgModule({
  declarations: [
    CreatePaymentPermissionComponent,
    EditPaymentPermissionComponent,
    DeletePaymentPermissionComponent,
    PaymentPermissionComponent,
    PrintPaymentPermissionComponent
  ],
  imports: [
    CommonModule,
    PaymentPermissionRoutingModule,
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
export class PaymentPermissionModule { }
