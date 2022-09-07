import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { FollowUpRoutingModule } from '../follow-up-routing.module';
import { FollowupService } from '../followup.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.scss']
})
export class ResidenceComponent implements OnInit {
  displayedColumns: string[] = [
    'employeeName',
    'employeeNameAr',
    'residenceName',
    'residenceNumber',
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
    this.service.getResidenceExpiryInWeek();
    this.service.getResidenceExpiryInTwoWeek();
    this.service.getResidenceExpiryInThreeWeek();
    this.service.getResidenceExpiryInFourWeek();
  }

}
