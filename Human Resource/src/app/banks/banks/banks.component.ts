import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {

  displayedColumns: string[] = [
    // 'bankId',
    'bankName',
    'description',
    // 'deleteFlag',
    'actions',
  ];
  banks!: MatTableDataSource<Bank>;
  // currentBanks!: MatTableDataSource<Bank>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private bankService: BankService, private router: Router , private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllBanks();
   // this.getCurrentBanks();
  }



  public getAllBanks(): void {

    this.bankService.getBanks().subscribe((response:Bank[]) => {
      this.banks = new MatTableDataSource(response);
      this.banks.paginator =this.paginator;
      this.banks.sort = this.matSort;
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



  public onEditBankById(bankId: number): void {
    this.router.navigate(['/banks/edit-bank', bankId])
  }


  public onEditToDeleteBankById(bankId: number):void{
    this.router.navigate(['/banks/delete-bank', bankId])
  }

  filterData($event: any){
    this.banks.filter = $event.target.value;
  }

}

