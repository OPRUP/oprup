import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Companies } from 'src/app/companies/companies';
import { CompaniesService } from 'src/app/companies/companies.service';
import Swal from 'sweetalert2';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import countries from '../../_files/countries.json';
import countriesEn from '../../_files/countriesEn.json';

import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura,
  NgbDatepickerI18n, NgbModal, ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import { TranslationWidth } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
const I18N_VALUES = {
  weekdays: ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'],
  months: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
    'ذو القعدة', 'ذو الحجة']
};


@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {
  getWeekdayLabel(weekday: number, width?: TranslationWidth | undefined): string {
    return '';
  }

  constructor() { super();}

  getWeekdayShortName(weekday: number) {return I18N_VALUES.weekdays[weekday - 1];}

  getMonthShortName(month: number) {return I18N_VALUES.months[month - 1]; }

  getMonthFullName(month: number) {return this.getMonthShortName(month);}

  getDayAriaLabel(date: NgbDateStruct): string {return `${date.day}-${date.month}-${date.year}`;}
}
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
    { provide: NgbDatepickerI18n, useClass: IslamicI18n },

  ]
})

///////////////To Hijri Date Start//////



export class CreateEmployeeComponent implements OnInit {
  employeeData = {
    employeeId: '',
    bankBranch:'',
    employeeName: '',
    employeeNameAr: '',
    employeeCompanyId: '',
    employeePartCompanyId: '',
    placeOfBirth: '',
    dateOfBirth: '',
    dateOfJoin:  '',
    hijriDateOfJoin:  '',
    dateOfLastContact: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    religion: '',
    imageProfile:'',
    residenceName: '',
    residenceNumber: '',
    residenceIssue: '',
    residenceExpiry:'',
    country: '',
    deleteFlag: 1,
    companies: {
        companyId: '',
        companyName: '',
        companyNamePrefix: '',
        description: '',
        deleteFlag: 1,
    },
  };

  form: FormGroup = new FormGroup({
    companyId: new FormControl(''),
    employeeName: new FormControl(''),
    employeeNameAr: new FormControl(''),
    gender: new FormControl(''),
    maritalStatus: new FormControl(''),
    nationality: new FormControl(''),
    religion: new FormControl(''),
    placeOfBirth: new FormControl(''),
    dateOfBirth: new FormControl(''),
    dateOfJoin: new FormControl(''),
  });


  model = {year: 1443, month: 1, day: 1};
  private innerValue!: string;
  private changed ;
  private touched;


  @Input() id!: string;
  @Input() name!: string;


  get value(): string {
    return this.innerValue;
  }

  set value(value: string) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => (value));
    }
  }


  selectedFile!: File;
  employee!: Employee[];
  companies2!: Companies[];
  snackBar: any;
  countryList:{name:String,code:String}[]=countries;
  countryListEn:{name:String,code:String}[]=countriesEn;


  constructor(  private employeeService: EmployeeService,
                private companyService: CompaniesService,
                public fb: FormBuilder, // Form Builder service for Reactive forms
                private router: Router, public translate: TranslateService )
            {
              this.translate.setDefaultLang('ar');
              const lang = localStorage.getItem('lang')  || 'ar';
              this.translate.use(lang);
             }
  ngOnInit()
  {
    this.getAllCompanies();
    this.form = this.fb.group(
      {
        companyId:['', Validators.required],
        employeeName:['', Validators.required],
        employeeNameAr: ['', Validators.required],
        gender: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        nationality: ['', Validators.required],
        religion: ['', Validators.required],
        placeOfBirth: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        dateOfJoin: ['', Validators.required],
      }

    );
    this.getlanguage()

  }

  goEmployeesList(){
    this.router.navigate(['/employees/employees'])
  }
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }





  public onAddEmployee(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    document.getElementById('add-employee-form')?.click();

      this.employeeData.hijriDateOfJoin=this.model.year+'-'+this.model.month+'-'+this.model.day
        this.employeeService.add(this.employeeData).subscribe((data: Employee) =>
        {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.goEmployeesList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

          console.log(error);
        }
      );

  }
  public getAllCompanies(): void{
    this.companyService.get().subscribe((response:Companies[]) => {
      this.companies2 = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }

  registerOnChange(fn: any): void {
    this.changed.push(fn);
  }

  registerOnTouched(fn: any): void {
    this.touched.push(fn);
  }

  writeValue(obj: string): void {
    this.innerValue = obj;
  }

ar=false
en=false
  getlanguage(){

   if(localStorage.getItem('lang')=='ar')
   {
    this.ar=true
    this.en=false


   }
   if(localStorage.getItem('lang')=='en')
   {
    this.ar=false
    this.en=true
   
   }


  }
}


