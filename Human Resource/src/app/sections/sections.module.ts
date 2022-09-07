import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { CreateSectionComponent } from './create-section/create-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';
import { DeleteSectionComponent } from './delete-section/delete-section.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PrintSectionsComponent } from './print-sections/print-sections.component';


@NgModule({
  declarations: [
    SectionsComponent,
    CreateSectionComponent,
    EditSectionComponent,
    DeleteSectionComponent,
    PrintSectionsComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    NgbModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    NgSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class SectionsModule { }
