import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SheetRoutingModule } from './sheet-routing.module';
import { SheetsComponent } from './sheets/sheets.component';
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
//import HijriDate, { toHijri } from 'hijri-date/lib/safe';

@NgModule({
  declarations: [
    SheetsComponent
  ],
  providers: [
    DatePipe,
    
  ],
  imports: [
    CommonModule,
    SheetRoutingModule,

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
    //HijriDate,toHijri
  ]
})
export class SheetModule { }
