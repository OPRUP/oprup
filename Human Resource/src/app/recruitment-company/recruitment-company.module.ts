import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentCompanyRoutingModule } from './recruitment-company-routing.module';
import { RecruitmentCompanyComponent } from './recruitment-company/recruitment-company.component';
import { CreateRecruitmentCompanyComponent } from './create-recruitment-company/create-recruitment-company.component';
import { DeleteRecruitmentCompanyComponent } from './delete-recruitment-company/delete-recruitment-company.component';
import { EditRecruitmentCompanynyComponent } from './edit-recruitment-companyny/edit-recruitment-companyny.component';
import { PrintRecruitmentCompanynyComponent } from './print-recruitment-companyny/print-recruitment-companyny.component';
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
    RecruitmentCompanyComponent,
    CreateRecruitmentCompanyComponent,
    DeleteRecruitmentCompanyComponent,
    EditRecruitmentCompanynyComponent,
    PrintRecruitmentCompanynyComponent
  ],
  imports: [
    CommonModule,
    RecruitmentCompanyRoutingModule,
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
    ReactiveFormsModule,


  ]
})
export class RecruitmentCompanyModule { }
