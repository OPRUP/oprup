import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryObjectsRoutingModule } from './salary-objects-routing.module';
import { SalaryObjectsComponent } from './salary-objects/salary-objects.component';
import { CreateSalaryObjectComponent } from './create-salary-object/create-salary-object.component';
import { EditSalaryObjectComponent } from './edit-salary-object/edit-salary-object.component';
import { DeleteSalaryObjectComponent } from './delete-salary-object/delete-salary-object.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [

    SalaryObjectsComponent,
    CreateSalaryObjectComponent,
    EditSalaryObjectComponent,
    DeleteSalaryObjectComponent

  ],
  imports: [
    CommonModule,
    SalaryObjectsRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
  ]
})
export class SalaryObjectsModule { }
