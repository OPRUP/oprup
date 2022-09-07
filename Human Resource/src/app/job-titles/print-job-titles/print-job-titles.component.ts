import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { JobTitle } from '../job-title';
import { JobTitleService } from '../job-title.service';

@Component({
  selector: 'app-print-job-titles',
  templateUrl: './print-job-titles.component.html',
  styleUrls: ['./print-job-titles.component.scss'],
})
export class PrintJobTitlesComponent implements OnInit {
  displayedColumns: string[] = ['jobId', 'JobTitleName', 'centralJob'];
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
  jobTitles!: MatTableDataSource<JobTitle>;
  ngOnInit(): void {
    this.getAlljobTitles();
  }
  public getAlljobTitles(): void {
    this.jobTitleService.getJobTitles().subscribe(
      (response: JobTitle[]) => {
        this.jobTitles = new MatTableDataSource(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  printPage() {
    window.print();
  }
}
