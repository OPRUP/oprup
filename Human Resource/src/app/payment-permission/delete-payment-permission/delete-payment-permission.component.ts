import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PaymentVoucher } from 'src/app/payment-voucher/payment-voucher';
import Swal from 'sweetalert2';
import { PaymentPermission } from '../payment-permission';
import { PaymentPermissionService } from '../payment-permission.service';

@Component({
  selector: 'app-delete-payment-permission',
  templateUrl: './delete-payment-permission.component.html',
  styleUrls: ['./delete-payment-permission.component.scss']
})
export class DeletePaymentPermissionComponent implements OnInit {
  paymentVoucherId!: number;
  paymentVoucher;
  paymentVouchers!: PaymentPermission[];


  constructor(private paymentPermissionService: PaymentPermissionService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getQuotation();
  }

  public getQuotation(){
    this.paymentVoucherId = this.activateRoute.snapshot.params['id'];
    this.paymentPermissionService.getPaymentPermissionById(this.paymentVoucherId)
    .subscribe(data => {

      this.paymentVoucher = data;
    }, error => console.log(error));
  }


  public onDeleteQuotation(){

 this.paymentPermissionService.deletePaymentPermission(this.paymentVoucher).subscribe(
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
    this.paymentPermissionService.getPaymentPermission().subscribe(
      (response: PaymentPermission[]) => {
        this.paymentVouchers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goQuotationList(){
    this.router.navigate(['/accounts/paymentPermission/paymentPermission'])
  }


}
