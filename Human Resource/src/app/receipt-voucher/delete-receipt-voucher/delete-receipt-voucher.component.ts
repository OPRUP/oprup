import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CheckService } from '../check.service';
import { ReceiptVoucher } from '../receipt-voucher';
import { ReceiptVoucherService } from '../receipt-voucher.service';

@Component({
  selector: 'app-delete-receipt-voucher',
  templateUrl: './delete-receipt-voucher.component.html',
  styleUrls: ['./delete-receipt-voucher.component.scss']
})
export class DeleteReceiptVoucherComponent implements OnInit {

  recepitVoucherId!: number;
  recepitVoucher;
  recepitVouchers!: ReceiptVoucher[];
  recepitVoucherChecks

  constructor(private receiptVoucherService: ReceiptVoucherService,private recepitChecksService:CheckService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getRecepitVoucher();
  }

  public getRecepitVoucher(){
    this.recepitVoucherId = this.activateRoute.snapshot.params['id'];
    this.receiptVoucherService.getReceiptVoucherById(this.recepitVoucherId)
    .subscribe(data => {

      this.recepitVoucher = data;
    }, error => console.log(error));
    this.recepitChecksService.getChecksByReceiptVoucherId(this.recepitVoucherId).subscribe(data => {

      this.recepitVoucherChecks = data;
    }, error => console.log(error));
  }


  public onDeleteRecepitVoucher(quotationId:number){
    this.recepitVoucherChecks.forEach(element => {
      this.recepitChecksService.deleteChecks(element).subscribe(data=>{})
    });
    this.receiptVoucherService.deleteReceiptVoucher(this.recepitVoucher).subscribe( data => {
      console.log(data);
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goQuotationList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }




  goQuotationList(){
    this.router.navigate(['/accounts/receipt-voucher/receipt-voucher'])
  }


}
