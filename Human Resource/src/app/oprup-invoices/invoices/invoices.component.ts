import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices;

  displayedColumns: string[] = [
     'invoiceId',
     'customerName',
     'taxNumber',
     'price',
     'actions',
  ];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private invoiceService: InvoiceService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }



  ngOnInit() {
    this.getInvoices();
  }


  public getInvoices(): void {

    this.invoiceService.getInvoices().subscribe((response:Invoice[]) => {
      this.invoices = new MatTableDataSource(response);
      this.invoices.paginator =this.paginator;
      this.invoices.sort = this.matSort;
      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }
      );
  }

  // public onPrintInvoiceById(customerName: string,taxNumber: string,invoiceDate: string,price: string,tax: string):void{
  //   this.router.navigate(['/oprup-invoices/print-invoice', customerName,taxNumber,invoiceDate,price,tax])

  // }
  public onPrintInvoiceById(invoiceId: string):void{
    this.router.navigate(['/sales/oprup-invoices/print-invoice', invoiceId])

  }

  filterData($event: any){
    this.invoices.filter = $event.target.value;
  }


}
