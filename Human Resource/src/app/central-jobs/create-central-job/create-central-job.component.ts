import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'ng2-charts';
import Swal from 'sweetalert2';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';

@Component({
  selector: 'app-create-central-job',
  templateUrl: './create-central-job.component.html',
  styleUrls: ['./create-central-job.component.scss'],
})
export class CreateCentralJobComponent implements OnInit {
  centralJobs!: CentralJob[];
  snackBar!: MatSnackBar;
  centralJobData = {
    centralId: '',
    centralJobName: '',
    description: '',
    jobCode: '',
    deleteFlag: 1,
    //   jobTitles:  {
    //   jobId:'',
    // },
  };

  form: FormGroup = new FormGroup({
    centralJobName: new FormControl(''),
    jobCode: new FormControl(''),

  });

  constructor(
    private centralJobService: CentralJobService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.form = this.fb.group({
      centralJobName: ['', Validators.required],
      jobCode: ['', Validators.required],

    });
  }

  goCentralJobList() {
    this.router.navigate(['/central-jobs/central-jobs']);
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddCentralJob(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.centralJobService.addCentralJob(this.centralJobData).subscribe(
      (data: CentralJob) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.centralJobService.getCentralJobs();
        this.goCentralJobList();
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
    );
  }
}
