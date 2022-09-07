import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {nArabicWords} from "narabicwords";
import * as convert from 'decimal-number-to-words'
import { CurrencyPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import { ItemsserviceService } from 'src/app/items/items.service';
import { ProjectEmdadateService } from 'src/app/project-emdadat/project-emdadate.service';
import { Store } from 'src/app/store/store';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { InvoiceItems, SalesInvoice } from '../sales-invoice';
import { salesInvoiceService } from '../sales-invoice.service';
import { InvoiceItemsSalesInvoice } from '../salesInvoiceItems';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-print-salesinvoice',
  templateUrl: './print-salesinvoice.component.html',
  styleUrls: ['./print-salesinvoice.component.scss']
})
export class PrintSalesinvoiceComponent implements OnInit {
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
  salesInoviceData!: MatTableDataSource<InvoiceItemsSalesInvoice>;
  invoiceId!: number;
  data;
  tafgeet
  tafgeetEn
  apiBaseUrl: string;
  constructor(private salesInvoiceService:salesInvoiceService ,
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

    this.salesInvoiceService.getInvoiceItemsByInvocieId(this.invoiceId).subscribe((response) => {
      console.log(response);

      this.salesInoviceData = new MatTableDataSource(response);
      this.data={
        salesInvoiceNumber:response[0].salesInvoice.salesInvoiceNumber,
        taxNumber:response[0].salesInvoice.taxNumber,
        cashAccount:response[0].salesInvoice.cashAccount,
        date:response[0].salesInvoice.date,
        customer:response[0].salesInvoice.customer,
        amount:response[0].salesInvoice.amount,
        tax:parseFloat(response[0].salesInvoice.tax).toFixed(2),
        total:parseFloat(response[0].salesInvoice.total).toFixed(2),


      }
      console.log(this.data.total.toString().slice(0,this.data.total.toString().indexOf('.')));
      if(this.data.total.toString().indexOf('.')!=-1){
      this.tafgeet=nArabicWords(this.data.total.toString().slice(0,this.data.total.toString().indexOf('.')),{TextToFollow:"on"}) +" ريال سعودي فقط لا غير"
    this.tafgeetEn=convert.toWords(this.data.total.toString().slice(0,this.data.total.toString().indexOf('.')))+" Saudi Riyals Only"
    }
      else{
        this.tafgeet=nArabicWords(this.data.total.toString(),{TextToFollow:"on"}) +" ريال سعودي فقط لا غير"
        this.tafgeetEn=convert.toWords(this.data.total.toString())+" Saudi Riyals Only"
      }
      console.log('data',this.data);

      this.salesInoviceData.paginator =this.paginator;
      this.salesInoviceData.sort = this.matSort;
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
    this.salesInoviceData.filter = $event.target.value;
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
      PDF.save(`emadadat-sales-invocie-${this.data.salesInvoiceNumber}-${this.data.customer.nameAr}.pdf`);
    });
  }

}
