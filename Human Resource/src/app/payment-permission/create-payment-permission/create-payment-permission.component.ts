import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Bank } from 'src/app/banks/bank';
import { BankService } from 'src/app/banks/bank.service';
import { PaymentCheck } from 'src/app/payment-voucher/payment-check';
import Swal from 'sweetalert2';
import { PaymentPermission } from '../payment-permission';
import { PaymentChecksPermissionService } from '../payment-permission-checks.service';
import { PaymentPermissionService } from '../payment-permission.service';

@Component({
  selector: 'app-create-payment-permission',
  templateUrl: './create-payment-permission.component.html',
  styleUrls: ['./create-payment-permission.component.scss']
})
export class CreatePaymentPermissionComponent implements OnInit {
  journalNum
  paymentVoucherData = {
    paymentPermissionId: '',
    description: '',
    cashAmount: 0,
    voucherDate:'',
    deleteFlag: 1,
    checksAmount:0,
    clientName:''
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
    private paymentPermissionService: PaymentPermissionService,
    private checkService: PaymentChecksPermissionService,
    private bankService:BankService,
    private router: Router,
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
    this.getAllreceiptVoucher();
  }
  costCenters
  
 
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

  max3;
  public getAllreceiptVoucher(): void {
    this.paymentPermissionService.getPaymentPermission().subscribe(
      (data) => {
        this.vouchers=`PP-${data.length+1}`
        
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPaymentVoucher(): void {
    console.log('response1');
      this.paymentPermissionService.addPaymentPermission(this.paymentVoucherData).subscribe(
        (response: PaymentPermission) => {
          console.log('response',response);
          this.rows.value.forEach(element => {
            element.paymentPermissionId=response.paymentPermissionId
            this.checks.push({
              checkNumber:element.checkNumber,
              checkValue:element.checkValue,
             // checkDate:"2022-10-10",
              checkDate:element.checkDate,
              bank:{bankId:element.bank},

              paymentPermission:{
                paymentPermissionId:element.paymentPermissionId,
              },


            })
          });
          console.log('final',this.checks);
          this.checks.forEach((element)=>{
            this.checkService.addPaymentChecksPermission(element).subscribe(
                (response: PaymentCheck) => {console.log('final2222',element);}) ,(error: HttpErrorResponse) => {
                  console.log('error',element);
      
             alert(error.message);
      
             Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
      
                    }
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
    this.router.navigate(['/accounts/paymentPermission/paymentPermission']);
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


  
      calculateInvoice(total=0){
        this.rows.value.forEach((element)=>{

          total+=Number(element.checkValue)
          this.paymentVoucherData.checksAmount=total
        })
      }
}