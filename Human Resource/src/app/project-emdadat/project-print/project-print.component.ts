import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { ProjectEmdadat } from '../project-emdadat';
import { ProjectEmdadateService } from '../project-emdadate.service';

@Component({
  selector: 'app-project-print',
  templateUrl: './project-print.component.html',
  styleUrls: ['./project-print.component.scss']
})
export class ProjectPrintComponent implements OnInit {
  displayedColumns: string[] = [
    'projectCode',
    'projectName',
    // 'clientName',
    'nameAr',
    // 'managerStartingDate',
    'projectValue',
    'projectAddress',
  ]
  customer;
  employees?:Employee[];

  projects!: MatTableDataSource<ProjectEmdadat>;
  constructor(private projectEmdadatService:ProjectEmdadateService,private employeeService: EmployeeService,private router: Router, private translate: TranslateService,
private customerService: CustomerService
    ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;

  }

  ngOnInit() {
    this.getAllProjects();
    this.getAllCustomer();
    // this. getEmployees();

  }
  public getAllProjects(): void {
    this.projectEmdadatService.getAllProject().subscribe(
      (response:ProjectEmdadat[]) => {
        this.projects = new MatTableDataSource(response);

      /* this.projects.paginator =this.paginator;
      this.projects.sort = this.matSort; */
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }
  public getAllCustomer(): void{
    this.customerService.getAllCustomer().subscribe((response:Customer[]) => {
    this.customer = response;

    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
    )
    }
 
  printPage() {

    window.print();
  }

}
