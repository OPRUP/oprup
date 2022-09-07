import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkingTimesRoutingModule } from './working-times-routing.module';
import { WorkingTimesComponent } from './working-times/working-times.component';
import { CreateWorkingTimeComponent } from './create-working-time/create-working-time.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    WorkingTimesComponent,
    CreateWorkingTimeComponent
  ],
  imports: [
    CommonModule,
    WorkingTimesRoutingModule,
    MatTableModule,

  ]
})
export class WorkingTimesModule { }
