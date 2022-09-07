import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Visa } from '../visa';
import { VisaService } from '../visa.service';
import countries from '../../_files/countries.json';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-visa',
  templateUrl: './create-visa.component.html',
  styleUrls: ['./create-visa.component.scss']
})
export class CreateVisaComponent implements OnInit {

  snackBar!: MatSnackBar;
  visaData = {
    visaInformationId: '',
    approvalNumber: '',
    numberOfProvidedVisas:'',
    jobs:  '',
    nationality:  '',
    gender:  '',
    approvalDate:  '',
    copy:  '',
    deleteFlag: 1,
  };


  form: FormGroup = new FormGroup({
    approvalNumber: new FormControl(''),
    numberOfProvidedVisas: new FormControl(''),
    jobs: new FormControl(''),
    nationality: new FormControl(''),
    gender: new FormControl(''),
    approvalDate: new FormControl(''),

  });


  countryList:{name:String,code:String}[]=countries;
  constructor( private fb: FormBuilder,private service:VisaService, private router: Router,
    private translate: TranslateService) {
     this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {

    this.form = this.fb.group(
      {

    // habitationId:['',[Validators.required]],
    approvalNumber:['',[Validators.required]],
    numberOfProvidedVisas:['',[Validators.required]],
    jobs: ['',[Validators.required]],
    nationality:['',[Validators.required]],
    gender: ['',[Validators.required]],
    approvalDate: ['',[Validators.required]],

      } );
  }

  goCompaniesList(){
    this.router.navigate(['/international/visa/visa'])
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public onAddCompany(): void {
    // if(this.visaData.companyName.trim() == '' || this.visaData.companyName == null){
    //   Swal.fire('تحذير', 'يجب إدخال اسم الشركة الشقيقة', 'warning')
    // }
    // else  if(this.visaData.companyPrefix.trim() == '' || this.visaData.companyPrefix == null){
    //   Swal.fire('تحذير', 'يجب إدخال رمز الشركة الشقيقة', 'warning')
    // }
    // else  if(this.visaData.commercialId.trim() == '' || this.companyData.commercialId == null){
    //   Swal.fire('تحذير', 'يجب إدخال رقم السجل التجاري', 'warning')
    // }
    // else  if(this.companyData.dateStart == '' || this.companyData.dateStart == null){
    //   Swal.fire('تحذير', 'يجب إدخال تاريخ الإصدار ', 'warning')
    // }
    // else  if(this.companyData.dateEnding == '' || this.companyData.dateEnding == null){
    //   Swal.fire('تحذير', 'يجب إدخال تاريخ الأنتهاء ', 'warning')
    // }
    // else{


      this.submitted = true;
      if (this.form.invalid) {
        return;
      }

      this.service.add(this.visaData).subscribe(
        (data: Visa) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.service.get();
          this.goCompaniesList();

        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

          console.log(error);
        }
      );
    }


    // form = new FormGroup({
    //   approvalNumber: new FormControl('', [Validators.required]),
    //   // email: new FormControl('', [Validators.required, Validators.email]),
    //   // body: new FormControl('', Validators.required)
    // });

    // get f(){
    //   return this.form.controls;
    // }
  }


