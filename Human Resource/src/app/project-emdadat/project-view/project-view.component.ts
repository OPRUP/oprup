import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { ProjectEmdadat } from '../project-emdadat';
import { ProjectEmdadateService } from '../project-emdadate.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
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
  constructor( private projectEmdadateService: ProjectEmdadateService,private employeeService:EmployeeService ,private router: Router, private translate: TranslateService  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllProjectEmdadat();
    this.getEmployees();
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
  public getEmployees(): void{
    this.employeeService.get().subscribe(
      (data:Employee[]) => {
      this.employees = data;
     
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }

  ngAfterViewInit() {}
  filterData($event: any){
    this.ProjectEmdadats.filter = $event.target.value;

}
public onEditProjectEmdadatById(projectId: number): void {
  this.router.navigate(['/operation/project-emdadat/project-edit', projectId])
}

  public onEditToDeleteprojectIdById(projectId: number):void{
    this.router.navigate(['/operation/project-emdadat/project-delete', projectId])
  }
}
