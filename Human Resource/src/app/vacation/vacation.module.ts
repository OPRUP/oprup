import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationRoutingModule } from './vacation-routing.module';
import { VacationsComponent } from './vacations/vacations.component';
import { CreateVacationComponent } from './create-vacation/create-vacation.component';
import { DeleteVacationComponent } from './delete-vacation/delete-vacation.component';
import { EditVacationComponent } from './edit-vacation/edit-vacation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// , NgbModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { PrintVacationComponent } from './print-vacation/print-vacation.component';
import { ApproveVacationComponent } from './approve-vacation/approve-vacation.component';
import { RejectVacationComponent } from './reject-vacation/reject-vacation.component';



@NgModule({
  declarations: [
    VacationsComponent,
    CreateVacationComponent,
    EditVacationComponent,
    DeleteVacationComponent,
    PrintVacationComponent,
    ApproveVacationComponent,
    RejectVacationComponent
  ],
  imports: [
    CommonModule,
    VacationRoutingModule,
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
    ReactiveFormsModule

  ]
})
export class VacationModule { }
