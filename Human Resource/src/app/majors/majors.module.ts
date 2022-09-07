import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorsRoutingModule } from './majors-routing.module';
import { CreateMajorComponent } from './create-major/create-major.component';
import { EditMajorComponent } from './edit-major/edit-major.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteMajorComponent } from './delete-major/delete-major.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MajorsComponent } from './majors/majors.component';
import { PrintMajorsComponent } from './print-majors/print-majors.component';


@NgModule({
  declarations: [
    MajorsComponent,
    CreateMajorComponent,
    EditMajorComponent,
    DeleteMajorComponent,
    PrintMajorsComponent

  ],
  imports: [
    CommonModule,
    MajorsRoutingModule,
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
export class MajorsModule { }
