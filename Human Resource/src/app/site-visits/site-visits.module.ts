import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteVisitsRoutingModule } from './site-visits-routing.module';
import { SiteVisitsComponent } from './site-visits/site-visits.component';
import { CreateSiteVisitsComponent } from './create-site-visits/create-site-visits.component';
import { EditSiteVisitsComponent } from './edit-site-visits/edit-site-visits.component';
import { DeleteSiteVisitsComponent } from './delete-site-visits/delete-site-visits.component';
import { PrintSiteVisitsComponent } from './print-site-visits/print-site-visits.component';
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
import { NgbDateAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';



@NgModule({
  declarations: [
    SiteVisitsComponent,
    CreateSiteVisitsComponent,
    EditSiteVisitsComponent,
    DeleteSiteVisitsComponent,
    PrintSiteVisitsComponent
  ],
  imports: [
    CommonModule,
    SiteVisitsRoutingModule,
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
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    NgSelectModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,


  ]

})
export class SiteVisitsModule { }
