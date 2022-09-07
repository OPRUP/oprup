import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FollowUpRoutingModule } from './follow-up-routing.module';
import { DashboardFollowComponent } from './dashboard-follow/dashboard-follow.component';
import { NumOfEmployeeComponent } from './num-of-employee/num-of-employee.component';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';  

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NumOfProjectsComponent } from './num-of-projects/num-of-projects.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ResidenceComponent } from './residence/residence.component';
import { TravellingEmployeeComponent } from './travelling-employee/travelling-employee.component';
import { PassPortsExpiresComponent } from './pass-ports-expires/pass-ports-expires.component';
import { QiwaEmployeeComponent } from './qiwa-employee/qiwa-employee.component';
import { HokomiDetailsComponent } from './hokomi-details/hokomi-details.component';
import { ExpiredCreditCardComponent } from './expired-credit-card/expired-credit-card.component';


@NgModule({
  declarations: [
    DashboardFollowComponent,
    NumOfEmployeeComponent,
    
    NumOfProjectsComponent,
         CreditCardComponent,
         ResidenceComponent,
         TravellingEmployeeComponent,
         PassPortsExpiresComponent,
         QiwaEmployeeComponent,
         HokomiDetailsComponent,
         ExpiredCreditCardComponent
  ],
  imports: [
    
    CommonModule,
    FollowUpRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
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
    TranslateModule,
    MatListModule,
    NgSelectModule,
    NgSelectModule,
    MatCardModule,
  
    
  
  ]
})
export class FollowUpModule { }
