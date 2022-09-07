import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Bank } from 'src/app/banks/bank';
import { BankService } from 'src/app/banks/bank.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import Swal from 'sweetalert2';
import { PaymentVoucher } from '../payment-voucher';
import { PaymentVoucherService } from '../payment-voucher.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';
import { CoaService } from 'src/app/coa/coa.service';

import { PaymentCheckService } from '../payment-check.service';
import { PaymentCheck } from '../payment-check';
import { JournalVoucherService } from 'src/app/jour-voucher/jour-voucher.service';
import { CostCenterService } from 'src/app/cost-center/cost-center.service';


@Component({
  selector: 'app-create-payment-voucher',
  templateUrl: './create-payment-voucher.component.html',
  styleUrls: ['./create-payment-voucher.component.scss']
})
export class CreatePaymentVoucherComponent implements OnInit {
  journalNum
  paymentVoucherData = {
    paymentVoucherId: '',
    paymentVoucherNumber:'',
    description: '',
    cashAmount: '0',
    voucherDate:'',
    vendorAccount: {
      accountId:''
  },
  cashAccount: {
      accountId:''
  },
  checksAccount: {
      accountId:''
  },

    deleteFlag: 1,
    checksAmount:0,
    costCenter:{costCenterId:''}
  };
  journalDetails={
    journalVoucherDetailsId:'',
    debit: '',
    credit: '',
    description: '',
    journalVoucher:{journalVoucherId:''},
    chartAccounts: { accountId: '' },
    costCenter:{costCenterId:''}

  }
  journalDetails2={
    journalVoucherDetailsId:'',
    debit: '',
    credit: '',
    description: '',
    journalVoucher:{journalVoucherId:''},
    chartAccounts: { accountId: '' },

  }
  banks;
  codeValue;
  //items:any[]=[]
  checks:any[]=[]
vouchers;
totalCashAndChecks:number=0
  data = [];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = [
    'checkNumber',
    'checkId',
    'checkValue',
    'checkDate',
    'bankName',
    'delete',
  ];
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({
    marks: this.rows,
    description:new FormControl(''),
    cashAmount:new FormControl(''),
    voucherDate:new FormControl(''),
    accountId:new FormControl(''),
    receiptVoucherId:new FormControl('')
      });

