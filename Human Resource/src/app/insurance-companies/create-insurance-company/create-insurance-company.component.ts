import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { InsuranceCompany } from '../insurance-company';
import { InsuranceCompanyService } from '../insurance-company.service';

@Component({
  selector: 'app-create-insurance-company',
  templateUrl: './create-insurance-company.component.html',
  styleUrls: ['./create-insurance-company.component.scss']
})
export class CreateInsuranceCompanyComponent implements OnInit {
   insuranceCompanies!: InsuranceCompany[];
   insuranceCompaniesData = {
    insuranceCompanyId: '',
    insuranceCompanyName: '',
    description: '',
    deleteFlag: 1,
  };

  form: FormGroup = new FormGroup({
    insuranceCompanyName: new FormControl(''),
  });
snackBar: any;
   constructor(private insuranceCompanyService: InsuranceCompanyService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

   ngOnInit() {

    this.form = this.fb.group(
      {
        insuranceCompanyName:['', Validators.required],

      }

    );
   }

   goInsuranceCompanyList(){
     this.router.navigate(['/insurance-companies/insurance-companies'])
   }

   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

   public onAddInsuranceCompany(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
     this.insuranceCompanyService.addInsuranceCompany(this.insuranceCompaniesData).subscribe(
       (response: InsuranceCompany) => {

         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
         this.insuranceCompanyService.getInsuranceCompanies();
         this.goInsuranceCompanyList();

       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
    }



}
