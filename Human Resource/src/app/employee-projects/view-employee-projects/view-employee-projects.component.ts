import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeProjectsService } from '../employee-projects.service';
import { employeeProject } from '../employeeProject';

@Component({
  selector: 'app-view-employee-projects',
  templateUrl: './view-employee-projects.component.html',
  styleUrls: ['./view-employee-projects.component.scss']
})
export class ViewEmployeeProjectsComponent implements OnInit {


  EmployeePRojects;
  displayedColumns: string[] = [
    'employeeName',
    'projectName',
    'startingDate',
    'projectAddress',
    'actions',
  ];
  EmployeePRoject!: MatTableDataSource<employeeProject>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private employeeProjectService: EmployeeProjectsService,
    private router: Router,
    private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {

    this.getAllEmployeeProject();
  }

  public getAllEmployeeProject(): void {

    this.employeeProjectService.getEmployeeProject().subscribe((response: employeeProject[]) => {
     
      this.EmployeePRojects = new MatTableDataSource(response);
      this.EmployeePRojects.paginator = this.paginator;
      this.EmployeePRojects.sort = this.matSort;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  ngAfterViewInit() { }

  filterData($event: any) {
    this.EmployeePRojects.filter = $event.target.value;
  }

  public onEditEmployeePRojectsById(EmployeePRojects: number): void {
    this.router.navigate(['/operation/employee-projects/edit-employeeProjects', EmployeePRojects])
  }

  public onDeleteEmployeePRojectsById(EmployeePRojectsid: number): void {
    this.router.navigate(['/operation/employee-projects/delete-employeeProjects', EmployeePRojectsid])
  }
}

