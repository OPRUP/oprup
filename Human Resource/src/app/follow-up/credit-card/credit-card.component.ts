import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BankService } from 'src/app/banks/bank.service';
import { Bank } from '../bank';
import { FollowupService } from '../followup.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  displayedColumns: string[] = [

    'employeeName',
    'creditCardNumber',
    'creditCardExpiry',
    'companyName',
  ];

  banks!: MatTableDataSource<Bank>;
  banks2!: MatTableDataSource<Bank>;
  // currentBanks!: MatTableDataSource<Bank>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private cardService: FollowupService,private bankService:BankService, private router: Router , private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCrditcard();
    this.getAllgetCreditCardsHaveNotYetBeenIssued();
   // this.getCurrentBanks();
  }



  public getAllCrditcard(): void {

    this.cardService.getCreditCard().subscribe((response:Bank[]) => {
      this.banks = new MatTableDataSource(response);
      this.banks.paginator =this.paginator;
      this.banks.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  public getAllgetCreditCardsHaveNotYetBeenIssued(): void {

    this.cardService.getCreditCardsHaveNotYetBeenIssued().subscribe((response:Bank[]) => {
      this.banks2 = new MatTableDataSource(response);
      this.banks2.paginator =this.paginator;
      this.banks2.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }
  

  ngAfterViewInit() {}

  filterData($event: any){
    this.banks.filter = $event.target.value;
  }
}
