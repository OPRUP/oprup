import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasingRoutingModule } from './purchasing-routing.module';

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
import { CreatePurchasingComponent } from './create-purchasing/create-purchasing.component';
import { PurchasingComponent } from './purchasing/purchasing.component';
import { DeletePurchasingComponent } from './delete-purchasing/delete-purchasing.component';
import { EditPurchasingComponent } from './edit-purchasing/edit-purchasing.component';
import { PrintPurchasingComponent } from './print-purchasing/print-purchasing.component';


@NgModule({
  declarations: [
    PurchasingComponent,
    CreatePurchasingComponent,
    EditPurchasingComponent,
    DeletePurchasingComponent,
    PrintPurchasingComponent
  ],
  imports: [
    CommonModule,
    PurchasingRoutingModule,
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
export class PurchasingModule { }
