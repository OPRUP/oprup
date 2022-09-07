import { Companies } from './../../companies/companies';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { CompaniesService } from 'src/app/companies/companies.service';
import countries from '../../_files/countries.json';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-create-employee-details',
  templateUrl: './create-employee-details.component.html',
  styleUrls: ['./create-employee-details.component.scss']
})
export class CreateEmployeeDetailsComponent implements OnInit {
  viewMode;
  snackBar: any;
  employeeId!: number;
  employee;
  employees!: Employee[];
  companies2!: Companies[];
  countryList:{name:String,code:String}[]=countries;


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


  constructor( private employeeService: EmployeeService,
    private activateRoute: ActivatedRoute,
    public translate: TranslateService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private companyService: CompaniesService,
    ){
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
  }

  ngOnInit(): void {
    this.viewMode = "tab01";
    this.getEmployee();
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
    this.getlanguage();


  }
   public getEmployee(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId)
    .subscribe(data => {
      this.employee = data;

    }, error => console.log(error));
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
  // public onAddImageProfile(): void {
  //    Swal.fire('Success', 'Image Profile is added', 'success')
  // }
  //   //tab 03
  // public onAddDocument(): void {
  //   Swal.fire('Success', 'Document is added', 'success')
  // }
  //   //tab 04
  // public onAddResidence(): void {
  //   Swal.fire('Success', 'Residence is added', 'success')
  // }
  //   //tab 05
  // public onAddAddress(): void {
  //   Swal.fire('Success', 'Address is added', 'success')
  // }
  //   //tab 06
  // public onAddQualification(): void {
  //   Swal.fire('Success', 'Qualification is added', 'success')
  // }
  //   //tab 07
  // public onAddWorkExperience(): void {
  //   Swal.fire('Success', 'Work Experience is added', 'success')
  // }
  // //tab 08
  // public onAddBank(): void {
  //   Swal.fire('Success', 'Bank Info is added', 'success')
  // }
  //   //tab 09
  // public onAddContact(): void {
  //   Swal.fire('Success', 'Contact is added', 'success')
  // }
  //   //tab 10
  // public onAddInsuranceDependent(): void {
  //   Swal.fire('Success', 'Insurance Dependent is added', 'success')
  // }
  //   //tab 11
  // public onAddEmployeedInformation(): void {
  //   Swal.fire('Success', 'Employeed Information is added', 'success')
  // }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onUpdateEmployeeBasicInfo(emp: Employee) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    document.getElementById('add-employee-form')?.click();

        this.employeeService.update(this.employee).subscribe((data: Employee) =>
        {
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
          console.log(error);
        }
      );
    }

}
