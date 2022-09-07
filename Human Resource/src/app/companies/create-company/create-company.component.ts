import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Companies } from '../companies';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  companies!: Companies[];
  employees!: Employee[];
  snackBar!: MatSnackBar;
  companyData = {
    companyId: '',
    companyName: '',
    companyPrefix:'',
    commercialId:  '',
    dateStart:  '',
    dateEnding:  '',
    licenseId:  '',
    partners:  '',
    deleteFlag: 1,
  };

  form: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    companyPrefix: new FormControl(''),
    commercialId: new FormControl(''),
    dateStart: new FormControl(''),
    dateEnding: new FormControl(''),
    licenseId: new FormControl(''),
    partners: new FormControl(''),
  });

  constructor(  private companiesService: CompaniesService,
                private employeeService: EmployeeService,
                public fb: FormBuilder, // Form Builder service for Reactive forms

                private router: Router,
                private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    this.getEmployees();

    this.form = this.fb.group(
      {

        companyName: ['', [Validators.required]],
    companyPrefix: ['',Validators.required],
    commercialId: ['',Validators.required],
    dateStart: ['',Validators.required],
    dateEnding: ['',Validators.required],
    licenseId: ['',Validators.required],
    partners: ['',Validators.required],

           }

    );
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
  goCompaniesList(){
    this.router.navigate(['/companies/companies'])
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddCompany(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(new Date(this.companyData.dateEnding)<=new Date(this.companyData.dateStart))
    {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
return;
   }
      this.companiesService.add(this.companyData).subscribe(
        (data: Companies) => {

          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.companiesService.get();
          this.goCompaniesList();

        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
          console.log(error);
        }
      );
    }


}
