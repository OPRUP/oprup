import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-print-top-management',
  templateUrl: './print-top-management.component.html',
  styleUrls: ['./print-top-management.component.css']
})
export class PrintTopManagementComponent implements OnInit {
  topmanagements!: TopManagement[];
  displayedColumns: string[] = [
    'companyName',
    'commercialId',
    'dateStart',
    'dataEnding',
    'licenseId',
  ];

  topManagements!: MatTableDataSource<TopManagement>;
  constructor(private topManagementsService: TopManagementsService,
    private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }
  ngOnInit(): void {
    this.getAllTopManagements();
  }
  public getAllTopManagements(): void {

    this.topManagementsService.get().subscribe((response:TopManagement[]) => {
      this.topManagements = new MatTableDataSource(response);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }
  printPage() {

    window.print();
  }
}
