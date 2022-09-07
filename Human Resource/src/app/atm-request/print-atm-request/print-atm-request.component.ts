import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ATMCardRequest } from '../atm-request';
import { AtmRequestService } from '../atm-request.service';

@Component({
  selector: 'app-print-atm-request',
  templateUrl: './print-atm-request.component.html',
  styleUrls: ['./print-atm-request.component.scss']
})
export class PrintAtmRequestComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeName',
    'date',
    'reason',
  
  ]
  aTMCardRequest!: MatTableDataSource<ATMCardRequest>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private atmRequestService : AtmRequestService,
    private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
     }

  ngOnInit(): void {
    this.getAllATMCardRequest();
  }

    
  public getAllATMCardRequest(): void {
    this.atmRequestService.getAllATMCardRequest().subscribe(
      (response:any) => {
      this.aTMCardRequest = new MatTableDataSource(response);
      this.aTMCardRequest.paginator =this.paginator;
      this.aTMCardRequest.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );
  }


  printPage() {
    window.print();
  }
  ngAfterViewInit() {}
  
  filterData($event: any){
    this.aTMCardRequest.filter = $event.target.value;
  }
}













   



