import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Advance } from '../advance';
import { AdvanceService } from '../advance.service';

@Component({
  selector: 'app-advances-print',
  templateUrl: './advances-print.component.html',
  styleUrls: ['./advances-print.component.scss']
})
export class AdvancesPrintComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeNameAr',
    'submissionDate',
    'advanceAmount',
    'numberOfInstallment',
    'monthlyPayment',
    'stauts',

 ];

 advancesReject;
 advancesaprove;

 @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(
    private advanceService: AdvanceService,
    private router: Router,
    private translate: TranslateService

    ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getAdvancesRejrct();
    this.getAdvancesApprove();
  }

  public getAdvancesRejrct(): void {
    this.advanceService.Rejrct().subscribe((response:Advance[]) => {


        this.advancesReject = new MatTableDataSource(response);
        this.advancesReject.paginator =this.paginator;
        this.advancesReject.sort = this.matSort;



      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getAdvancesApprove(): void {
    this.advanceService.Approve().subscribe((response:Advance[]) => {

        this.advancesaprove = new MatTableDataSource(response);
        this.advancesaprove.paginator =this.paginator;
        this.advancesaprove.sort = this.matSort;



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
