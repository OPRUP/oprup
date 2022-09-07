import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PaymentVoucher } from 'src/app/payment-voucher/payment-voucher';
import { PaymentPermission } from '../payment-permission';
import { PaymentChecksPermissionService } from '../payment-permission-checks.service';
import { PaymentPermissionService } from '../payment-permission.service';
import {nArabicWords} from "narabicwords";

@Component({
  selector: 'app-print-payment-permission',
  templateUrl: './print-payment-permission.component.html',
  styleUrls: ['./print-payment-permission.component.scss']
})
export class PrintPaymentPermissionComponent implements OnInit {

  paymentVoucherId!:number;
  paymentVoucherData!:PaymentPermission;
  tafgeet;
      displayedColumns: string[] = [

        'checkNumber',
        'checkDate',
        'checkValue',
        'bankName'

      ];


      @ViewChild('paginator') paginator!: MatPaginator;
      @ViewChild(MatSort) matSort!: MatSort;
      paymentVouchers!: MatTableDataSource<PaymentVoucher>;

      constructor(private paymentPermissionService:PaymentPermissionService ,
        private checksService:PaymentChecksPermissionService,
         private router: Router ,
         private activateRoute: ActivatedRoute,
          private translate: TranslateService){
        this.translate.setDefaultLang('ar');
        const lang = localStorage.getItem('lang')  || 'ar';
        this.translate.use(lang);
        document.documentElement.lang = lang;
      }


      ngOnInit(): void {
        this.getAllPaymentPermission();
        this.getAllChecks()
      }


    formData;
    public getAllPaymentPermission() {
      this.paymentVoucherId = this.activateRoute.snapshot.params['id'];
      this.paymentPermissionService.getPaymentPermissionById(this.paymentVoucherId).subscribe(
        (data) => {
          this.formData=data
          console.log('formdata',typeof(this.formData.cashAmount));
          if(this.formData.cashAmount.indexOf('.')!=-1){
            this.tafgeet=nArabicWords(this.formData.cashAmount.slice(0,this.formData.cashAmount.toString().indexOf('.')),{TextToFollow:"on"}) +" ريال سعودي فقط لا غير"
         
          }
            else{
              this.tafgeet=nArabicWords(this.formData.cashAmount,{TextToFollow:"on"}) +" ريال سعودي فقط لا غير"
            }
            console.log(this.tafgeet);
          
        //  this.receiptVoucherData = new MatTableDataSource([data])

        },
        (error) => console.log(error)
      );
      
        
    }

    public getAllChecks() {
      this.paymentVoucherId = this.activateRoute.snapshot.params['id'];
      this.checksService.getPaymentChecksPermissionById(this.paymentVoucherId).subscribe(
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

