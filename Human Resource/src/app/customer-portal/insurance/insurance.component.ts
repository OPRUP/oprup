
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { employeeProject } from '../employee-project';
import { InsuranceService } from '../insurance.service';

 @Component({
   selector: 'app-insurance',
   templateUrl: './insurance.component.html',
   styleUrls: ['./insurance.component.scss']
 })
 export class InsuranceComponent implements OnInit {
  employeeprojectsId;
  EmployeePRojects;
  employeeproject:any;
  displayedColumns: string[] = [
    'projectName',
    'employeeName',
    'nationality',
    'projectDuration',
    // 'country',
    'ACTIONS'
  ];
  // empPRoject!: MatTableDataSource<employeeProject>;
  EmployeePRoject!: MatTableDataSource<employeeProject>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private insuranceService: InsuranceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {

    this.getAllProjectEmdadat();
  }



  public getAllProjectEmdadat(): void {

    this.insuranceService.getAllProjectAndEmployee().subscribe((response:employeeProject[]) => {
      this.EmployeePRoject = new MatTableDataSource(response);
      this.EmployeePRoject.paginator =this.paginator;
      this.EmployeePRoject.sort = this.matSort;

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

  public onViewInsuranceById(EmployeePRojects: number): void {
    this.router.navigate(['employee-projects/edit-employeeProjects', EmployeePRojects])
  }

  public onDeleteEmployeePRojectsById(EmployeePRojectsid: number): void {
    this.router.navigate(['employee-projects/delete-employeeProjects', EmployeePRojectsid])
  }
 }
