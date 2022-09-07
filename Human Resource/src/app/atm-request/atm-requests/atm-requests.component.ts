import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import Swal from 'sweetalert2';
import { ATMCardRequest } from '../atm-request';
import { AtmRequestService } from '../atm-request.service';

@Component({
  selector: 'app-atm-requests',
  templateUrl: './atm-requests.component.html',
  styleUrls: ['./atm-requests.component.scss']
})
export class AtmRequestsComponent implements OnInit {


  displayedColumns: string[] = [
    'employeeName',
    // creditCardRequestId,
    'date',
    'reason',
    'actions'
  ]

  employees!: Employee[];
  ATMRequests!: MatTableDataSource<ATMCardRequest>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  employeeService: any;

  constructor(private atmRequestService : AtmRequestService,
    private router: Router,
    private translate: TranslateService) {
   this.translate.setDefaultLang('ar');
   const lang = localStorage.getItem('lang')  || 'ar';
   this.translate.use(lang);
   document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    this.getAllATMCardRequest();
  }
  public getAllATMCardRequest(): void {

    this.atmRequestService.getAllATMCardRequest().subscribe((response:ATMCardRequest[]) => {
      this.ATMRequests = new MatTableDataSource(response);
      this.ATMRequests.paginator =this.paginator;
      this.ATMRequests.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        }
      );
  }

  ngAfterViewInit() {}


  filterData($event: any){
    this.ATMRequests.filter = $event.target.value;

  }
  public onApprove(creditCardRequestId: number):void{
    this.router.navigate(['/operation/ATMRequest/approve-atm-request/', creditCardRequestId])
  }

  public onReject(creditCardRequestId: number):void
  {
  this.router.navigate(['/operation/ATMRequest/reject-atm-request', creditCardRequestId])
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

