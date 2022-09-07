import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { JournalVoucher } from '../jour-voucher';
import { JournalVoucherService } from '../jour-voucher.service';

@Component({
  selector: 'app-jour-voucher',
  templateUrl: './jour-voucher.component.html',
  styleUrls: ['./jour-voucher.component.scss']
})
export class JourVoucherComponent implements OnInit {
  displayedColumns: string[] = [
    'journalVoucherNumber',
    'dateVoucher',
    'actions',
  ];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  JournalVouchers!: MatTableDataSource<JournalVoucher>;
  constructor(private journalVoucherService: JournalVoucherService,
    private router: Router ,
    private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang; }

  ngOnInit() {
    this.getAllJournalVoucher();
  }
  public getAllJournalVoucher(): void {

    this.journalVoucherService.getAllJournalVoucher().subscribe((response) => {
      this.JournalVouchers = new MatTableDataSource(response);
      this.JournalVouchers.paginator =this.paginator;
      this.JournalVouchers.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }
        ngAfterViewInit() {}
      
        public onEditJournalVoucherById(journalVoucherId: number): void {
          this.router.navigate(['/accounts/jour-voucher/edit-jour-voucher', journalVoucherId])
        }

        public onDeleteJournalVoucherById(journalVoucherId: number):void{
          this.router.navigate(['/accounts/jour-voucher/delete-jour-voucher', journalVoucherId])
        }

        public onPrintById(journalVoucherId: number):void{
          this.router.navigate(['/accounts/jour-voucher/print-jour-voucher', journalVoucherId])
        }



        filterData($event: any){
          this.JournalVouchers.filter = $event.target.depit;
          this.JournalVouchers.filter = $event.target.credit;
        }


}
