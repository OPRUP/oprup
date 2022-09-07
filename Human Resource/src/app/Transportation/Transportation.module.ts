import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
import { TransportationRoutes } from './Transportation.routing';
import { TransportationComponent } from './Transportation/Transportation.component';
import { Transportation_createComponent } from './Transportation_create/Transportation_create.component';
import { Transportation_deleteComponent } from './Transportation_delete/Transportation_delete.component';
import { Transportation_editComponent } from './Transportation_edit/Transportation_edit.component';
import { Transportation_printComponent } from './Transportation_print/Transportation_print.component';


@NgModule({
  imports: [
    CommonModule,
    TransportationRoutes,
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
    HttpClientModule,
    ReactiveFormsModule,

  ],
  declarations: [
    TransportationComponent,
    Transportation_createComponent,
    Transportation_deleteComponent,
    Transportation_editComponent,
    Transportation_printComponent


  ]
})
export class TransportationModule { }
