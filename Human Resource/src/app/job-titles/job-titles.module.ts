import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobTitlesRoutingModule } from './job-titles-routing.module';
import { JobTitlesComponent } from './job-titles/job-titles.component';
import { CreateJobTitleComponent } from './create-job-title/create-job-title.component';
import { EditJobTitleComponent } from './edit-job-title/edit-job-title.component';
import { DeleteJobTitleComponent } from './delete-job-title/delete-job-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { NgSelectModule } from '@ng-select/ng-select';
import { PrintJobTitlesComponent } from './print-job-titles/print-job-titles.component';





@NgModule({
  declarations: [
    JobTitlesComponent,
    CreateJobTitleComponent,
    EditJobTitleComponent,
    DeleteJobTitleComponent,
    PrintJobTitlesComponent
  ],
  imports: [
    CommonModule,
    JobTitlesRoutingModule,
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
    ReactiveFormsModule


  ]
})
export class JobTitlesModule { }
