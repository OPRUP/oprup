import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { travelingEmployee } from 'src/app/traveling-emloyee/travelingEmployee';
import Swal from 'sweetalert2';
import { Renewingresidence } from '../Renewingresidence';
import { RenewingresidenceService } from '../renewingresidence.service';

@Component({
  selector: 'app-create-renewing-residence',
  templateUrl: './create-renewing-residence.component.html',
  styleUrls: ['./create-renewing-residence.component.scss']
})
export class CreateRenewingResidenceComponent implements OnInit {

  form: FormGroup = new FormGroup({
    expiryDate: new FormControl(''),
    submittingDate: new FormControl(''),
    employeeId: new FormControl({ value: '' }),
  });



 renewingResidences!: Renewingresidence[];
 renewingresidenceData = {
  renewingResidenceId:'',
    expiryDate:'',
    submittingDate:'',
    employee:{
      employeeId:'',
  },
   deleteFlag: 1,
 };
 employees!: Employee[];
 constructor(private renewingresidenceService:RenewingresidenceService ,
  private employeeService: EmployeeService,
     private router: Router,
     public fb: FormBuilder, // Form Builder service for Reactive forms

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

    expiryDate:['',[Validators.required]],
    submittingDate: ['',[Validators.required]],
    employeeId: ['',[Validators.required]],
   // userInfoUserName: new FormControl({ value: '' }, Validators.compose([Validators.required])),

      }

    );
   }

   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }


   goRenewingresidenceList(){
     this.router.navigate(['/operation/renewingresidence/renewingresidence'])
   }
   public onAddRenewingresidence(): void {


    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


     this.renewingresidenceService.addRenewingresidence(this.renewingresidenceData).subscribe(
       (response: Renewingresidence) => {

         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
         this.renewingresidenceService.getAllRenewingresidence();
         this.goRenewingresidenceList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
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

