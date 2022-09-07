import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenTaskeenRoutes } from './KitchenTaskeen.routing';
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
import { KitchenTaskeenComponent } from './KitchenTaskeen/KitchenTaskeen.component';
import { KitchenTaskeen_createComponent } from './KitchenTaskeen_create/KitchenTaskeen_create.component';
import { KitchenTaskeen_deleteComponent } from './KitchenTaskeen_delete/KitchenTaskeen_delete.component';
import { KitchenTaskeen_editComponent } from './KitchenTaskeen_edit/KitchenTaskeen_edit.component';
import { KitchenTaskeen_printComponent } from './KitchenTaskeen_print/KitchenTaskeen_print.component';


@NgModule({
  imports: [
    CommonModule,
    KitchenTaskeenRoutes,
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
    KitchenTaskeenComponent,
    KitchenTaskeen_createComponent,
    KitchenTaskeen_editComponent,
    KitchenTaskeen_printComponent,
    KitchenTaskeen_deleteComponent
  ]
})
export class KitchenTaskeenModule { }
