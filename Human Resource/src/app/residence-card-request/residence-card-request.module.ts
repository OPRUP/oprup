import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidenceCardRequestRoutingModule } from './residence-card-request-routing.module';
import { CreateResidenceCardComponent } from './create-residence-card/create-residence-card.component';
import { PrintResidenceCardComponent } from './print-residence-card/print-residence-card.component';
import { RejectResidenceCardComponent } from './reject-residence-card/reject-residence-card.component';
import { ApproveResidenceCardComponent } from './approve-residence-card/approve-residence-card.component';
import { ResidenceCardRequestsComponent } from './residence-card-requests/residence-card-requests.component';
import { AtmRequestRoutingModule } from '../atm-request/atm-request-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    CreateResidenceCardComponent,
    PrintResidenceCardComponent,
    RejectResidenceCardComponent,
    ApproveResidenceCardComponent,
    ResidenceCardRequestsComponent
  ],
  imports: [
    CommonModule,
    ResidenceCardRequestRoutingModule,
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
export class ResidenceCardRequestModule { }
