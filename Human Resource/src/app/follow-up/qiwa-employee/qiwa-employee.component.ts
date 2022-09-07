import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FollowupService } from '../followup.service';
import { QiwaContracts } from '../qiwacontracts';

@Component({
  selector: 'app-qiwa-employee',
  templateUrl: './qiwa-employee.component.html',
  styleUrls: ['./qiwa-employee.component.scss']
})
export class QiwaEmployeeComponent implements OnInit {

  displayedColumns: string[] = [
   'employeeName',
    'contractType',
    'dateFrom',
    'dateTo',
    'companyName',
    'qiwaCode',

  ];
  qiwa!: MatTableDataSource<QiwaContracts>;
  // currentBanks!: MatTableDataSource<Bank>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private service: FollowupService, private router: Router , private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllQiwaEmployee();
   // this.getCurrentBanks();
  }



  public getAllQiwaEmployee(): void {

    this.service.getQiwaEmployee().subscribe((response:QiwaContracts[]) => {
      this.qiwa = new MatTableDataSource(response);

      this.qiwa.paginator =this.paginator;
      this.qiwa.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
      // let resp = this.bankService.getBanks();
      // resp.subscribe(report => this.dataSource.data=report as Bank[]);

    //   (response: Bank[]) => {
    //     this.banks = response;

    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );


  }


  ngAfterViewInit() {}




  filterData($event: any){
    this.qiwa.filter = $event.target.value;
  }
}
