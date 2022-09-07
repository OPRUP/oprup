import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { EmployeeProjectsService } from '../employee-projects.service';
import { employeeProject } from '../employeeProject';

@Component({
  selector: 'app-delete-employee-projects',
  templateUrl: './delete-employee-projects.component.html',
  styleUrls: ['./delete-employee-projects.component.scss']
})
export class DeleteEmployeeProjectsComponent implements OnInit {

//   EmployeeProjectId!: number;

//   EmployeeProjects!: employeeProject[];

//   EmployeePRojects;
//   displayedColumns= {
//   employeeProjectId:'',
//   employee:{
//     employeeId:'',
//   },

//   project: {
//     projectId:''
//   }
//  ,

//   };

employeeprojectsId!: number;
employeeproject!: employeeProject;
employeeprojects!: employeeProject[];

  constructor(private employeeProjectService:EmployeeProjectsService,
     private router: Router,
     private activateRoute: ActivatedRoute,
     private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit(): void {
this.getEmployeeProject();

  }
  goEmployeeProjectList(){
    this.router.navigate(['/operation/employee-projects/employee-projects'])
  }

  public getEmployeeProject(){
    this.employeeprojectsId = this.activateRoute.snapshot.params['id'];
    this.employeeProjectService.getEmployeeProjectById(this.employeeprojectsId)
    .subscribe(data => {
      this.employeeproject = data;

    }, error => console.log(error));
  }

  public onDeleteEmployeeProject(EmpPro:employeeProject ){
    this.employeeProjectService.deleteEmployeeProject(this.employeeproject).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      this.goEmployeeProjectList();
    },
    (error: HttpErrorResponse) =>{


    
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }



}
