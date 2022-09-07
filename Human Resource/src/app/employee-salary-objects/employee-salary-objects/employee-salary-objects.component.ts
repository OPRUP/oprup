import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { JobTitleService } from 'src/app/job-titles/job-title.service';
import { SectionService } from 'src/app/sections/section.service';
import Swal from 'sweetalert2';
import { EmployeeSalaryObject } from '../employee-salary-object';

@Component({
  selector: 'app-employee-salary-objects',
  templateUrl: './employee-salary-objects.component.html',
  styleUrls: ['./employee-salary-objects.component.scss']
})
export class EmployeeSalaryObjectsComponent implements OnInit {

  employees;
  paginator: any;
  matSort: any;

  displayedColumns: string[] = [

    'employeeName',
    // 'contactNumber',
      // 'sections',
      // 'jobTitles',
    'actions',
  ];
  salaryObjects!: MatTableDataSource<EmployeeSalaryObject>;
  // @ViewChild('paginator') paginator!: MatPaginator;
  // @ViewChild(MatSort) matSort!: MatSort;
  constructor(private employeeService: EmployeeService, sectionServe: SectionService, jobTitleService: JobTitleService, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(){
    this.employeeService.get().subscribe(
      (response:Employee[]) => {
      this.employees = new MatTableDataSource(response);
      this.employees.paginator =this.paginator;
      this.employees.sort = this.matSort;
      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }
      );
  }





  filterData($event: any){
    this.employees.filter = $event.target.value;
  }


}
