import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JobTitle } from '../job-title';
import { JobTitleService } from '../job-title.service';
import { CentralJobService } from 'src/app/central-jobs/central-job.service';
import { CentralJob } from 'src/app/central-jobs/central-job';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-job-titles',
  templateUrl: './job-titles.component.html',
  styleUrls: ['./job-titles.component.scss'],
})
export class JobTitlesComponent implements OnInit {
  displayedColumns: string[] = [
    'JobTitleName',
    'centralJob',
    'jobCode',
    'actions',
  ];

  // jobTitleData = {
  //     jobTitleName: '',
  //     description:  '',
  //     deleteFlag: 1,
  //     centralJob:  {
  //       centralId:'',
  //   },

  // };

  jobTitles!: MatTableDataSource<JobTitle>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private jobTitleService: JobTitleService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getAlljobTitles();
    //this.getCentralJobs();
  }

  public getAlljobTitles(): void {
    this.jobTitleService.getJobTitles().subscribe(
      (response: JobTitle[]) => {
        this.jobTitles = new MatTableDataSource(response);
        this.jobTitles.paginator = this.paginator;
        this.jobTitles.sort = this.matSort;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  ngAfterViewInit() {}

  public onEditJobTitleById(jobId: number): void {
    this.router.navigate(['/job-titles/edit-job-title', jobId]);
  }

  public onEditToDeleteJobTitleById(jobId: number): void {
    this.router.navigate(['/job-titles/delete-job-title', jobId]);
  }

  filterData($event: any) {
    this.jobTitles.filter = $event.target.value;
  }
}
