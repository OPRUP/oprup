import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {

  departmentId!: number;
  department;
  departments!: Department[];
  employees!: Employee[];

  form: FormGroup = new FormGroup({
    departmentName: new FormControl(''),
    // managementStartingDate: new FormControl(''),
    contactNumber: new FormControl(''),
     });




  constructor(private departmentService: DepartmentService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private employeeService: EmployeeService, private router: Router,
    private activateRoute: ActivatedRoute, private translate: TranslateService){
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getDepartment();
    this.getEmployees();

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

  public getDepartment(){
   this.departmentId = this.activateRoute.snapshot.params['id'];
   this.departmentService.getDepartmentById(this.departmentId)
   .subscribe(data => {
     this.department = data;

   }, error => console.log(error));
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

 submitted = false;
 get f(): { [key: string]: AbstractControl } {
   return this.form.controls;
 }



  public onUpdateDepartment(dept: Department) {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


      this.departmentService.updateDepartment(this.department).subscribe(
        (data) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
       
          this.goDepartmentList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
          console.log(error);
        }
      );
    }
 }
