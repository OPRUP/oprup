import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { EmployeeProjectsService } from '../employee-projects.service';
import { employeeProject } from '../employeeProject';
import { project } from '../project';

@Component({
  selector: 'app-edit-employee-project',
  templateUrl: './edit-employee-project.component.html',
  styleUrls: ['./edit-employee-project.component.scss']
})
export class EditEmployeeProjectComponent implements OnInit {

  form: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    projectId:new FormControl(''),


  });
  employeeprojectsId!: number;
  employeeproject;
  employeeprojects!: employeeProject[];
  projectarr;
  employees;

  constructor(private employeeProjectService:EmployeeProjectsService,
    private employeeService: EmployeeService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
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
    this.getEmployee();
    this.getAllProjectEmdadat();
    this.form = this.fb.group(
      {
        employeeId:['',Validators.required],
        projectId:['',Validators.required],
      });

  }
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
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

  public onDEditeEmployeeProject(EmpPro:employeeProject ){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.employeeProjectService.updateEmployeeProject(this.employeeproject).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

      this.goEmployeeProjectList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
    }
    );
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
