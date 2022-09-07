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
  selector: 'app-print-job',
  templateUrl: './print-job.component.html',
  styleUrls: ['./print-job.component.scss']
})
export class PrintJobComponent implements OnInit {

  displayedColumns = [
    'jobTitle',
    'nationality',
    'mainSalary',
    'allowance',
    'directSupervisor',
    'internalExternal',
    
  ];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  job!: MatTableDataSource<Job>;

  constructor(private jobService:JobService ,
    private router: Router ,
     public translate: TranslateService) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang; }

  ngOnInit(): void {
    this.getAlljobs()

  }
  public getAlljobs(): void {

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


        printPage() {

          window.print();
        }
  ngAfterViewInit() {}


  

  filterData($event: any){
    this.job.filter = $event.target.value;
  }
  }


