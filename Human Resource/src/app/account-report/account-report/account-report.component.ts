import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { JournalVoucherDetails } from 'src/app/jour-voucher/jour-voucher-details';
import { PaymentCheck } from 'src/app/payment-voucher/payment-check';
import { PaymentVoucher } from 'src/app/payment-voucher/payment-voucher';
import { Checks } from 'src/app/receipt-voucher/checks';
import { ReceiptVoucher } from 'src/app/receipt-voucher/receipt-voucher';
import { AccountReportService } from '../account-report.service';
import { AccRep } from './acc-rep';

@Component({
  selector: 'app-account-report',
  templateUrl: './account-report.component.html',
  styleUrls: ['./account-report.component.scss']
})
export class AccountReportComponent implements OnInit {

  constructor( private router: Router,
    private coaService:CoaService,
    private accountReportService:AccountReportService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.getAccountNameByAccountCode('sub');
    //  this.accountReportService.getPaymentCheckById(5).subscribe((response: PaymentCheck) => {

    //   console.log(response)
    // })

  }

  codeValue;

  displayArray :any[]=[]


  vendorPaymentVouchers;
  cashPaymentVouchers;
  checkPaymentVouchers

  vendorReceiptVouchers;
  cashReceiptVouchers;
  checkReceiptVouchers;

  jourVouchers;

creditNoticeDebtors
creditNoticeCustomers

debtorNoticeCredits
deborNoticeCustomers

 accountCode;
 paymentVendorValue=0;
 startDate;
 endDate;


balanceTotal=0
 //accountId;
  getAccountNameByAccountCode(accountType: string){
    //alert(this.startDate)
    this.displayArray=[]
    this.coaService.getAccountByType('sub').subscribe((data)=>{
      this.codeValue=data

    })
  }


