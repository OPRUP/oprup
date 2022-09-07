import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkiprequestRoutingModule } from './skiprequest-routing.module';
import { SkiprequestComponent } from './skiprequest/skiprequest.component';
import { CreateSkiprequestComponent } from './create-skiprequest/create-skiprequest.component';
import { EditSkiprequestComponent } from './edit-skiprequest/edit-skiprequest.component';
import { DeleteSkiprequestComponent } from './delete-skiprequest/delete-skiprequest.component';
import { PrintSkiprequestComponent } from './print-skiprequest/print-skiprequest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    SkiprequestComponent,
    CreateSkiprequestComponent,
    EditSkiprequestComponent,
    DeleteSkiprequestComponent,
    PrintSkiprequestComponent
  ],
  imports: [
    CommonModule,
    SkiprequestRoutingModule,
    NgbModule,
    NgxDropzoneModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    NgSelectModule,
    NgSelectModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ]
})
export class SkiprequestModule { }
