
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';

import Swal from 'sweetalert2';
import { Employee, Employee11_EmployedInformation } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {
  displayedColumns: string[] = [

    'employeeName',
    'employeeNameAr',
    // 'employeeCompanyId',
    'employeePartCompanyId',
    'residenceName',
    'residenceNumber',


  ]


  employees!: MatTableDataSource<Employee>;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private employeeService: EmployeeService,
    private translate: TranslateService
    ) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    }

  ngOnInit() {
    this.getEmployees();

  }

  public getEmployees(): void {
    this.employeeService.get().subscribe(
      (response:Employee[]) => {
      this.employees = new MatTableDataSource(response);
      this.employees.paginator =this.paginator;
      this.employees.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);

          Swal.fire(this.translate.instant('Error'), this.translate.instant('Errorinloadingdata'), 'error')
        }
      );

  }

  filterData($event: any){
    this.employees.filter = $event.target.value;

  }







}
