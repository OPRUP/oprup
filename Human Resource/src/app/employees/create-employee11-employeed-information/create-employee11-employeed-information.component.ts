import { Section } from './../../sections/section';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CentralJob } from 'src/app/central-jobs/central-job';
import { CentralJobService } from 'src/app/central-jobs/central-job.service';
import { Department } from 'src/app/departments/department';
// import { DepartmentService } from 'src/app/departments/department.service';
import { JobTitle } from 'src/app/job-titles/job-title';
import { JobTitleService } from 'src/app/job-titles/job-title.service';
import { SectionService } from 'src/app/sections/section.service';
import Swal from 'sweetalert2';
import { Employee, Employee11_EmployedInformation } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee11_EmployedInformationService } from '../Employee11_EmployedInformation.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee11-employeed-information',
  templateUrl: './create-employee11-employeed-information.component.html',
  styleUrls: ['./create-employee11-employeed-information.component.scss'],
})
export class CreateEmployee11EmployeedInformationComponent implements OnInit {
  viewMode;
  snackBar: any;
  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  centralJobs!: CentralJob[];
  jobTitles!: JobTitle[];
  // departments!: Department[];
  sections!: Section[];
  employedInfo!: Employee11_EmployedInformation[];
  emp11 = {
    empId: '',
    employeeCode: '',
    employee: {
      employeeId: this.activateRoute.snapshot.params['id'],
    },
    section: {
      sectionId: '',
    },
    company:{
      companyId:'',
    },
    centralJob: {
      centralId: '',
    },
    // jobTitle: {
    //   jobId: '',

    // },
    deleteFlag: 1,

  };
  comp;
  codeLength;
  jobCode;


  form: FormGroup = new FormGroup({
    sectionId: new FormControl(''),
    // jobId: new FormControl(''),
    centralId: new FormControl(''),

  });



  //constructor() { }
  constructor(
    private employeeService: EmployeeService,
    private employedService: Employee11_EmployedInformationService,
    private emp11_emp: Employee11_EmployedInformationService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private centralJobService: CentralJobService,
    private jobTitleService: JobTitleService,
    // private departmentService: DepartmentService,
    private sectionService: SectionService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
  }
  ngOnInit(): void {
    this.viewMode = 'tab11';
    this.getEmployee();
    this.getCentralJobs();
    this.getJobTitles();
    // this.getDepartments();
    this.getSections();
    this.getEmpEmployed();
    this.form = this.fb.group(
      {
        sectionId: ['', Validators.required],
        // jobId: ['', Validators.required],
        centralId: ['', Validators.required],
      }

    );


  }
  public getEmpEmployed() {
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp11_emp
      .getEmployedByEmployeeId(this.employeeId)
      .subscribe((response: any) => {
        this.employedInfo = response;

      });
  }
  public deleteEmployeeEmployed(empId) {
    Swal.fire({
      icon: 'info',
      title: 'هل انت متاكد من حذف السجل',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.emp11_emp.deleteEmployed(empId).subscribe(
          (response) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
            this.getEmpEmployed();
            this.viewMode = 'tab11';
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

          }
        );
      }

    });
  }
  public getEmployee(): void {
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId).subscribe(
      (data:any) => {
        this.employee = data;
        this.emp11.company.companyId = data.companies.companyId;

      },
      (error) => console.log(error)
    );
  }
  public getCode(): void {

    this.employedService.getcode(Number(this.emp11.company.companyId)).subscribe(
      (data) => {
        this.codeLength = data

      },
      (error) => console.log(error)
    );
  }
  public getCentralJobs(): void {
    this.centralJobService.getCentralJobs().subscribe(
      (response: CentralJob[]) => {

        this.centralJobs = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getJobTitles(): void {
    this.jobTitleService.getJobTitles().subscribe(
      (response: JobTitle[]) => {
        this.jobTitles = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getJobCodes(id): void {
    this.centralJobService.getCentralJobById(Number(id)).subscribe(
      (data:any) => {
        this.jobCode=data.jobCode
        this.emp11.employeeCode = this.jobCode;



        this.emp11.employeeCode += String(this.emp11.company.companyId).padStart(3, '0')+String(this.codeLength.length+1).padStart(3, '0')


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getSections(): void {
    this.sectionService.getSections().subscribe(
      (response: Section[]) => {
        this.sections = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }



  public onAddEmployeedInformation(): void {
    document.getElementById('add-EmployeedInformation-form')?.click();

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
      this.employee.employeePartCompanyId=this.emp11.employeeCode

      this.emp11_emp.add(this.emp11).subscribe(
        (response: Employee11_EmployedInformation) => {

      this.employeeService.update(this.employee).subscribe(
        (response: Employee11_EmployedInformation) => {


          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

          this.getEmpEmployed();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
          console.log(error);
        }
      );
      Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

          this.getEmpEmployed();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
          console.log(error);
        }
      );

  }

  changeEmployeeCode (event: any): void {

    this.emp11.employeeCode = this.jobCode;



    this.emp11.employeeCode += String(this.emp11.company.companyId).padStart(3, '0')+String(this.codeLength.length+1).padStart(3, '0')
  }
}
