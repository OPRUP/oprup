import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { PaymentCheckService } from '../payment-check.service';
import { PaymentVoucher } from '../payment-voucher';
import { PaymentVoucherService } from '../payment-voucher.service';

@Component({
  selector: 'app-delete-payment-voucher',
  templateUrl: './delete-payment-voucher.component.html',
  styleUrls: ['./delete-payment-voucher.component.scss']
})
export class DeletePaymentVoucherComponent implements OnInit {

  paymentVoucherId!: number;
  paymentVoucher;
  paymentVouchers!: PaymentVoucher[];
  paymentChecks;

  constructor(private paymentVoucherService: PaymentVoucherService, private router: Router, private activateRoute: ActivatedRoute,private paymentCheckService:PaymentCheckService, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getPaymentVoucher();
  }
  
  public getPaymentVoucher(){
    this.paymentVoucherId = this.activateRoute.snapshot.params['id'];
    this.paymentVoucherService.getPaymentVoucherById(this.paymentVoucherId)
    .subscribe(data => {

      this.paymentVoucher = data;
    }, error => console.log(error));
    this.paymentCheckService.getChecksByPaymentVoucherId(this.paymentVoucherId).subscribe(data=>{this.paymentChecks=data}, error => console.log(error))
  }


  public onDeletePaymentVoucher(){
    this.paymentChecks.forEach(element=>{
      this.paymentCheckService.deleteChecks(element).subscribe(data=>{})
    },
    (error) => {
    
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    
     console.log(error);
    })

 this.paymentVoucherService.deletePaymentVoucher(this.paymentVoucher).subscribe(
  (data) => {


    Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
 this.goQuotationList();
},
(error) => {

  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

 console.log(error);
}
);
  }

  public getAllQuotation(): void {
    this.paymentVoucherService.getPaymentVoucher().subscribe(
      (response: PaymentVoucher[]) => {
        this.paymentVouchers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goQuotationList(){
    this.router.navigate(['/accounts/paymentVouchers/paymentVouchers'])
  }


}
