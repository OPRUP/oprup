import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Vendor } from 'src/app/vendor/Vendor';
import Swal from 'sweetalert2';
import { RecruitmentCompanynyService } from '../recruitment-companyny.service';
import { RecruitmentCompany } from '../RecruitmentCompany';
import countries from '../../_files/countries.json';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-create-recruitment-company',
  templateUrl: './create-recruitment-company.component.html',
  styleUrls: ['./create-recruitment-company.component.scss']
})
export class CreateRecruitmentCompanyComponent implements OnInit {
  recruitmentCompanys!: RecruitmentCompany[];

  form: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    numberOfProvidedVisas: new FormControl(''),
    country: new FormControl(''),
    commercialRegister: new FormControl(''),
    contactNumber: new FormControl(''),
    ownerName: new FormControl(''),
    focalPointName: new FormControl(''),
    documents: new FormControl(''),

  });
  recruitmentCompanyData = {
    recruitmentCompanyId:'',
    companyName:'',
    numberOfProvidedVisas:'',
    country:'',
    commercialRegister:'',
    contactNumber:'',
    ownerName:'',
    focalPointName:'',
    documents:'',
    deleteFlag: 1,
 };
 countryList:{name:String,code:String}[]=countries;

 constructor(private recruitmentCompanyService:RecruitmentCompanynyService ,
  public fb: FormBuilder, // Form Builder service for Reactive forms

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
        companyName:['', [Validators.required,Validators.minLength(3)]],
        numberOfProvidedVisas:['',[Validators.required]],
        country: ['',[Validators.required]],
        commercialRegister: ['',[Validators.required]],
        ownerName: ['',[Validators.required]],
        documents: ['',[Validators.required]],
        focalPointName: ['', Validators.required],
        contactNumber: ['',[Validators.required,Validators.pattern( '(00966)?[0-9]{14}')]]
       // 1) Begins with 0 or 00962
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits

      }

    );



   }
   goRecruitmentCompanyList(){
     this.router.navigate(['/international/recruitmentcompany/recruitmentcompany'])
   }

   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

   public onAddRecruitmentCompany(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

     this.recruitmentCompanyService.addRecruitmentCompany(this.recruitmentCompanyData).subscribe(
       (response: Vendor) => {
  
         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
         this.recruitmentCompanyService.getAllRecruitmentCompany();
         this.goRecruitmentCompanyList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

       }
     );

   }
  }
