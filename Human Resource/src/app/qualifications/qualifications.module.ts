import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationsRoutingModule } from './qualifications-routing.module';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { CreateQualificationComponent } from './create-qualification/create-qualification.component';
import { EditQualificationComponent } from './edit-qualification/edit-qualification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteQualificationComponent } from './delete-qualification/delete-qualification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PrintQualificationsComponent } from './print-qualifications/print-qualifications.component';


@NgModule({
  declarations: [
    QualificationsComponent,
    CreateQualificationComponent,
    EditQualificationComponent,
    DeleteQualificationComponent,
    PrintQualificationsComponent,
  ],
  imports: [
    CommonModule,
    QualificationsRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ]
})
export class QualificationsModule { }
