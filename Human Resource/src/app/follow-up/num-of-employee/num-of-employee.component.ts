import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/employees/employee';
import { FollowupService } from '../followup.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-num-of-employee',
  templateUrl: './num-of-employee.component.html',
  styleUrls: ['./num-of-employee.component.scss']
})
export class NumOfEmployeeComponent implements OnInit {
 
  displayedColumns: string[] = [
    // 'bankId',
    'employeeName',
    'employeeNameAr',
     'nationality',
    'placeOfBirth',
  ];


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  employees!: MatTableDataSource<Employee>;
  constructor( private translate: TranslateService,private service:FollowupService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
   }

  ngOnInit(): void {
    this.getEmployee()
  }
  public getEmployee(): void{
    this.service.get().subscribe((data:Employee[]) => {
      this.employees = new MatTableDataSource(data);
      this.employees.paginator =this.paginator;
      this.employees.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  filterData($event: any){
    this.employees.filter = $event.target.value;
  }
}
