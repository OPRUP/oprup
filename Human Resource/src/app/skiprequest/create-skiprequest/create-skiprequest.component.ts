import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Skiprequest } from '../Skiprequest';
import { SkiprequestService } from '../skiprequest.service';

@Component({
  selector: 'app-create-skiprequest',
  templateUrl: './create-skiprequest.component.html',
  styleUrls: ['./create-skiprequest.component.scss']
})
export class CreateSkiprequestComponent implements OnInit {

  form: FormGroup = new FormGroup({
    skipDate: new FormControl(''),

    employeeId: new FormControl(''),
  });


  skiprequests!: Skiprequest[];
  skiprequestData = {
    skipRequestId:'',
    skipDate:'',
    description:'',
    employee:{
      employeeId:'',
  },
   deleteFlag: 1,
 };
 employees!: Employee[];
 constructor(private skiprequestService:SkiprequestService ,
  private employeeService: EmployeeService,
  public fb: FormBuilder, // Form Builder service for Reactive forms

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

        skipDate:['',[Validators.required]],

    employeeId: ['',[Validators.required]],
      }

    );
   }

   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }


   goskiprequestsList(){
     this.router.navigate(['/operation/skiprequest/skiprequest'])
   }
   public onAddSkiprequests(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

     this.skiprequestService.addSkiprequest(this.skiprequestData).subscribe(
       (response) => {

         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

         this.skiprequestService.getAllSkiprequest();
         this.goskiprequestsList();
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


