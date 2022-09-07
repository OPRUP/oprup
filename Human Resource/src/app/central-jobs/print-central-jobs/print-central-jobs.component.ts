import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';

@Component({
  selector: 'app-print-central-jobs',
  templateUrl: './print-central-jobs.component.html',
  styleUrls: ['./print-central-jobs.component.scss']
})
export class PrintCentralJobsComponent implements OnInit {
  displayedColumns: string[] = [
    // 'centralId',
    'centralJobName',
    'jobCode',
    'description',
    // 'deleteFlag',
  ];
  centralJobs!: MatTableDataSource<CentralJob>;

  constructor(private centralJobService: CentralJobService, private router: Router,private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCentralJobs();
  }
  public getAllCentralJobs(): void {

    this.centralJobService.getCentralJobs().subscribe((response:CentralJob[]) => {
      this.centralJobs = new MatTableDataSource(response);

      },
      (error)  =>
      {
        console.log(error);
      }
      );
  }

  printPage() {

    window.print();
  }
}
