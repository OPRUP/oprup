import { PrintTopManagementComponent } from './print-top-management/print-top-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopManagementsRoutingModule } from './top-managements-routing.module';
import { TopManagementsComponent } from './top-managements/top-managements.component';
import { CreateTopManagementComponent } from './create-top-management/create-top-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTopManagementComponent } from './edit-top-management/edit-top-management.component';
import { DeleteTopManagementComponent } from './delete-top-management/delete-top-management.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';




@NgModule({
  declarations: [
    TopManagementsComponent,
    CreateTopManagementComponent,
    EditTopManagementComponent,
    DeleteTopManagementComponent,
    PrintTopManagementComponent,

  ],
  imports: [
    CommonModule,
    TopManagementsRoutingModule,
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
    ReactiveFormsModule,

  ]
})
export class TopManagementsModule {

}
