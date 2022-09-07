import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CentralJob } from 'src/app/central-jobs/central-job';
import { CentralJobService } from 'src/app/central-jobs/central-job.service';
import Swal from 'sweetalert2';
import { JobTitle } from '../job-title';
import { JobTitleService } from '../job-title.service';

@Component({
  selector: 'app-edit-job-title',
  templateUrl: './edit-job-title.component.html',
  styleUrls: ['./edit-job-title.component.scss'],
})
export class EditJobTitleComponent implements OnInit {
  jobId!: number;
  jobTitle;
  jobTitles!: JobTitle[];
  centralJobs!: CentralJob[];

  jobTitleData = {
    jobId: '',
    jobTitleName: '',
    description: '',
    deleteFlag: 1,
    jobCode: '',
    // centralId:'',
    centralJob: {
      centralId: '',
    },
  };
  form: FormGroup = new FormGroup({
    jobTitleName: new FormControl(''),
    jobCode: new FormControl(''),
    centralId: new FormControl(''),
  });

  constructor(
    private jobTitleService: JobTitleService,
    private centralJobService: CentralJobService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getJobTitle();
    this.getCentralJobs();
    this.form = this.fb.group({
      jobTitleName: ['', [Validators.required, Validators.minLength(3)]],
      jobCode: ['', Validators.required],
      centralId: ['', Validators.required],
    });
  }

  goJobTitleList() {
    this.router.navigate(['/job-titles/job-titles']);
  }

  public getJobTitle() {
    this.jobId = this.activateRoute.snapshot.params['id'];
    this.jobTitleService.getJobTitleById(this.jobId).subscribe(
      (data) => {
        this.jobTitle = data;
        this.jobTitleData.jobCode = this.jobTitle.jobCode;
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
        //Swal.fire(error.message);
      }
    );
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onUpdateJobTitle(job: JobTitle) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.jobTitleService.updateJobTitle(this.jobTitle).subscribe(
      (data) => {
        Swal.fire(
          this.translate.instant('success'),
          this.translate.instant('DataisUpdated'),
          'success'
        );

        this.jobTitleService.getJobTitles();
        this.goJobTitleList();
      },
      (error) => {
        Swal.fire(
          this.translate.instant('Error'),
          this.translate.instant('ErrorwhileupdatingData'),
          'error'
        );
        console.log(error);
      }
    );
  }
}
