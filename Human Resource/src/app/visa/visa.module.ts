import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaRoutingModule } from './visa-routing.module';
import { CreateVisaComponent } from './create-visa/create-visa.component';
import { UpdateVisaComponent } from './update-visa/update-visa.component';
import { ListVisaComponent } from './list-visa/list-visa.component';
import { DeleteVisaComponent } from './delete-visa/delete-visa.component';


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
import { TranslateModule } from '@ngx-translate/core';
import { PrintVisaComponent } from './print-visa/print-visa.component';



@NgModule({
  declarations: [
    CreateVisaComponent,
    UpdateVisaComponent,
    ListVisaComponent,
    DeleteVisaComponent,
    PrintVisaComponent
  ],
  imports: [
    CommonModule,
    VisaRoutingModule,
    CommonModule,
    NgbModule,
    NgxDropzoneModule,
    NgxDatatableModule,
    MatSelectModule,
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
    TranslateModule,
    ReactiveFormsModule,
    
  ]
})
export class VisaModule { }
