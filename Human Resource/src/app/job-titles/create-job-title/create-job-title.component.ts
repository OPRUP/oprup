import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CentralJob } from 'src/app/central-jobs/central-job';
import { CentralJobService } from 'src/app/central-jobs/central-job.service';
import Swal from 'sweetalert2';
import { JobTitle } from '../job-title';
import { JobTitleService } from '../job-title.service';
@Component({
  selector: 'app-create-job-title',
  templateUrl: './create-job-title.component.html',
  styleUrls: ['./create-job-title.component.scss']
})
export class CreateJobTitleComponent implements OnInit {

  jobTitleData = {
      jobId: '',
      jobTitleName: '',
      description:  '',
      deleteFlag: 1,
      jobCode:'',
      centralJobs:{
          centralId:'',
          centralJobName: '',
          description:'',
          deleteFlag: '',

      },
  };
  form: FormGroup = new FormGroup({
    jobTitleName: new FormControl(''),
    jobCode: new FormControl(''),
    centralId: new FormControl(''),
     });



  centralId ;
  jobTitle!: JobTitle[];
  centralJobs!: CentralJob[];



  constructor(private jobTitleService : JobTitleService,
    private centralJobService: CentralJobService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router, private translate: TranslateService){
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getCentralJobs();

    this.form = this.fb.group(
      {
        jobTitleName:['', Validators.required],
        jobCode:['', Validators.required],
        centralId:['', Validators.required],

      }

    );


  }

  goJobtitleList(){
    this.router.navigate(['/job-titles/job-titles'])
  }

  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

  public onAddJobtitle(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
      this.centralJobService
      this.jobTitleService.addJobTitle(this.jobTitleData).subscribe(
      (response: JobTitle) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.jobTitleService.getJobTitles();
        this.goJobtitleList();
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
    );


  }

  public getCentralJobs(): void{
    this.centralJobService.getCentralJobs().subscribe((response:CentralJob[]) => {
      this.centralJobs = response;
  
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }


}
