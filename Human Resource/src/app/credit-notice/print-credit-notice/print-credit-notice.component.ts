import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {nArabicWords} from "narabicwords";
import * as convert from 'decimal-number-to-words'

import jsPDF from 'jspdf';
import { CompaniesService } from 'src/app/companies/companies.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { InvoiceItemsSalesInvoice } from 'src/app/sales-invoice/salesInvoiceItems';
import { environment } from 'src/environments/environment';
import { CreditNoticeService } from '../credit-notice.service';
import { CreditNotice, ItemsCreditNotice } from '../CreditNotice';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-print-credit-notice',
  templateUrl: './print-credit-notice.component.html',
  styleUrls: ['./print-credit-notice.component.scss']
})
export class PrintCreditNoticeComponent implements OnInit {
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
  creditNoticeData!: MatTableDataSource<ItemsCreditNotice>;
  invoiceId!: number;
  data;
  tafgeet
  tafgeetEn
  apiBaseUrl: string;
  constructor(private creditNoticeService:CreditNoticeService ,
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

    this.creditNoticeService.getItemsByCreditNoticeId(this.invoiceId).subscribe((response) => {
      console.log(response);

      this.creditNoticeData = new MatTableDataSource(response);
      this.data={
        creditNoticeNumber:response[0].creditNotice.creditNoticeNumber,
        cashAccount:response[0].creditNotice.cashAccount,
        type:response[0].creditNotice.creditNoticeType,
        date:response[0].creditNotice.date,
        customer:response[0].creditNotice.customer,
        amount:response[0].creditNotice.amount,
        tax:parseFloat(response[0].creditNotice.tax).toFixed(2),
        total:parseFloat(response[0].creditNotice.total).toFixed(2),


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

      this.creditNoticeData.paginator =this.paginator;
      this.creditNoticeData.sort = this.matSort;
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
    this.creditNoticeData.filter = $event.target.value;
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
      PDF.save(`emadadat-credit-notice-${this.data.creditNoticeNumber}-${this.data.customer.nameAr}.pdf`);
    });
  }

}
