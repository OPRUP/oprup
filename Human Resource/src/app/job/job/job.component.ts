import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  displayedColumns = [
    'jobTitle',
    'nationality',
    'mainSalary',
    'allowance',
    'directSupervisor',
    'internalExternal',
    'actions',
  ];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  job!: MatTableDataSource<Job>;

  constructor(private jobService:JobService ,
    private router: Router ,
     private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
      }
      ngOnInit(): void {
        this.getAllJobs()
      }
      public getAllJobs(): void {

        this.jobService.getAllJobs().subscribe((response:Job[]) => {
          this.job = new MatTableDataSource(response);
          this.job.paginator =this.paginator;
          this.job.sort = this.matSort;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
          );
            }


      ngAfterViewInit() {}


      public onEditJobById(jobId: number): void {
        this.router.navigate(['/international/job/edit-job', jobId])
      }


      public onDeleteJobById(jobId: number):void{
        this.router.navigate(['international/job/delete-job/', jobId])
      }

      filterData($event: any){
        this.job.filter = $event.target.value;
      }

}
