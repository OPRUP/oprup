import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeService } from '../employee.service';
// import { EmployeeImageProfileService, EmployeeService } from '../employee.service';
import { Employee, Employee08_BankAccount, Employee11_EmployedInformation } from '../employee';
import { CentralJobService } from 'src/app/central-jobs/central-job.service';
import { DepartmentService } from 'src/app/departments/department.service';
import { JobTitleService } from 'src/app/job-titles/job-title.service';
import { SectionService } from 'src/app/sections/section.service';
import { Employee11_EmployedInformationService } from '../Employee11_EmployedInformation.service';
import { CentralJob } from 'src/app/central-jobs/central-job';
import { Department } from 'src/app/departments/department';
import { JobTitle } from 'src/app/job-titles/job-title';
import { Section } from 'src/app/sections/section';
import { TranslateService } from '@ngx-translate/core';
import { Employee10_HealthInsuranceService } from '../Employee10_hokome.service';
import { Employee08_BankAccountService } from '../Employee08_BankAccount.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeeId!: number;
  employee!: Employee;
  empBank!: Employee08_BankAccount[];
  employees!: Employee[];
  centralJobs!: CentralJob[];
  jobTitles!: JobTitle[];
  departments!: Department[];
  sections!: Section[];
  employedInfo!: Employee11_EmployedInformation[];
  emp11 = {
    empId: '',
    employee:{
      employeeId:'',
    },
    department:{
      departmentId:'',
    },
    section:{
      sectionId:'',
    },
    centralJob:{
      centralId:'',
    },
    jobTitle:{
      jobId:'',
    },
    deleteFlag: 1,

  };

  constructor(private employeeService: EmployeeService,
    private emp11_emp: Employee11_EmployedInformationService,
    private centralJobService: CentralJobService,
    private jobTitleService: JobTitleService,
    private departmentService: DepartmentService,
    private sectionService: SectionService,
    private translate: TranslateService,
    private hokomeService:Employee10_HealthInsuranceService,
    private bankService:Employee08_BankAccountService,

    ) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    }

  ngOnInit() {
    this.getEmployee();
    this.getCentralJobs();
    this.getJobTitles();
    this.getDepartments();
    this.getSections();
    this.getEmpEmployed();
  }
  public getEmpEmployed(){
    this.emp11_emp.get().subscribe(
      (response:any) => {
        this.employedInfo = response;

      },
    )
  }
  public getEmployee(): void{

    this.employeeService.get()
    .subscribe(data => {
      this.employees = data;
      this.employees.forEach(element=>{

        this.hokomeService.getHealthByEmployeeId(Number(element.employeeId)).subscribe(res=>{
          if(element.residenceNumber !=undefined ||  element.residenceNumber !=''){
            element.residenceNumber=res[0].residenceNumber
          }
          if(element.residenceNumber==undefined){
            element.residenceNumber=''
          }
        })
        this.bankService.getBankByEmployeeId(Number(element.employeeId)).subscribe(res=>{
          if( element.bankBranch!=undefined || element.bankBranch!='')
          element.bankBranch=res[0].bankBranch
          else{
            element.bankBranch=''
          }
        })
      })
    }, error => console.log(error));
  }

  public getCentralJobs(): void{
    this.centralJobService.getCentralJobs().subscribe(
      (response:CentralJob[]) => {
      this.centralJobs = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }

  public getJobTitles(): void{
    this.jobTitleService.getJobTitles().subscribe(
      (response:JobTitle[]) => {
      this.jobTitles = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
  public getDepartments(): void{
    this.departmentService.getDepartments().subscribe(
      (response:Department[]) => {
      this.departments = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
  public getSections(): void{
    this.sectionService.getSections().subscribe(
      (response:Section[]) => {
      this.sections = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
      }
    )
  }





  public getEmployees(): void{
    this.employeeService.get().subscribe(
      (data:Employee[]) => {
      this.employees = data;

    },
    (error) => {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
      console.log(error);
    }
    )
  }

  public searchEmployees(key: string): void {
    const results: Employee[] = [];

    for (const employee of this.employees) {
      if (
        employee.employeeName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.employeeNameAr.toLowerCase().indexOf(key.toLowerCase()) !==-1
        //   -1 ||
        // employee.residenceNumber.toLowerCase().indexOf(key.toLowerCase()) !==
        //   -1 ||
        // employee.employeeCompanyId.toLowerCase().indexOf(key.toLowerCase()) !==
        //   -1
        // || employee.companies.companyName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }
  filterData($event: any){
    this.employees.filter = $event.target.value;
  }


}
