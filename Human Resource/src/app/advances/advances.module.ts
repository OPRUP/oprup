import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancesRoutingModule } from './advances-routing.module';
import { AdvanceRequestComponent } from './advance-request/advance-request.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { AdvancesComponent } from './advances/advances.component';
import { ApproveAdvanceComponent } from './approve-advance/approve-advance.component';
import { RejectAdvanceComponent } from './reject-advance/reject-advance.component';
import { AdvancesPrintComponent } from './advances-print/advances-print.component';


@NgModule({
  declarations: [
    AdvanceRequestComponent,
    AdvancesComponent,
    ApproveAdvanceComponent,
    RejectAdvanceComponent,
    AdvancesPrintComponent

  ],
  imports: [
    CommonModule,
    AdvancesRoutingModule,
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
    MatSelectModule
  ]
})
export class AdvancesModule { }
