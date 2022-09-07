
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';
import { ResidenceCardRequest } from '../residence-card-request';
import { ResidenceCardRequestService } from '../residence-card-request.service';


@Component({
  selector: 'app-create-residence-card',
  templateUrl: './create-residence-card.component.html',
  styleUrls: ['./create-residence-card.component.scss']
})
export class CreateResidenceCardComponent implements OnInit {

  form: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    date: new FormControl(''),
    reason: new FormControl(''),

  });

  ResidenceCardRequestData = {
    residenceCardRequestId: '',
    date: '',
    reason:  '',
    employee:  {
      employeeId:'',

  },
};

residenceCardRequest!: ResidenceCardRequest[];
employees!: Employee[];

  // fb: any;

constructor(

  private residenceCardRequestService : ResidenceCardRequestService,
  private employeeService: EmployeeService,
  contractDetailService:ContractDetailService,
  private contractService: Employee09_ContractService,
  private activateRoute: ActivatedRoute,
  private router: Router,
  public fb: FormBuilder, // Form Builder service for Reactive forms
  private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
}

  ngOnInit(): void {
    this.getEmployee()

    this.form = this.fb.group(
      {
        employeeId:['', [Validators.required]],
        date:['',[Validators.required]],
        reason: ['',[Validators.required]],

      }
   );
  }
  goResidenceCard(){
    this.router.navigate(['/operation/ResidenceCard/residence-card-requests/'])
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
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public onAddResidenceCard(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // document.getElementById('add-ATMCardRequest-form')?.click();
    this.residenceCardRequestService.addResidenceCardRequest(this.ResidenceCardRequestData).subscribe(
      (response: ResidenceCardRequest) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.goResidenceCard();
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
    );
    }

}



















