import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  invoiceData = {
    customerName: "",
    taxNumber: "",
    invoiceDate: "",
    tax: "",
    price: "",
    deleteFlag: 1

  }

  invoice;

  constructor(
    private invoiceService: InvoiceService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {

  }

  goInvoices(){
    this.router.navigate(['/sales/oprup-invoices/invoices'])
  }


  public onAddInvoice(): void {
    if(this.invoiceData.customerName.trim() == '' || this.invoiceData.customerName == null){
      Swal.fire('Warning', 'Customer Name is Required', 'warning')
    }
    else{
      this.invoiceService.addInvoice(this.invoiceData).subscribe(
        (data: Invoice) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

           this.goInvoices();



        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

          console.log(error);
        }
      );
    }



  }

}
