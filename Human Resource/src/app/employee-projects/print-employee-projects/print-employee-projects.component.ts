import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeProjectsService } from '../employee-projects.service';
import { employeeProject } from '../employeeProject';

@Component({
  selector: 'app-print-employee-projects',
  templateUrl: './print-employee-projects.component.html',
  styleUrls: ['./print-employee-projects.component.scss']
})
export class PrintEmployeeProjectsComponent implements OnInit {

   displayedColumns: string[] = [
    'employeeName',
    'projectName',
    'startingDate',
    'projectAddress',
  ];
  EmployeePRojects: any;
  paginator: any;
  matSort: any;


  constructor( private EmployeeProjectService: EmployeeProjectsService, private router: Router , private translate: TranslateService) { 
  
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  
  
  }
  ngOnInit(): void {

    this.getAllEmployeeProject();
  }


  public getAllEmployeeProject(): void {

    this.EmployeeProjectService.getEmployeeProject().subscribe((response) => {
      this.EmployeePRojects = response;
      this.EmployeePRojects.paginator =this.paginator;
      this.EmployeePRojects.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  
    }
  

    
  ngAfterViewInit() {}


  printPage() {

    window.print();
  }  

}
