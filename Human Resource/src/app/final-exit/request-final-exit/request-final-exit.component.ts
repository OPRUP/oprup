
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';
import { FinalExit } from '../final-exit';
import { FinalExitService } from '../final-exit.service';

@Component({
  selector: 'app-request-final-exit',
  templateUrl: './request-final-exit.component.html',
  styleUrls: ['./request-final-exit.component.scss']
})
export class RequestFinalExitComponent implements OnInit {

  form: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    ticket: new FormControl(''),
    exitDate: new FormControl(''),
    reason: new FormControl(''),

  });

    finalExitData = {
      finalExitId: '',
      ticket: '',
      exitDate:  '',
      reason:'',
      employee:  {
        employeeId:'',
        employeeName:'',

    },
  };

  finalExit!: FinalExit[];
  employees!: Employee[];

  constructor(
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private finalExitService : FinalExitService,
    private employeeService: EmployeeService,
    contractDetailService:ContractDetailService,
    private contractService: Employee09_ContractService,
    private activateRoute: ActivatedRoute,
    private router: Router,
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

        employeeId: ['',[Validators.required]],
        ticket: ['',[Validators.required]],
        exitDate: ['',[Validators.required]],
        reason: ['',[Validators.required]],

      }

    );
  }
  goFinalExitList(){
    this.router.navigate(['/operation/finalExit/final-exits'])
  }

  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

  public onAddFinalExit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // document.getElementById('add-finalExit-form')?.click();
    this.finalExitService.addFinalExit(this.finalExitData).subscribe(
      (response: FinalExit) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.goFinalExitList();
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









