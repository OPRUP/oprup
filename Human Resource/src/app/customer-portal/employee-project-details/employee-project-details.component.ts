import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { employeeProject } from '../employee-project';

import { EmployeeProjectService } from '../employee-project.service';

@Component({
  selector: 'app-employee-project-details',
  templateUrl: './employee-project-details.component.html',
  styleUrls: ['./employee-project-details.component.scss']
})
export class EmployeeProjectDetailsComponent implements OnInit {
  employeeprojectsId;
  EmployeePRojects;
  employeeproject:any;
  displayedColumns: string[] = [
    'employeeName',
    'nationality',
    'projectName',
    'startingDate',
    'projectAddress',

  ];
  empPRoject!: MatTableDataSource<employeeProject>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private employeeProjectService: EmployeeProjectService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {

    this.getEmployeeProjectById();
  }



  public getEmployeeProjectById(){
    this.employeeprojectsId = this.activateRoute.snapshot.params['id'];
    this.employeeProjectService.getEmployeeProjectById(this.employeeprojectsId)
    .subscribe( (response:any) => {
      this.empPRoject = new MatTableDataSource(response);
      this.empPRoject.paginator =this.paginator;
      this.empPRoject.sort = this.matSort;

    }, error => console.log(error));
  }

  ngAfterViewInit() { }

  filterData($event: any) {
    this.EmployeePRojects.filter = $event.target.value;
  }

  public onEditEmployeePRojectsById(EmployeePRojects: number): void {
    this.router.navigate(['employee-projects/edit-employeeProjects', EmployeePRojects])
  }

  public onDeleteEmployeePRojectsById(EmployeePRojectsid: number): void {
    this.router.navigate(['employee-projects/delete-employeeProjects', EmployeePRojectsid])
  }

}
