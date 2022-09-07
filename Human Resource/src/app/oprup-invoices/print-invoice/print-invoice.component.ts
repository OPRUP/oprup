import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.scss']
})
export class PrintInvoiceComponent implements OnInit {
  customerName;
  taxNumber;
  invoiceDate;
  price;
  tax;
  total;
  invoice;
  currentInvoice;
  invoiceId;
  apiBaseUrl: string;

  constructor(
    private invoiceService: InvoiceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.apiBaseUrl = environment.apiBaseUrl;
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
  //   this.customerName = this.activateRoute.snapshot.params['customerName'];
  //   this.taxNumber = this.activateRoute.snapshot.params['taxNumber'];
  //   this.invoiceDate = this.activateRoute.snapshot.params['invoiceDate'];
  // this.price = this.activateRoute.snapshot.params['price'];
  // this.tax = this.activateRoute.snapshot.params['tax'];


    this.getQRcode();

}

// getInvoiceById(){

// }


getQRcode(){
  // this.customerName = this.activateRoute.snapshot.params['customerName'];
  // this.taxNumber = this.activateRoute.snapshot.params['taxNumber'];
  // this.invoiceDate = this.activateRoute.snapshot.params['invoiceDate'];
  // this.price = this.activateRoute.snapshot.params['price'];
  // this.tax = this.activateRoute.snapshot.params['tax'];

  this.invoiceId = this.activateRoute.snapshot.params['id'];
  this.invoiceService.getInvoiceById(this.invoiceId)
  .subscribe(data => {
    console.log(data)
    this.invoice = data;
  }, error => console.log(error));


  this.customerName = this.invoice.customerName;
  this.taxNumber = this.invoice.taxNumber;
  this.invoiceDate = this.invoice.invoiceDate;

  this.tax = this.invoice.tax;
  this.price = this.invoice.price;
  //this.total = this.price * this.tax;
  // this.total = this.invoice.price + (this.invoice.price * this.tax);



  this.invoiceService.showQRCode(this.customerName, this.taxNumber, this.invoiceDate, this.price, this.tax).subscribe(
   (response: any) => {
     this.currentInvoice = response;

   }
 )


}


printPage() {

  window.print();
}
}
