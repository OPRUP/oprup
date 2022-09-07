import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Vendor } from 'src/app/vendor/Vendor';
import { SalesInvoice } from '../sales-invoice';
import { salesInvoiceService } from '../sales-invoice.service';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss']
})
export class SalesInvoiceComponent implements OnInit {

  displayedColumns: string[] = [
    'customerName',
    'projectName',
    'salesInvoiceNumber',
    'salesInvoiceType',
    'date',
    'actions',
  ];


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  SalesInvoices!: MatTableDataSource<SalesInvoice>;

  constructor(private salesInvoiceServices:salesInvoiceService ,
     private router: Router ,
      private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllSalesInvoice();
  }


 public getAllSalesInvoice(): void {

    this.salesInvoiceServices.getAllInvoices().subscribe((response) => {
      this.SalesInvoices = new MatTableDataSource(response);
      this.SalesInvoices.paginator =this.paginator;
      this.SalesInvoices.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }


  ngAfterViewInit() {}

  public onEditsalesInvoiceById(SalesInvoiceId: number): void {
    this.router.navigate(['/accounts/sales-invoice/edit-sales-invoice', SalesInvoiceId])
  }

  public onDeletesalesInvoiceById(SalesInvoiceId: number):void{
    this.router.navigate(['/accounts/sales-invoice/delete-sales-invoice', SalesInvoiceId])
  }

  public onPrintById(SalesInvoiceId: number):void{
    this.router.navigate(['/accounts/sales-invoice/print-sales-invoice', SalesInvoiceId])
  }



  filterData($event: any){
    this.SalesInvoices.filter = $event.target.value;
  }


}

