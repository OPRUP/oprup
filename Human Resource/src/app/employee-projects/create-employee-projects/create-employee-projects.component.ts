import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { EmployeeProjectsService } from '../employee-projects.service';
import { employeeProject } from '../employeeProject';
import { project } from '../project';


@Component({
  selector: 'app-create-employee-projects',
  templateUrl: './create-employee-projects.component.html',
  styleUrls: ['./create-employee-projects.component.scss']
})
export class CreateEmployeeProjectsComponent implements OnInit {

  employeeProjectData = {
    employeeProjectId: '',

    employee:{
        employeeId:'',
    },
    project:{
      projectId:'',
  },
  deleteFlag:1,
};


projectarr;
employees!: Employee[];

constructor( private employeeProjectService: EmployeeProjectsService,
  private employeeService: EmployeeService,
  private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;


  }

  ngOnInit(): void {
    this.getEmployee();
    this.getAllProjectEmdadat();

  }

  goEmployeesList(){
    this.router.navigate(['/operation/employees/employees'])
  }

  goemployeeProjectList(){
    this.router.navigate(['/operation/employee-projects/employee-projects'])
  }


  public onAddEmployeeProjects(): void {
    // if(this.employeeProjectData.employee. == '' || this.employeeProjectData.employee.employeeId == null){
    //   Swal.fire('Warning', 'employee Name  is Required', 'warning')
    // }

    // else if(this.employeeProjectData.project.projectId.trim() == '' || this.employeeProjectData.project.projectId== null){
    //   Swal.fire('Warning', 'project Name is Required', 'warning')
    // }

    // else{
    //  document.getElementById('add-employeeProject-form')?.click();
     this.employeeProjectService.addEmployeeProject(this.employeeProjectData).subscribe(
       (response) => {

         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

         this.employeeProjectService.getEmployeeProject();
         this.goemployeeProjectList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
       }
     );
    //  }
   }

   public getEmployee(): void{
    this.employeeService.get().subscribe((response:Employee[]) => {
      this.employees = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }

public getAllProjectEmdadat(): void {

    this.employeeProjectService.getProject().subscribe((response:project[]) => {
      this.projectarr = response;
   
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }


 }
