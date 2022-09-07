import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CompaniesService } from 'src/app/companies/companies.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { CreditNoticeService } from '../credit-notice.service';
import { CreditNotice } from '../CreditNotice';

@Component({
  selector: 'app-credit-notice',
  templateUrl: './credit-notice.component.html',
  styleUrls: ['./credit-notice.component.scss']
})
export class CreditNoticeComponent implements OnInit {
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
  creditNotices!: MatTableDataSource<CreditNotice>;

  constructor(private creditNoticeService:CreditNoticeService ,
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

    this.creditNoticeService.getAllCreditNotice().subscribe((response:CreditNotice[]) => {
      this.creditNotices = new MatTableDataSource(response);
      this.creditNotices.paginator =this.paginator;
      this.creditNotices.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }


  ngAfterViewInit() {}

  public onEditcreditNoticeById(creditNoticeId: number): void {
    this.router.navigate(['/accounts/creditNotice/edit-creditNotice', creditNoticeId])
  }

  public onDeletecreditNoticeById(creditNoticeId: number):void{
    this.router.navigate(['/accounts/creditNotice/delete-creditNotice', creditNoticeId])
  }
  public onPrintById(creditNoticeId: number):void{
    this.router.navigate(['/accounts/creditNotice/print-creditNotice', creditNoticeId])
  }

  filterData($event: any){
    this.creditNotices.filter = $event.target.value;
  }


}





