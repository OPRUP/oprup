import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { NgbCalendar, NgbCalendarIslamicUmalqura, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
// import { InsuranceCompany } from 'src/app/insurance-companies/insurance-company';
// import { InsuranceCompanyService } from 'src/app/insurance-companies/insurance-company.service';
import Swal from 'sweetalert2';
import { Employee, Employee10_HealthInsurance } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee10_HealthInsuranceService } from '../Employee10_hokome.service';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura,
  NgbDatepickerI18n, NgbModal, ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import { TranslationWidth } from '@angular/common';


@Component({
  selector: 'app-create-employee10-health-insurance',
  templateUrl: './create-employee10-hokome.component.html',
  styleUrls: ['./create-employee10-hokome.component.scss'],
})


export class CreateEmployee10HealthInsuranceComponent implements OnInit {
  viewMode;
  form: FormGroup = new FormGroup({
    visa: new FormControl(''),
    startVisaDate:new FormControl(''),
    endVisaDate: new FormControl(''),
    jobByVisa: new FormControl(''),
    typeVisa:new FormControl(''),
    enterVisaDate:new FormControl(''),
    medicalExaminationCode: new FormControl(''),
    procedureDate: new FormControl(''),
    medicalResultDate:new FormControl(''),
    medicalTestResult: new FormControl(''),
    insurancesCode: new FormControl(''),
    insurancesType:new FormControl(''),
    insurancesStartDate: new FormControl(''),
    insurancesEndDate: new FormControl(''),
    residenceNumber:new FormControl(''),
    residenceIssue: new FormControl(''),
    jobByResidence: new FormControl(''),
    // warrantyDate: new FormControl(''),

    exitDate:new FormControl(''),
    // escapeReports: new FormControl(''),
    // employeeId: new FormControl(''),



  });
  snackBar: any;
  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  // insurances!: InsuranceCompany[];
  empHealthInsurances;
  emp10 = {
    hokomeId: '',
    visa: '',
    startVisaDate: '',
    endVisaDate:'',
    jobByVisa: '',
    typeVisa: '',
    enterVisaDate: '',
    medicalExaminationCode: '',
    procedureDate:'',
    medicalResultDate: '',
    medicalTestResult: '',
    insurancesCode: '',
    insurancesType: '',
    insurancesStartDate:'',
    insurancesEndDate: '',
    residenceNumber: '',
    residenceIssue: '',
    residenceExpiry:'',

    jobByResidence: '',
    warrantyDate: '',
    hijriWarrantyDate: '',
    //exitDate: '',
    escapeReports: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    },
    // insuranceCompany:{
    //   insuranceCompanyId:'',
    // },
  };
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
  //constructor() { }
  constructor( private employeeService: EmployeeService,
    private emp10_health: Employee10_HealthInsuranceService,
    // private insuranceService: InsuranceCompanyService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private activateRoute: ActivatedRoute,
    public translate: TranslateService){
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    }
  ngOnInit(): void {
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.viewMode = "tab10";
    this.getEmployee();
    // this.getInsurance();
    this.getEmployeeHeath();

    this.form = this.fb.group(
      {
        visa:['', Validators.required],
        startVisaDate:['',Validators.required],
        endVisaDate: ['',Validators.required],
        jobByVisa: ['',Validators.required],
        typeVisa: ['',Validators.required],
        enterVisaDate:['',Validators.required],
        medicalExaminationCode: ['',Validators.required],
        procedureDate: ['',Validators.required],
        medicalResultDate: ['',Validators.required],
        medicalTestResult: ['',Validators.required],
        insurancesCode: ['',Validators.required],
        insurancesType:['', Validators.required],
        insurancesStartDate:['',Validators.required],
        insurancesEndDate: ['',Validators.required],
        residenceNumber: ['',Validators.required],
        residenceIssue: ['',Validators.required],
        jobByResidence:['',Validators.required],
        residenceExpiry:['',Validators.required],
        // warrantyDate: ['',Validators.required],

        //exitDate: ['',Validators.required],
        // escapeReports: ['',Validators.required],
        // employeeId: ['',Validators.required],




      });

  }

  public getEmployeeHeath(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp10_health.getHealthByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.empHealthInsurances = response;

      },
    )
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public getEmployee(): void{
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId)
    .subscribe(data => {
      this.employee = data;

    }, error => console.log(error));
  }

  public onAddInsuranceDependent(): void {
    this.emp10.hijriWarrantyDate=this.model.year+'-'+this.model.month+'-'+this.model.day

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(new Date(this.emp10.endVisaDate)<=new Date(this.emp10.enterVisaDate))
     { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
return;
    }
    if(new Date(this.emp10.insurancesEndDate)<=new Date(this.emp10.insurancesStartDate))
     { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
return;
    }
    this.emp10.hijriWarrantyDate=this.model.year+'-'+this.model.month+'-'+this.model.day

      document.getElementById('add-InsuranceDependent-form')?.click();
      this.emp10_health.add(this.emp10).subscribe(
        (response: Employee10_HealthInsurance) => {


          Swal.fire(this.translate.instant('success'), this.translate.instant('Therecordhasbeensuccessfullyadded'), 'success')

          this.viewMode = "tab10";
          this.getEmployeeHeath();
        },
        (error) => {
          Swal.fire(this.translate.instant('error')!!, this.translate.instant('ErrorwhileaddingInsuranceDependent'), 'error')

        }
      );


   }

   public deleteEmployeeHealth(healthId){
    Swal.fire({
      icon: 'info',
      title:  'Are You Sure to Delete record',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){

        this.emp10_health.deleteHealth(healthId).subscribe(
          (response) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

            this.getEmployeeHeath();
            this.viewMode = "tab10";
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

          }
        );
      }

    })
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
}
