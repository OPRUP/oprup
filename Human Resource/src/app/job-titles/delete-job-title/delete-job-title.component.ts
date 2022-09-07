import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { JobTitle } from '../job-title';
import { JobTitleService } from '../job-title.service';

@Component({
  selector: 'app-delete-job-title',
  templateUrl: './delete-job-title.component.html',
  styleUrls: ['./delete-job-title.component.scss'],
})
export class DeleteJobTitleComponent implements OnInit {
  jobId!: number;
  jobTitle;
  jobTitles!: JobTitle[];

  jobTitleData = {
    jobId: '',
    jobTitleName: '',
    description: '',
    deleteFlag: 1,
    centralJobs: {
      centralId: '',
    },
  };

  constructor(
    private jobTitleService: JobTitleService,
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
  }

  public getJobTitle() {
    this.jobId = this.activateRoute.snapshot.params['id'];
    this.jobTitleService.getJobTitleById(this.jobId).subscribe(
      (data) => {
        this.jobTitle = data;
      },
      (error) => console.log(error)
    );
  }

  public onDeleteJobTitle(jobTitle: JobTitle) {
    this.jobTitleService.deleteJobTitle(jobTitle).subscribe(
      (data) => {
        Swal.fire(
          this.translate.instant('success'),
          this.translate.instant('DataisDeleted'),
          'success'
        );

        this.goJobTitleList();
      },
      (error) => {
        Swal.fire(
          this.translate.instant('Error'),
          this.translate.instant('ErrorwhiledeletingData'),
          'error'
        );

        console.log(error);
      }
    );
  }

  goJobTitleList() {
    this.router.navigate(['/job-titles/job-titles']);
  }
}
