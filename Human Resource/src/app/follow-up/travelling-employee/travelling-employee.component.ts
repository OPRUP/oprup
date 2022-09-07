import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { FollowupService } from '../followup.service';

@Component({
  selector: 'app-travelling-employee',
  templateUrl: './travelling-employee.component.html',
  styleUrls: ['./travelling-employee.component.scss']
})
export class TravellingEmployeeComponent implements OnInit {
  travellingEmp:any;
  finalExitEmp:any;
  ExistEmp:any;
  displayedColumns: string[] = [
    'employeeName',
    'employeeNameAr',
    'nationality',
    'habitationName',
    'travilinDate',
    'companyName',
    'backDate',
    'placeOfBirth'
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
    this.getAllTravellingEmployee();
    this.getAllFinalExitEmployee();
    this.getAllExistEmployee();
  }

  public getAllTravellingEmployee(): void {

    this.service.getTravellingEmployee().subscribe(response => {
      this.travellingEmp = response;
      this.travellingEmp.paginator =this.paginator;
      this.travellingEmp.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');

        }
      );

  }
  public getAllFinalExitEmployee(): void {

    this.service.getFinalExitEmployee().subscribe(response => {
      this.finalExitEmp = response;
      this.finalExitEmp.paginator =this.paginator;
      this.finalExitEmp.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');

        }
      );

  }
  public getAllExistEmployee(): void {

    this.service.getAllExistEmployee().subscribe(response => {
      this.ExistEmp = response;
      this.ExistEmp.paginator =this.paginator;
      this.ExistEmp.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');

        }
      );

  }

}
