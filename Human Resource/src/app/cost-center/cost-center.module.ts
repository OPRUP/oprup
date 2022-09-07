import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostCenterRoutingModule } from './cost-center-routing.module';
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
import { CostCenterComponent } from './cost-center/cost-center.component';
import { CreateCostcenterComponent } from './create-costcenter/create-costcenter.component';
import { DeleteCostcenterComponent } from './delete-costcenter/delete-costcenter.component';
import { EditCostcenterComponent } from './edit-costcenter/edit-costcenter.component';
import { PrintCostcenterComponent } from './print-costcenter/print-costcenter.component';


@NgModule({
  declarations: [
    PrintCostcenterComponent,
    EditCostcenterComponent,
    DeleteCostcenterComponent,
    CreateCostcenterComponent,
    CostCenterComponent
  ],
  imports: [
    CommonModule,
    CostCenterRoutingModule,
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
  ]
})
export class CostCenterModule { }
