import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsTaskeenRoutes } from './RoomsTaskeen.routing';
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
import { RoomsTaskeenComponent } from './RoomsTaskeen/RoomsTaskeen.component';
import { RoomsTaskeen_createComponent } from './RoomsTaskeen_create/RoomsTaskeen_create.component';
import { RoomsTaskeen_deleteComponent } from './RoomsTaskeen_delete/RoomsTaskeen_delete.component';
import { RoomsTaskeen_editComponent } from './RoomsTaskeen_edit/RoomsTaskeen_edit.component';
import { RoomsTaskeen_printComponent } from './RoomsTaskeen_print/RoomsTaskeen_print.component';

@NgModule({
  imports: [
    CommonModule,
    RoomsTaskeenRoutes,
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
    ReactiveFormsModule
  ],
  declarations: [
    RoomsTaskeenComponent,
    RoomsTaskeen_createComponent,
    RoomsTaskeen_editComponent,
    RoomsTaskeen_printComponent,
    RoomsTaskeen_deleteComponent
  ]
})
export class RoomsTaskeenModule { }
