import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { PaymentVoucher } from '../payment-voucher';
import { PaymentVoucherService } from '../payment-voucher.service';

@Component({
  selector: 'app-payment-vouchers',
  templateUrl: './payment-vouchers.component.html',
  styleUrls: ['./payment-vouchers.component.scss']
})
export class PaymentVouchersComponent implements OnInit {





    displayedColumns: string[] = [
'paymentVoucherId',
      // 'paymentWay',
      'description',
      'cashAmount',
      // 'checkNumber',
      // 'dateCheck',
      // 'checkValue',
      // 'fundAccount',
      // 'checkAccount',
      'voucherDate',

      // 'bankName',
  'actions'


    ]
    paymentVouchers!: MatTableDataSource<PaymentVoucher>;
    @ViewChild('paginator') paginator!: MatPaginator;
    @ViewChild(MatSort) matSort!: MatSort;

    constructor(private paymentVoucherService : PaymentVoucherService,
  private router: Router, private translate: TranslateService) {
        this.translate.setDefaultLang('ar');
        const lang = localStorage.getItem('lang')  || 'ar';
        this.translate.use(lang);
        document.documentElement.lang = lang;
       }

    ngOnInit(): void {
      this.getAllPaymentVoucher();
    }

    public getAllPaymentVoucher(): void {
      this.paymentVoucherService.getPaymentVoucher().subscribe(
        (response:PaymentVoucher[]) => {
        this.paymentVouchers= new MatTableDataSource(response);
        this.paymentVouchers.paginator =this.paginator;
        this.paymentVouchers.sort = this.matSort;

        },
        (error)  =>
          {
            console.log(error);
            Swal.fire('Error !', 'Error in loading data !', 'error');
          }
        );

    }

    ngAfterViewInit() {}

    public onEditPaymentVoucherById(paymentVoucherId: number): void {
      this.router.navigate(['/accounts/paymentVouchers/edit-paymentVoucher', paymentVoucherId])
    }
    public onEditToDeletePaymentVoucherById(paymentVoucherId: number):void{
      this.router.navigate(['/accounts/paymentVouchers/delete-paymentVoucher', paymentVoucherId])
    }
    public onPrintToDeletePaymentVoucherById(paymentVoucherId: number):void{
      this.router.navigate(['/accounts/paymentVouchers/print-paymentVoucher', paymentVoucherId])
    }
    filterData($event: any){
      this.paymentVouchers.filter = $event.target.value;

    }
  }
  function ngAfterViewInit() {
    throw new Error('Function not implemented.');
  }
