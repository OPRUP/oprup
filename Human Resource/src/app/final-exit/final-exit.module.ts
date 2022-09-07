import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalExitRoutingModule } from './final-exit-routing.module';
import { FinalExitsComponent } from './final-exits/final-exits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { RequestFinalExitComponent } from './request-final-exit/request-final-exit.component';
import { PrintFinalExitComponent } from './print-final-exit/print-final-exit.component';
import { ApproveFinalExitComponent } from './approve-final-exit/approve-final-exit.component';
import { RejectFinalExitComponent } from './reject-final-exit/reject-final-exit.component';


@NgModule({
  declarations: [
    FinalExitsComponent,
    RequestFinalExitComponent,
    PrintFinalExitComponent,
    ApproveFinalExitComponent,
    RejectFinalExitComponent
  ],
  imports: [
    CommonModule,
    FinalExitRoutingModule,
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
export class FinalExitModule { }
