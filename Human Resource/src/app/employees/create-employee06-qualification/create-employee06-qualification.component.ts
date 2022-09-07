import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Major } from 'src/app/majors/major';
import { MajorService } from 'src/app/majors/major.service';
import { Qualification } from 'src/app/qualifications/qualification';
import { QualificationService } from 'src/app/qualifications/qualification.service';
import { University } from 'src/app/universities/university';
import { UniversityService } from 'src/app/universities/university.service';
import Swal from 'sweetalert2';
import { Employee, Employee06_Qualification } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee06_QualificationService } from '../Employee06_Qualification.service';

@Component({
  selector: 'app-create-employee06-qualification',
  templateUrl: './create-employee06-qualification.component.html',
  styleUrls: ['./create-employee06-qualification.component.scss']
})
export class CreateEmployee06QualificationComponent implements OnInit {
  viewMode;
  snackBar: any;
  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  empQualifications;
  universities!:University[];
  majors!:Major[];
  qualifications!:Qualification[];
  emp06 = {
    employeeQualificationId: '',
    dateFrom: '',
    dateTo: '',
    degree: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    },
    university:{
      universityId:'',
    },
    qualification:{
      qualificationId:'',
    },
    major:{
      majorId:'',
    }
  };

  form: FormGroup = new FormGroup({
    dateFrom: new FormControl(''),
    dateTo: new FormControl(''),
    degree: new FormControl(''),
    universityId: new FormControl(''),
    qualificationId: new FormControl(''),
    majorId: new FormControl(''),
  });

  constructor(  private employeeService: EmployeeService,
                private emp06_qualification: Employee06_QualificationService,
                private universityService:UniversityService,
                public fb: FormBuilder, // Form Builder service for Reactive forms
                private majorService:MajorService,
                private qualificationService:QualificationService,
                private router: Router,
                private activateRoute: ActivatedRoute,
                public translate: TranslateService)
                {
          this.translate.setDefaultLang('ar');
          const lang = localStorage.getItem('lang')  || 'ar';
          this.translate.use(lang);
               }
  ngOnInit(): void {

    this.getEmployee();
    this.getUniverties();
    this.getQualification();
    this.getMajors();

    this.getEmployeeQualification();
    this.viewMode = "tab06";
    this.form = this.fb.group(
      {
        dateFrom:['', Validators.required],
        dateTo:['', Validators.required],
        degree: ['', Validators.required],
        universityId:['', Validators.required],
        qualificationId: ['', Validators.required],
        majorId: ['', Validators.required],
      }

    );


  }
  public getEmployee(): void{
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId)
    .subscribe(data => {
      this.employee = data;

    }, error => console.log(error));
  }
  public getUniverties(): void{
    this.universityService.getUniversities().subscribe(
      (response:University[]) => {
      this.universities = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
  public getQualification(): void{
    this.qualificationService.getQualifications().subscribe(
      (response:Qualification[]) => {
      this.qualifications = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
  public getMajors(): void{
    this.majorService.getMajors().subscribe(
      (response:Major[]) => {
      this.majors = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }



  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }



  public onAddQualification(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    document.getElementById('add-Qualification-form')?.click();

      this.emp06_qualification.add(this.emp06).subscribe(
        (response: Employee06_Qualification) => {

          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.getEmployeeQualification();
        },
        (error) => {
          //Swal.fire('Success', this.emp06.dateFrom, 'success')
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

          console.log(error);
        }
      );

   }
  public getEmployeeQualification(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp06_qualification.getQualificationByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.empQualifications = response;
   
      },
    )
  }




   public deleteEmployeeQualification(qualificationId){
    Swal.fire({
      icon: 'info',
      title:  'هل انت متاكد من حذف السجل',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){

        this.emp06_qualification.deleteQualification(qualificationId).subscribe(
          (response) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
            this.getEmployeeQualification();
            this.viewMode = "tab06";
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

          }
        );
      }

    })
  }
}
