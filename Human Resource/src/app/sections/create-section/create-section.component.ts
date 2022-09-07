import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Department } from 'src/app/departments/department';
import { DepartmentService } from 'src/app/departments/department.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Section } from '../section';
import { SectionService } from '../section.service';


@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {

  sectionData = {
    sectionId: '',
    sectionName: '',
    managerStartingDate: '',
    contactNumber: '',
    description:  '',
    deleteFlag: 1,
    employee:  {
      employeeId:'',
    },
    department: {
      departmentId:'',
    },
  };


  form: FormGroup = new FormGroup({
    sectionName: new FormControl(''),
    managerStartingDate: new FormControl(''),
    contactNumber: new FormControl(''),
    employeeId: new FormControl(''),
    departmentId: new FormControl(''),
  });


  // sections!: Section[];
  employees!: Employee[];
  departments!: Department[];
  snackBar!: MatSnackBar;

  constructor(private departmentService: DepartmentService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private employeeService: EmployeeService,
    private sectionService: SectionService, private router: Router, private translate: TranslateService){
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getEmployees();
    this.getDepartments();

    this.form = this.fb.group(
      {
        sectionName:['', Validators.required],
        managerStartingDate:['',[Validators.required]],
        employeeId: ['',[Validators.required]],
        departmentId: ['',[Validators.required]],
        contactNumber: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]]
       // 1) Begins with 0 or 00966
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits

      }

    );



  }

  goSectionsList(){
    this.router.navigate(['/sections/sections'])
  }


  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }


  public onAddSection(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


      this.sectionService.addSection(this.sectionData).subscribe(
        (data: Section) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.sectionService.getSections();
          this.goSectionsList();
        },
        (error) => {

  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
          console.log(error);
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
  public getDepartments(): void{
    this.departmentService.getDepartments().subscribe(
      (data:Department[]) => {
      this.departments = data;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }



}
