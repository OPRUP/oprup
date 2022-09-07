import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { SalesInvoice } from '../sales-invoice';
import { salesInvoiceService } from '../sales-invoice.service';

@Component({
  selector: 'app-delete-sales-invoice',
  templateUrl: './delete-sales-invoice.component.html',
  styleUrls: ['./delete-sales-invoice.component.scss']
})
export class DeleteSalesInvoiceComponent implements OnInit {

  SalesInvoiceId!: number;
  SalesInvoice;
  SalesInvoices!:SalesInvoice[];


  constructor(private SalesInvoiceService:salesInvoiceService ,
  private router: Router ,
  private activateRoute: ActivatedRoute,
  private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }



  ngOnInit() {
  this.getSalesinvoice();
  // this.getAllVendor();

  }

  goSalesinvoiceList(){
  this.router.navigate(['/accounts/sales-invoice/sales-invoice/'])
  }

  public getSalesinvoice(){
   this.SalesInvoiceId= this.activateRoute.snapshot.params['id'];
  this.SalesInvoiceService.getInvoiceById(this.SalesInvoiceId)
  .subscribe(data => {
    this.SalesInvoice = data;
    console.log(data)
  }, error => console.log(error));


  }


  public onDeleteSalesInvoicebyId(salesInvoiceId): void {

  this.SalesInvoiceService.deleteInvoice(this.SalesInvoice).subscribe(
  (response) => {
  console.log(response);
  Swal.fire('Success', 'Sales Invoice Information is Delete', 'success')
  this.goSalesinvoiceList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire('Error!! ', 'Error while Delete Sales Invoice', 'error')
  }
  );
  }

  }