  constructor(
    private paymentVoucherService: PaymentVoucherService,
    private costCenterService:CostCenterService,
    private journalService:JournalVoucherService,
    private checkService: PaymentCheckService,
    private bankService:BankService,
    private router: Router,
    private coaService:CoaService,
    private translate: TranslateService,
    private fb: FormBuilder) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.data.forEach(() => this.addRow());
    this.updateView();
    this.getAllBanks();
    this.getAccountNameByAccountCode( 'sub');
    this.count();
    this.getCostCenters()
    this.countJour()
  }
  costCenters
  public getCostCenters(): void {
    this.costCenterService.getAllCostCenter().subscribe(
      (response) => {
        this.costCenters = response;
        console.log(this.costCenters);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public countJour(){
    this.journalService.count().subscribe((data)=>{
      console.log('ddddaaattaa',data);
     this.journalNum=`JV-${data+1}`
    })
  }
  public getAllBanks(): void {
    this.bankService.getBanks().subscribe(
      (response: Bank[]) => {
        this.banks = response;
        console.log('banks',this.banks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //document.getElementById('add-store-form')?.click();
  // this.storeService.addStore(this.StoreData).subscribe(
  //   (response: Store) => {
  //     Swal.fire('إضافة سجل', 'تمت الإضافة بنجاح', 'success')
    //   this.getStores();
    //   this.goStoresList();
    // },

  //   (error) => {
  //     Swal.fire('Error!! ', 'Error while adding', 'error')
  //     console.log(error);
  //   }
  // );

  public count(){
    this.paymentVoucherService.count().subscribe(data=>{
      this.paymentVoucherData.paymentVoucherNumber=`PV-${data+1}`
      

    })
  }
  public getAllreceiptVoucher(): void {
    this.paymentVoucherService.getPaymentVoucher().subscribe(
      (data) => {
        
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPaymentVoucher(): void {
    console.log('response1');
      this.paymentVoucherService.addPaymentVoucher(this.paymentVoucherData).subscribe(
        (response: PaymentVoucher) => {
          console.log('response',response);
          this.rows.value.forEach(element => {
            element.paymentVoucherId=response.paymentVoucherId
            this.checks.push({
              checkNumber:element.checkNumber,
              checkValue:element.checkValue,
             // checkDate:"2022-10-10",
              checkDate:element.checkDate,
              bank:{bankId:element.bank},

              paymentVoucher:{
                paymentVoucherId:element.paymentVoucherId,
              },


            })
          });
          console.log('final',this.checks);
          this.checks.forEach((element)=>{
            this.checkService.addChecks(element).subscribe(
                (response: PaymentCheck) => {console.log('final2222',element);})
          }),(error: HttpErrorResponse) => {
            console.log('final',);

       alert(error.message);

       Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

              }

              this.journalService.addJournalVoucher({journalVoucherId:'',journalVoucherNumber:this.journalNum,dateVoucher:this.paymentVoucherData.voucherDate,}).subscribe
(response=>{console.log('journalVoucher',response);
// journalDetails={
//   journalVoucher: { journalVoucherId: response.journalVoucherId},
//   debit: this.salesInoviceData.total.toString(),
//   credit: '0',
//   journalVoucherDetailsId: '',
//   description: '',
//   chartAccounts: {
//     accountId: this.salesInoviceData.clientAccount.accountId
//   }
// }
const journalDetailsfn=(journalVoucherId,debit,credit,accountId,costCenter)=>{

  if(costCenter)
  {
    this.journalDetails.journalVoucher.journalVoucherId=journalVoucherId
  this.journalDetails.debit=debit
  this.journalDetails.credit=credit
  this.journalDetails.chartAccounts.accountId=accountId
    this.journalDetails.costCenter.costCenterId=costCenter
    this.journalService.addJournalVoucherDetalis(this.journalDetails).subscribe(response=>{},(error: HttpErrorResponse) => {

      alert(error.message);

      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
      })
  }
  else{
    this.journalDetails2.journalVoucher.journalVoucherId=journalVoucherId
  this.journalDetails2.debit=debit
  this.journalDetails2.credit=credit
  this.journalDetails2.chartAccounts.accountId=accountId
  this.journalService.addJournalVoucherDetalis(this.journalDetails2).subscribe(response=>{},(error: HttpErrorResponse) => {

    alert(error.message);

    Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
    })
  }


  }

journalDetailsfn(response.journalVoucherId,0,this.paymentVoucherData.cashAmount,this.paymentVoucherData.cashAccount.accountId,null)
journalDetailsfn(response.journalVoucherId,0,this.paymentVoucherData.checksAmount,this.paymentVoucherData.checksAccount.accountId,null)
journalDetailsfn(response.journalVoucherId,Number(this.paymentVoucherData.cashAmount)+Number(this.paymentVoucherData.checksAmount),0,this.paymentVoucherData.vendorAccount.accountId,this.paymentVoucherData.costCenter.costCenterId)




})

Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          //this.siteVisitsService.getAllVisits();
          this.goPaymentVoucherList();
        },
        (error: HttpErrorResponse) => {
                    console.log('dataaaa',this.paymentVoucherData);

          alert(error.message);

          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        }
      );

  }
  goPaymentVoucherList() {
    this.router.navigate(['/accounts/paymentVouchers/paymentVouchers']);
  }
  emptyTable() {
    while (this.rows.length !== 0) {
      this.rows.removeAt(0);
    }
  }

  addRow() {
    const row = this.fb.group({

      checkNumber:'',
      checkId: '',
      checkValue: '',
      checkDate:'',
      bank: '',

      delete:''
    });
    this.rows.push(row);

    this.updateView();
  }
  deleteRow(index) {
    this.rows.removeAt(index);
    this.checks.splice(index,1)
    this.calculateInvoice()
    this.updateView();
  }

  updateView() {
    this.dataSource.next(this.rows.controls);
  }

  bb;

//   getAccountNameByAccountCode(event){
//     console.log('event',event.target.value)
//     this.coaService.getAccountByType(event.target.value).subscribe(data=>{
//       this.codeValue=data
//     // this.items[index]=data
//     // this.items[this.items.length-1].value=0
//     // this.items[this.items.length-1].total=0

//     this.bb=this.codeValue[0].accountName;
//     this.cc=this.codeValue[0].accountId;
//     this.receiptVoucherData.chartAccount.accountId=this.cc
//  console.log(this.codeValue);
//     console.log('items',this.codeValue[0].accountName)
//     })
//   }
  // getValueQuantity(event,items){

  //   items.value= event.target.value*items.hourlyRate
  //   items.total= items.value+items.value*items.taxRate

  // }
  // getValueEmployeesnumber(event,items){
  //   console.log('val',items.value);

  //   items.value= event.target.value*items.value
  //   items.total= items.value+items.value*items.taxRate

  // }


  getAccountNameByAccountCode(accountType: string){
       // console.log('event',event.target.value)
        this.coaService.getAccountByType('sub').subscribe((data)=>{
          this.codeValue=data
        // this.items[index]=data
        // this.items[this.items.length-1].value=0
        // this.items[this.items.length-1].total=0

        // this.bb=this.codeValue[0].accountName;
        // this.cc=this.codeValue[0].accountId;
        // this.receiptVoucherData.chartAccount.accountId=this.cc
     console.log('accounts by type' ,this.codeValue);
       // console.log('items',this.codeValue[0].accountName)
        })
      }
      calculateInvoice(total=0){
        if(!this.rows.value.length){
          this.paymentVoucherData.checksAmount=0
        }
        this.rows.value.forEach((element)=>{

          total+=Number(element.checkValue)
          this.paymentVoucherData.checksAmount=total
          
        })
        this.totalCashAndChecks=this.paymentVoucherData.checksAmount+Number(this.paymentVoucherData.cashAmount)
      
      }
}

