import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskeenComponent } from './Taskeen/Taskeen.component';
import { Taskeen_createComponent } from './Taskeen_create/Taskeen_create.component';
import { Taskeen_DeleteComponent } from './Taskeen_Delete/Taskeen_Delete.component';
import { Taskeen_EditComponent } from './Taskeen_Edit/Taskeen_Edit.component';
import { Taskeen_PrintComponent } from './Taskeen_Print/Taskeen_Print.component';
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
import { TaskeenRoutes } from './Taskeen.routing';

@NgModule({
  imports: [
    CommonModule,
    TaskeenRoutes,
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
    TaskeenComponent,
    Taskeen_createComponent,
    Taskeen_EditComponent,
    Taskeen_PrintComponent,
    Taskeen_DeleteComponent,

  ]
})
export class TaskeenModule { }
