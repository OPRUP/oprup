import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractExtensionRoutingModule } from './contract-extension-routing.module';
import { CreateExtensionComponent } from './create-extension/create-extension.component';
import { ExtensionsComponent } from './extensions/extensions.component';

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
import { PrintExtensionComponent } from './print-extension/print-extension.component';
import { DeleteExtensionComponent } from './delete-extension/delete-extension.component';

@NgModule({
  declarations: [
    CreateExtensionComponent,
    ExtensionsComponent,
    PrintExtensionComponent,
    DeleteExtensionComponent
  ],
  imports: [
    CommonModule,
    ContractExtensionRoutingModule,
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
    TranslateModule
  ]
})
export class ContractExtensionModule { }
