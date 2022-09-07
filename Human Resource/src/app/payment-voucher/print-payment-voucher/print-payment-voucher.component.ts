import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PaymentCheckService } from '../payment-check.service';
import { PaymentVoucher } from '../payment-voucher';
import { PaymentVoucherService } from '../payment-voucher.service';
import {nArabicWords} from "narabicwords";

@Component({
  selector: 'app-print-payment-voucher',
  templateUrl: './print-payment-voucher.component.html',
  styleUrls: ['./print-payment-voucher.component.scss']
})
export class PrintPaymentVoucherComponent implements OnInit {




  paymentVoucherId!:number;
  paymentVoucherData!:PaymentVoucher;

      displayedColumns: string[] = [

        'checkNumber',
        'checkDate',
        'checkValue',
        'bankName'

      ];


      @ViewChild('paginator') paginator!: MatPaginator;
      @ViewChild(MatSort) matSort!: MatSort;
      paymentVouchers!: MatTableDataSource<PaymentVoucher>;

      constructor(private paymentVoucherService:PaymentVoucherService ,
        private checksService:PaymentCheckService,
         private router: Router ,
         private activateRoute: ActivatedRoute,
          private translate: TranslateService){
        this.translate.setDefaultLang('ar');
        const lang = localStorage.getItem('lang')  || 'ar';
        this.translate.use(lang);
        document.documentElement.lang = lang;
      }


      ngOnInit(): void {
        this.getAllPaymentVoucher();
        this.getAllChecks()
      }

    tafgeet;
    formData;
    public getAllPaymentVoucher() {
      this.paymentVoucherId = this.activateRoute.snapshot.params['id'];
      this.paymentVoucherService.getPaymentVoucherById(this.paymentVoucherId).subscribe(
        (data) => {
          this.formData=data
        //  this.receiptVoucherData = new MatTableDataSource([data])
        if(this.formData.cashAmount.indexOf('.')!=-1){
          this.tafgeet=nArabicWords(this.formData.cashAmount.slice(0,this.formData.cashAmount.toString().indexOf('.')),{TextToFollow:"on"}) +" ريال سعودي فقط لا غير"
       
        }
          else{
            this.tafgeet=nArabicWords(this.formData.cashAmount,{TextToFollow:"on"}) +" ريال سعودي فقط لا غير"
          }

        },
        (error) => console.log(error)
      );
    }

    public getAllChecks() {
      this.paymentVoucherId = this.activateRoute.snapshot.params['id'];
      this.checksService.getChecksByPaymentVoucherId(this.paymentVoucherId).subscribe(
        (data:any) => {
          this.paymentVoucherData=data
          console.log('vvvvvvvvvvvvvvvv',this.paymentVoucherData)
        //  this.receiptVoucherData = new MatTableDataSource([data])

        },
        (error) => console.log(error)
      );
    }
      ngAfterViewInit() {}



      filterData($event: any){
        this.paymentVouchers.filter = $event.target.value;
      }


      printPage() {

        window.print();
      }
    }
