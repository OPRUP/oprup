import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  employees!: Employee[];
  departmentData = {
    departmentId: '',
    departmentName: '',
    // managementStartingDate:'',
    contactNumber:'',
    deleteFlag: 1,
  };
  form: FormGroup = new FormGroup({
    departmentName: new FormControl(''),
    // managementStartingDate: new FormControl(''),
    contactNumber: new FormControl(''),
     });

     departments!: Department[];
  constructor(  private departmentService : DepartmentService,

    public fb: FormBuilder, // Form Builder service for Reactive forms

                private employeeService: EmployeeService,
                private router: Router,
                private translate: TranslateService){
                this.translate.setDefaultLang('ar');
                const lang = localStorage.getItem('lang')  || 'ar';
                this.translate.use(lang);
                document.documentElement.lang = lang;
    }

  ngOnInit() {

    this.form = this.fb.group(
      {
        departmentName:['', Validators.required],
        // managementStartingDate:['',[Validators.required]],
        contactNumber: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]]
       // 1) Begins with 0 or 00966
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits

       // 00966 551080168

      }

    );


  }
  goDepartmentList(){
    this.router.navigate(['/departments/departments'])
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  public onAddDepartment(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

      this.departmentService.addDepartment(this.departmentData).subscribe(
        (response: Department) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.getDepartments();
          this.goDepartmentList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

          console.log(error);
        }
      );

  }


  public getDepartments(): void{
    this.departmentService.getDepartments().subscribe(
      (response:Department[]) => {
      this.departments = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }



  public getEmployees(): void{
    this.employeeService.get().subscribe(
      (response:Employee[]) => {
      this.employees = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }


}
