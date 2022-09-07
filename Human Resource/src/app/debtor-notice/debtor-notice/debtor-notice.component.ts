import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CompaniesService } from 'src/app/companies/companies.service';
import { CreditNotice } from 'src/app/credit-notice/CreditNotice';
import { CustomerService } from 'src/app/customer/customer.service';
import { DebtorNoticeService } from '../debtor-notice.service';
import { DebtorNotice } from '../DebtorNotice';

@Component({
  selector: 'app-debtor-notice',
  templateUrl: './debtor-notice.component.html',
  styleUrls: ['./debtor-notice.component.scss']
})
export class DebtorNoticeComponent implements OnInit {

  displayedColumns: string[] = [
    'noticeNumber',
    'customerName',

    'creditNoticevalue',
    'creditNoticeDate',
    'details',
    'actions',
  ];
    @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  DebtorNoticess!: MatTableDataSource<DebtorNotice>;

  constructor(private DebtorNoticesservice:DebtorNoticeService ,
    private companiesService: CompaniesService,
    private customerService:CustomerService ,
     private router: Router,
     public fb: FormBuilder, // Form Builder service for Reactive forms

      private translate: TranslateService){

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit(): void {
    this.getCreditNoticeAll();
  }




 public getCreditNoticeAll(): void {

    this.DebtorNoticesservice.getAllDebtorNotice().subscribe((response) => {
      this.DebtorNoticess = new MatTableDataSource(response);
      this.DebtorNoticess.paginator =this.paginator;
      this.DebtorNoticess.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }


  ngAfterViewInit() {}

  public onEditcreditNoticeById(debtorNoticeId: number): void {
    this.router.navigate(['/accounts/debtorNotice/edit-debtorNotice', debtorNoticeId])
  }

  public onDeletecreditNoticeById(debtorNoticeId: number):void{
    this.router.navigate(['/accounts/debtorNotice/delete-debtorNotice', debtorNoticeId])
  }
  public onPrintById(debtorNoticeId: number):void{
    this.router.navigate(['/accounts/debtorNotice/print-debtorNotice', debtorNoticeId])
  }

  filterData($event: any){
    this.DebtorNoticess.filter = $event.target.value;
  }


}





