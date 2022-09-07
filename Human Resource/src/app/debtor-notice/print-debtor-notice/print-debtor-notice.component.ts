import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CompaniesService } from 'src/app/companies/companies.service';
import { ItemsCreditNotice } from 'src/app/credit-notice/CreditNotice';
import { CustomerService } from 'src/app/customer/customer.service';
import { environment } from 'src/environments/environment';
import { DebtorNoticeService } from '../debtor-notice.service';
import {nArabicWords} from "narabicwords";
import * as convert from 'decimal-number-to-words'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-print-debtor-notice',
  templateUrl: './print-debtor-notice.component.html',
  styleUrls: ['./print-debtor-notice.component.scss']
})
export class PrintDebtorNoticeComponent implements OnInit {

  @ViewChild('invoice') invoiceElement!: ElementRef;
  pdfTable!: ElementRef;
  displayedColumns = [
    'itemCode',
    'itemNameAr',
    'gender',
    'nationality',
    'salary',
    'foodAllowance',
    'housingAllowance',
    'OtherAllowance',
    'numberOfEmployees',
    'operationFee',
    'salesInvoiceItemValue',
    'taxRate',
    'salesInvoiceItemTotal',
    'monthlyOperationFee',
    'profession',
  ];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  debtorNoticeData!: MatTableDataSource<ItemsCreditNotice>;
  invoiceId!: number;
  data;
  tafgeet
  tafgeetEn
  apiBaseUrl: string;
  constructor(private debitNoticeService:DebtorNoticeService ,
    private router: Router,
    private activateRoute: ActivatedRoute,
         private translate: TranslateService) {
          this.apiBaseUrl = environment.apiBaseUrl;

      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
      }

  ngOnInit(): void {
    this.getAllItems()

  }

  public getAllItems(): void {
    this.invoiceId = this.activateRoute.snapshot.params['id'];

    this.debitNoticeService.getItemsByDebtorNoticeId(this.invoiceId).subscribe((response) => {
      console.log(response);

      this.debtorNoticeData = new MatTableDataSource(response);
      this.data={
        debtorNoticeNumber:response[0].debtorNotice.debtorNoticeNumber,
        cashAccount:response[0].debtorNotice.cashAccount,
        type:response[0].debtorNotice.debtorNoticeType,
        date:response[0].debtorNotice.date,
        customer:response[0].debtorNotice.customer,
        amount:response[0].debtorNotice.amount,
        tax:parseFloat(response[0].debtorNotice.tax).toFixed(2),
        total:parseFloat(response[0].debtorNotice.total).toFixed(2),


      }
      console.log(this.data)
      if(this.data.total.toString().indexOf('.')!=-1){
      this.tafgeet=nArabicWords(this.data.total.toString().slice(0,this.data.total.toString().indexOf('.')),{TextToFollow:"on"}) +" ريال سعودي فقط لا غير"
    this.tafgeetEn=convert.toWords(this.data.total.toString().slice(0,this.data.total.toString().indexOf('.')))+" Saudi Riyals Only"
    }
      else{
        this.tafgeet=nArabicWords(this.data.total.toString(),{TextToFollow:"on"}) +" ريال سعودي فقط لا غير"
        this.tafgeetEn=convert.toWords(this.data.total.toString())+" Saudi Riyals Only"
      }
      console.log('data',this.data);

      this.debtorNoticeData.paginator =this.paginator;
      this.debtorNoticeData.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }


        printPage() {

          window.print();
        }
  ngAfterViewInit() {}




  filterData($event: any){
    this.debtorNoticeData.filter = $event.target.value;
  }
  public generatePDF(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale: 3,allowTaint:true,useCORS:true }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/PNG');

      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      console.log(imageGeneratedFromTemplate);


       PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save(`emadadat-debtor-notice-${this.data.debtorNoticeNumber}-${this.data.customer.nameAr}.pdf`);
    });
  }

}
