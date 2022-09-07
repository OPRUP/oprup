import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { EmployeeLeave } from '../employee-leave';
import { EmployeeLeaveService } from '../employee-leave.service';

@Component({
  selector: 'app-create-employee-leave',
  templateUrl: './create-employee-leave.component.html',
  styleUrls: ['./create-employee-leave.component.scss']
})
export class CreateEmployeeLeaveComponent implements OnInit {

  employeeLeaveData = {
    leaveId: '',
    leaveType: '',
    leaveDate: '',
    description:  '',
    approvedBy:'',
    leaveFrom:'',
    leaveTo:'',
    attachment:'',
    employee:  {
      employeeId:'',
  },
  };
  form: FormGroup = new FormGroup({
    leaveType: new FormControl(''),
    leaveDate: new FormControl(''),
    approvedBy: new FormControl(''),
    leaveFrom: new FormControl(''),
    leaveTo: new FormControl(''),
    attachment: new FormControl(''),
    employeeId: new FormControl(''),
  });


  employeeLeave!: EmployeeLeave[];
  employees!: Employee[];


  constructor(private employeeLeaveService : EmployeeLeaveService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private employeeService: EmployeeService, private router: Router,
     private translate: TranslateService){
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getEmployee();

    this.form = this.fb.group(
      {
      leaveType:['',Validators.required],
      leaveDate: ['',Validators.required],
      leaveFrom: ['',Validators.required],
      leaveTo: ['',Validators.required],
      attachment: ['',Validators.required],
      employeeId: ['',Validators.required],
      }

    );
  }
  goEmployeeLeaveList(){
    this.router.navigate(['/employee-leave/employee-leaves'])
  }

  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

  public onAddEmployeeLeave(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    document.getElementById('add-employeeLeave-form')?.click();
    this.employeeLeaveService.addEmployeeLeave(this.employeeLeaveData).subscribe(
      (response: EmployeeLeave) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.goEmployeeLeaveList();
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        console.log(error);
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

}
