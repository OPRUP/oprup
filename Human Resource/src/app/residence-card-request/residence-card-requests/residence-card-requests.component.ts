
import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import Swal from 'sweetalert2';
import { ResidenceCardRequest } from '../residence-card-request';
import { ResidenceCardRequestService } from '../residence-card-request.service';


@Component({
  selector: 'app-residence-card-requests',
  templateUrl: './residence-card-requests.component.html',
  styleUrls: ['./residence-card-requests.component.scss']
})
export class ResidenceCardRequestsComponent implements OnInit {


  displayedColumns: string[] = [
    'employeeName',
    // 'residenceCardRequestId',
    'date',
    'reason',
    'actions'
  ]

  employees!: Employee[];
  ResidenceRequests!: MatTableDataSource<ResidenceCardRequest>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  employeeService: any;

  constructor(private residenceCardRequestService : ResidenceCardRequestService,
    private router: Router,
    private translate: TranslateService) {
   this.translate.setDefaultLang('ar');
   const lang = localStorage.getItem('lang')  || 'ar';
   this.translate.use(lang);
   document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    this.getAllResidenceCardRequest();
  }
  public getAllResidenceCardRequest(): void {

    this.residenceCardRequestService.getAllResidenceCardRequest().subscribe((response:ResidenceCardRequest[]) => {
      this.ResidenceRequests = new MatTableDataSource(response);
      this.ResidenceRequests.paginator =this.paginator;
      this.ResidenceRequests.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire(this.translate.instant('Error'), this.translate.instant('Errorinloadingdata'), 'error')

        }
      );
  }

  ngAfterViewInit() {}


  filterData($event: any){
    this.ResidenceRequests.filter = $event.target.value;

  }
  public onApprove(residenceCardRequestId: number):void{
    // ResidenceCard/residence-card-requests
    this.router.navigate(['/operation/ResidenceCard/approve-residence-card/',  residenceCardRequestId]);

  }

  public onReject(residenceCardRequestId: number):void
  {
  this.router.navigate(['/operation/ResidenceCard/reject-residence-card/', residenceCardRequestId])
  }

  public getEmployees(): void{
    this.employeeService.get().subscribe(
      (data:Employee[]) => {
      this.employees = data;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }




}

