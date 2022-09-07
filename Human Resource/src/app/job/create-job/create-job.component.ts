import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Job } from '../job';
import { JobService } from '../job.service';
import countries from '../../_files/countries.json';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  job!: Job[];
  jobData = {
    jobId: '',
    internalExternal:'',
    jobTitle: '',
    nationality:'',
    mainSalary: '',
    allowance: '',
    directSupervisor: {
      employeeId: '',
    },
    deleteFlag: 1,
  };
  employee;
  countryList:{name:String,code:String}[]=countries


  form: FormGroup = new FormGroup({
    jobTitle: new FormControl(''),
    nationality: new FormControl(''),
    mainSalary: new FormControl(''),
    allowance: new FormControl(''),
    directSupervisor: new FormControl(''),
    internalExternal: new FormControl(''),
  });

  constructor(
    private jobService: JobService,
    private employeeService: EmployeeService,
    private router: Router,
    private translate: TranslateService,
    public fb: FormBuilder,

  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    this.getAllEmployees();
    this.form = this.fb.group(
      {
        jobTitle:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        nationality:['',[Validators.required]],
        mainSalary: ['',[Validators.required]],
        allowance: ['',[Validators.required]],
        directSupervisor: ['',[Validators.required]],
        internalExternal: ['',[Validators.required]],
        //email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        // contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]],
        //contactNumber: ['',[Validators.required,Validators.pattern('(0|00962)?[7-9][0-9]{8}')]]
       // 1) Begins with 0 or 00962
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits


      }

    );
  }
  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }
  goJobList() {
    this.router.navigate(['/international/job/job']);
  }
  public onAddJob(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
      this.jobService.addJob(this.jobData).subscribe(
        (response: Job) => {
          Swal.fire('Success', 'Job is added', 'success');
          this.jobService.getAllJobs();
          this.goJobList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);

          Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
        }
      );

  }
  public getAllEmployees(): void {
    this.employeeService.get().subscribe(
      (response: Employee[]) => {
        this.employee = response;
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