  getVouchers(accountId :any){
    this.displayArray=[]
    this.vendorPaymentVouchers=null
    this.cashPaymentVouchers=null
    this.checkPaymentVouchers=null

    this.vendorReceiptVouchers=null
    this.cashReceiptVouchers=null
    this.checkReceiptVouchers=null

    this.jourVouchers=null
  this.balanceTotal=0

    this.accountReportService.getPaymentVendorById(accountId).subscribe((response: PaymentVoucher) => {

      this.vendorPaymentVouchers = response;

    this.vendorPaymentVouchers.forEach(element => { 



    if (new Date(element.voucherDate.toString()) >= new Date(this.startDate.toString()) && new Date(element.voucherDate.toString())<= new Date(this.endDate.toString())){


      element.voucherId=element.paymentVoucherId
      this.balanceTotal+= Number(element.cashAmount) + Number(element.checksAmount)
      this.displayArray.push({voucherId:element.voucherId,
        voucherDate:element.voucherDate,
        voucherType:"Payment",
        description:element.description,
        debit:Number(element.cashAmount) + Number(element.checksAmount)
        ,credit:0,

        balance:this.balanceTotal
      })

      }
  });



    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )


    this.accountReportService.getPaymentCashById(accountId).subscribe((response: PaymentVoucher) => {


      this.cashPaymentVouchers = response;
      this.cashPaymentVouchers.forEach(element => {

        // let v= this.changeDateFormat(element.voucherDate)

        this.balanceTotal -= Number(element.cashAmount)
        if (new Date(element.voucherDate.toString()) >= new Date(this.startDate.toString()) && new Date(element.voucherDate.toString())<= new Date(this.endDate.toString())){

        this.displayArray.push({voucherId:element.paymentVoucherId,voucherDate:element.voucherDate,
          voucherType:"Payment Cash",
          description:element.description,debit:0,
          credit:element.cashAmount,
          balance: this.balanceTotal
        })

        element.voucherId=element.paymentVoucherId
     }
    });


    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

    this.accountReportService.getPaymentCheckById(accountId).subscribe((response: PaymentCheck) => {

      this.checkPaymentVouchers = response;
      this.checkPaymentVouchers.forEach(element => {

       // let v= this.changeDateFormat(element.voucherDate)

      
      // alert(new Date(element.paymentVoucher.voucherDate.toString()))
      //  alert(this.startDate)
      //   alert(this.endDate)
       if (new Date(element.paymentVoucher.voucherDate.toString()) >= new Date(this.startDate.toString()) && new Date(element.paymentVoucher.voucherDate.toString())<= new Date(this.endDate.toString())){
        this.balanceTotal-= Number(element.checkValue)

this.displayArray.push({voucherId:element.paymentVoucher.paymentVoucherId,
          voucherDate:element.paymentVoucher.voucherDate,
          voucherType:"Payment Check",
          description:element.paymentVoucher.description,
          debit:0,
          credit:element.checkValue,
        //  balance:this.balanceTotal- Number(element.checkValue)
          balance:this.balanceTotal
        })

        element.voucherId=element.paymentVoucher.paymentVoucherId
      }
  });


    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

////Receipt Vouchers


this.accountReportService.getReceiptVendorById(accountId).subscribe((response: ReceiptVoucher) => {

  this.vendorReceiptVouchers = response;
  this.vendorReceiptVouchers.forEach(element => {

      if (new Date(element.voucherDate.toString()) >= new Date(this.startDate.toString()) && new Date(element.voucherDate.toString())<= new Date(this.endDate.toString())){

    this.displayArray.push({voucherId:element.receiptVoucherId,voucherDate:element.voucherDate,
      voucherType:"Receipt",
      description:element.description,debit:0,
      credit:Number(element.cashAmount)+ Number(element.checksAmount),
      balance:this.balanceTotal- Number(element.cashAmount)+ Number(element.checksAmount)
    })

     element.voucherId=element.receiptVoucherId
  }
});


},
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
)
this.accountReportService.getReceiptCashById(accountId).subscribe((response: ReceiptVoucher) => {

  this.cashReceiptVouchers = response;
  this.cashReceiptVouchers.forEach(element => {


  
   if (new Date(element.voucherDate.toString()) >= new Date(this.startDate.toString()) && new Date(element.voucherDate.toString())<= new Date(this.endDate.toString())){
    this.balanceTotal+ Number(element.cashAmount)
    this.displayArray.push({voucherId:element.receiptVoucherId,voucherDate:element.voucherDate,
      voucherType:"Receipt Cash",
      description:element.description,
      debit:element.cashAmount,
      credit:0,

     balance:this.balanceTotal
    })

    element.voucherId=element.receiptVoucherId
  }
});

},
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
)

this.accountReportService.getReceiptCheckById(accountId).subscribe((response: Checks) => {

  this.checkReceiptVouchers = response;
  this.cashReceiptVouchers.forEach(element => {


 
  if (new Date(element.receiptVoucher.voucherDate.toString()) >= new Date(this.startDate.toString()) && new Date(element.receiptVoucher.voucherDate.toString())<= new Date(this.endDate.toString())){
    this.balanceTotal += Number(element.cashAmount)
    this.displayArray.push({voucherId:element.receiptVoucher.receiptVoucherId,voucherDate:element.receiptVoucher.voucherDate,
      voucherType:"Receipt Check",
      description:element.receiptVoucher.description,
      debit:element.cashAmount,
      credit:0,

    balance:this.balanceTotal
    })

    element.voucherId=element.receiptVoucherId
  }
});

},
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
)

this.accountReportService.getJourById(accountId).subscribe((response: JournalVoucherDetails[]) => {

  this.jourVouchers = response;

  this.jourVouchers.forEach(element => {
   

    if (new Date(element.journalVoucher.dateVoucher.toString()) >= new Date(this.startDate.toString()) && new Date(element.journalVoucher.dateVoucher.toString())<= new Date(this.endDate.toString())){
      this.balanceTotal+= Number(element.debit) - Number(element.credit)
    this.displayArray.push({
      voucherId:element.journalVoucher.journalVoucherId,
      voucherDate:element.journalVoucher.dateVoucher,
      voucherType:"Journal Voucher",
      description:element.description,debit:element.debit,
      credit:element.credit,

      balance:this.balanceTotal
    })

    element.voucherId=element.journalVoucherDetailsId
    }
});

},
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
)   }
viewFlag=true;
toggleDivs(){
  this.viewFlag=false
}
  printPage() {
    this.viewFlag=false
    window.print();
  }
}
