import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { employeeProject } from 'src/app/employee-projects/employeeProject';
import { Employee } from 'src/app/employees/employee';
import { ProjectEmdadat } from 'src/app/project-emdadat/project-emdadat';
import { EmployeeProjectService } from '../employee-project.service';

@Component({
  selector: 'app-employee-project',
  templateUrl: './employee-project.component.html',
  styleUrls: ['./employee-project.component.scss']
})
export class EmployeeProjectComponent implements OnInit {
  displayedColumns = [
    'projectName',
    'projectValue',
    'clientName',
    'projectDuration',
    'employees',
    'employeeNumber',
    // 'projectDescription',
    'actions',

  ];
  employees!: Employee[];
  ProjectEmdadats!: MatTableDataSource<ProjectEmdadat>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor( private projectEmdadateService: EmployeeProjectService ,private router: Router, private translate: TranslateService  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllProjectEmdadat();
    // this.getEmployees();
  }
  public getAllProjectEmdadat(): void {

    this.projectEmdadateService.getAllProject().subscribe((response:ProjectEmdadat[]) => {
      this.ProjectEmdadats = new MatTableDataSource(response);
      this.ProjectEmdadats.paginator =this.paginator;
      this.ProjectEmdadats.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );

  }
 
  ngAfterViewInit() {}
  filterData($event: any){
    this.ProjectEmdadats.filter = $event.target.value;

}
public onViewProjectEmployeeById(projectId: number): void {
  this.router.navigate(['/customer-portal/employee-project-details', projectId])
}
}
