import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FollowupService } from '../followup.service';

@Component({
  selector: 'app-pass-ports-expires',
  templateUrl: './pass-ports-expires.component.html',
  styleUrls: ['./pass-ports-expires.component.scss']
})
export class PassPortsExpiresComponent implements OnInit {
  displayedColumns: string[] = [
    'employeeName',
    'employeeNameAr',
    'companyName',
    'nationality',
    'passportNumber',
    'passportExpiry',
  ]

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(public service:FollowupService,private router: Router, private translate: TranslateService ) { 
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;  
  }

  ngOnInit(): void {
    this.service.getPassPortExpiryInMonth();
    this.service.getPassPortExpiryInTwoMonth();
    this.service.getPassPortExpiryInThreeMonth();
    this.service.getPassPortExpiryInFourMonth();
  }

 
}
