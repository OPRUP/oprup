import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { RecruitmentCompanynyService } from '../recruitment-companyny.service';
import { RecruitmentCompany } from '../RecruitmentCompany';
import countries from '../../_files/countries.json';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-edit-recruitment-companyny',
  templateUrl: './edit-recruitment-companyny.component.html',
  styleUrls: ['./edit-recruitment-companyny.component.scss']
})
export class EditRecruitmentCompanynyComponent implements OnInit {
  countryList:{name:String,code:String}[]=countries;

  form: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    numberOfProvidedVisas: new FormControl(''),
    country: new FormControl({ value: '' }),
    commercialRegister: new FormControl(''),
    contactNumber: new FormControl(''),
    ownerName: new FormControl(''),
    focalPointName: new FormControl(''),
    documents: new FormControl(''),

  });


  recruitmentCompanynyId!:number;
  recruitmentCompanyny;
  recruitmentCompanynys!:RecruitmentCompany[];


  constructor(private recruitmentCompanyService:RecruitmentCompanynyService ,
    private router: Router ,
    public fb: FormBuilder, // Form Builder service for Reactive forms


  private activateRoute: ActivatedRoute,
  private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }



  ngOnInit() {
  this.getRecruitmentCompany();
  this.form = this.fb.group(
    {
      companyName:['', [Validators.required,Validators.minLength(3)]],
      numberOfProvidedVisas:['',[Validators.required]],
      country: ['',[Validators.required]],
      commercialRegister: ['',[Validators.required]],
      ownerName: ['',[Validators.required]],
      documents: ['',[Validators.required]],
      focalPointName: ['', Validators.required],
      contactNumber: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]]
     // 1) Begins with 0 or 00962
     // 2) Then contains 7 or 8 or 9.
     // 3) Then contains 8 digits

    }
  )

  }

  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

  goRecruitmentCompanyList(){
  this.router.navigate(['/international/recruitmentcompany/recruitmentcompany/'])
  }

  public getRecruitmentCompany(){
   this.recruitmentCompanynyId= this.activateRoute.snapshot.params['id'];
  this.recruitmentCompanyService.getRecruitmentCompanyyId(this.recruitmentCompanynyId)
  .subscribe(data => {
    this.recruitmentCompanyny = data;

  }, error => console.log(error));
  }


  public onUpdateRecruitmentCompany(recruitmentCompanyny): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

  this.recruitmentCompanyService.updateRecruitmentCompany(this.recruitmentCompanyny).subscribe(
  (response) => {

  Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

  this.goRecruitmentCompanyList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')

  }
  );
  }

  }



