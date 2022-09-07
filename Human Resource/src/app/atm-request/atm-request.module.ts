import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRequestRoutingModule } from './atm-request-routing.module';
import { AtmRequestsComponent } from './atm-requests/atm-requests.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CreateAtmRequestComponent } from './create-atm-request/create-atm-request.component';
import { RejectAtmRequestComponent } from './reject-atm-request/reject-atm-request.component';
import { ApproveAtmRequestComponent } from './approve-atm-request/approve-atm-request.component';
import { PrintAtmRequestComponent } from './print-atm-request/print-atm-request.component';


@NgModule({
  declarations: [
    AtmRequestsComponent,
    CreateAtmRequestComponent,
    RejectAtmRequestComponent,
    ApproveAtmRequestComponent,
    PrintAtmRequestComponent
  ],
  imports: [
  CommonModule,
  AtmRequestRoutingModule,
  FormsModule,
  NgbModule,
  NgSelectModule,
  FormsModule,
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
  ReactiveFormsModule
    
  ]
})
export class AtmRequestModule { }

  
