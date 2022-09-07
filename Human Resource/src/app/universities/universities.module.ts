import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitiesRoutingModule } from './universities-routing.module';
import { UniversitiesComponent } from './universities/universities.component';
import { CreateUniversityComponent } from './create-university/create-university.component';
import { EditUniversityComponent } from './edit-university/edit-university.component';
import { DeleteUniversityComponent } from './delete-university/delete-university.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrintUniversitiesComponent } from './print-universities/print-universities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniversitiesComponent,
    CreateUniversityComponent,
    EditUniversityComponent,
    DeleteUniversityComponent,
    PrintUniversitiesComponent,
  ],
  imports: [
    CommonModule,
    UniversitiesRoutingModule,
    FormsModule,
    NgbModule,


    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,

  ]
})
export class UniversitiesModule { }
