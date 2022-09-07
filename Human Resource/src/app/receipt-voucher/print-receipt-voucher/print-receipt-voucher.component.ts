import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CheckService } from '../check.service';
import { ReceiptVoucher } from '../receipt-voucher';
import { ReceiptVoucherService } from '../receipt-voucher.service';
import {nArabicWords} from "narabicwords";

@Component({
  selector: 'app-print-receipt-voucher',
  templateUrl: './print-receipt-voucher.component.html',
  styleUrls: ['./print-receipt-voucher.component.scss']
})
export class PrintReceiptVoucherComponent implements OnInit {

  receiptVoucherId!:number;
  receiptVoucherData!:ReceiptVoucher;

      displayedColumns: string[] = [

        'checkNumber',
        'checkDate',
        'checkValue',
        'bankName',

      ];


      @ViewChild('paginator') paginator!: MatPaginator;
      @ViewChild(MatSort) matSort!: MatSort;
      receiptVouchers!: MatTableDataSource<ReceiptVoucher>;

      constructor(private receiptVoucherService:ReceiptVoucherService ,
        private checksService:CheckService,
         private router: Router ,
         private activateRoute: ActivatedRoute,
          private translate: TranslateService){
        this.translate.setDefaultLang('ar');
        const lang = localStorage.getItem('lang')  || 'ar';
        this.translate.use(lang);
        document.documentElement.lang = lang;
      }


      ngOnInit(): void {
        this.getAllReceiptVoucher();
        this.getAllChecks()
      }

    tafgeet;
    formData;
    public getAllReceiptVoucher() {
      this.receiptVoucherId = this.activateRoute.snapshot.params['id'];
      this.receiptVoucherService.getReceiptVoucherById(this.receiptVoucherId).subscribe(
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
      this.receiptVoucherId = this.activateRoute.snapshot.params['id'];
      this.receiptVoucherService.getChecksById(this.receiptVoucherId).subscribe(
        (data:any) => {
          this.receiptVoucherData=data
          console.log('vvvvvvvvvvvvvvvv',this.receiptVoucherData)
        //  this.receiptVoucherData = new MatTableDataSource([data])

        },
        (error) => console.log(error)
      );
    }
      ngAfterViewInit() {}



      filterData($event: any){
        this.receiptVouchers.filter = $event.target.value;
      }


      printPage() {

        window.print();
      }
    }
