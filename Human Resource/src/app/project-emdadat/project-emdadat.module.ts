import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectPrintComponent } from './project-print/project-print.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectEmdadatRoutes } from './project-emdadat.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    ProjectViewComponent,
    ProjectEditComponent,
    ProjectPrintComponent,
    ProjectDeleteComponent,
    ProjectCreateComponent,
  ],
  imports: [
    CommonModule,
    ProjectEmdadatRoutes,
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
  ]
})
export class ProjectEmdadatModule { }
