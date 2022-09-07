import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Transportation } from '../Transportation';
import { TransportationService } from '../Transportation.service';

@Component({
  selector: 'app-Transportation',
  templateUrl: './Transportation.component.html',
  styleUrls: ['./Transportation.component.scss']
})
export class TransportationComponent implements OnInit {
  displayedColumns = [
    'employeeName',
    'transportationMeanCode',
    'transportationMeanType',
    'transportationMeanNumber',
    'transportationMeanBuyingDate',
    // 'licensePhoto',
    'actions',

  ];
  employees;
  Transportation!: MatTableDataSource<Transportation>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private transportationService: TransportationService,private employeeService: EmployeeService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllTransportation();
    this.getAllEmployee();
  }
  public getAllTransportation(): void {

    this.transportationService.getAllTransportation().subscribe((response:Transportation[]) => {
      this.Transportation = new MatTableDataSource(response);
      this.Transportation.paginator =this.paginator;
      this.Transportation.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );

  }
  public getAllEmployee(): void{
    this.employeeService.get().subscribe((response:Employee[]) => {
    this.employees = response;
  
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
    )


}
  ngAfterViewInit() {}
  filterData($event: any){
    this.Transportation.filter = $event.target.value;

}
public onEditTransportationById(transportationMeanId: number): void {
  this.router.navigate(['/operation/Transportation/Transportation-edit', transportationMeanId])
}

  public onEditToDeletetransportationMeanIdById(transportationMeanId: number):void{
    this.router.navigate(['/operation/Transportation/Transportation-delete', transportationMeanId])
  }

}
