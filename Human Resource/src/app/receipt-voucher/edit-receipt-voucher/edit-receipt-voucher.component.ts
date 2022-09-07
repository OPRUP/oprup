import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Bank } from 'src/app/banks/bank';
import { BankService } from 'src/app/banks/bank.service';
import { CoaService } from 'src/app/coa/coa.service';
import Swal from 'sweetalert2';
import { CheckService } from '../check.service';
import { Checks } from '../checks';
import { ReceiptVoucher } from '../receipt-voucher';
import { ReceiptVoucherService } from '../receipt-voucher.service';

@Component({
  selector: 'app-edit-receipt-voucher',
  templateUrl: './edit-receipt-voucher.component.html',
  styleUrls: ['./edit-receipt-voucher.component.scss']
})
export class EditReceiptVoucherComponent implements OnInit {

  receiptVoucherId;
  receiptVoucherData!:ReceiptVoucher;
  banks;
  codeValue;
  //items:any[]=[]
  checks:any[]=[];
  tempDeletedData:any[] = [];
  vouchers;
  data = [];//to add row
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
    private receiptVoucherService: ReceiptVoucherService,
    private checkService: CheckService,
    private bankService:BankService,
    private router: Router,
    private coaService:CoaService,
    private activateRoute: ActivatedRoute,
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
    this.getVoucher();
    this.getAllBanks();
    this.getChecksInvoiceId();
    this.getAccountNameByAccountCode( 'sub');
    this.getAllReceiptVoucher();

  }
  public getAllBanks(): void {
    this.bankService.getBanks().subscribe(
      (response: Bank[]) => {
        this.banks = response;
        console.log(this.banks);
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


  public getVoucher() {
    this.receiptVoucherId = this.activateRoute.snapshot.params['id'];
    this.receiptVoucherService.getReceiptVoucherById(this.receiptVoucherId).subscribe(
      (data) => {
        this.receiptVoucherData = data;

        //this.salesInoviceData.date=new Date(this.salesInoviceData.date);
        console.log("aaaa",this.receiptVoucherData);
      },
      (error) => console.log(error)
    );
  }

  public getChecksInvoiceId() {
    this.receiptVoucherId = this.activateRoute.snapshot.params['id'];
    this.checkService.getChecksByReceiptVoucherId(this.receiptVoucherId).subscribe(
      (data:any) => {
        console.log('xxxxxxxxxxxxxxxxxxxxx',data);
        this.checks=data
        console.log('wwwwwwwww', this.dataSource);
        let filtered =data.filter((element)=>{
          return element.deleteFlag ==1
        })
        console.log('invId',data);

        filtered.forEach((element)=>{
          this.checks.push({
            checkNumber:element.checkNumber,
              checkValue:element.checkValue,
             // checkDate:"2022-10-10",
              checkDate:element.checkDate,
              receiptVoucher:{
                receiptVoucherId:element.receiptVoucherId,
              },
              bank:{
                // element.bankId
                bankId: 1
              }
          })
          this.tempDeletedData.push(element)
        })
        console.log('items',this.checks);

        this.checks.forEach(() => this.addRow());
        console.log('rowss',this.rows);
      },
      (error) => console.log(error)
    );
  }


  public onUpdateReceiptVoucher(): void {
    console.log('response1');
      this.receiptVoucherService.updateReceiptVoucher(this.receiptVoucherData).subscribe(
        (response: ReceiptVoucher) => {
          console.log('response',response);
        this.checks.forEach(element=>{
          this.checkService.deleteChecks(element).subscribe((response:Checks)=>{
            console.log('ddddddddddddaaaaaaasss');
          }) ,(error: HttpErrorResponse) => {
            console.log('error',element);

      alert(error.message);

      Swal.fire(this.translate.instant('error')!!, this.translate.instant('ErrorwhileaddReceiptVoucher'), 'error');
      }
         })

          this.rows.value.forEach(element => {
            element.receiptVoucherId=response.receiptVoucherId
            this.checks.push({
              checkNumber:element.checkNumber,
              checkValue:element.checkValue,
              // checkDate:"2022-10-10",
              checkDate:element.checkDate,
              receiptVoucher:{
              receiptVoucherId:element.receiptVoucherId,},
              bank:{
                // element.bankId
                bankId: 1
              }


            })
          });
          console.log('final',this.checks);
          this.checks.forEach((element)=>{
            this.checkService.addChecks(element).subscribe(
                (response: Checks) => {console.log('final2222',element);})
          }),(error: HttpErrorResponse) => {
            console.log('final');

       alert(error.message);

       Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
              }
          // this.salesInvoiceService.addInvoiceItems(this.invoiceItems).subscribe(
          //   (response: InvoiceItems) => {})

          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
          //this.siteVisitsService.getAllVisits();
          this.goReceiptVoucherList();
        },
        (error: HttpErrorResponse) => {
                    console.log(this.receiptVoucherData);

          alert(error.message);

          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        }
      );

  }
  goReceiptVoucherList() {
    this.router.navigate(['/accounts/receipt-voucher/receipt-voucher']);
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
      bankName: '',
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
     console.log('items by type' ,this.codeValue);
       // console.log('items',this.codeValue[0].accountName)
        })
      }


      max3;
      public getAllReceiptVoucher(): void {
        this.receiptVoucherService.getReceiptVouchers().subscribe(
          (response: ReceiptVoucher[]) => {
            this.vouchers = response;

            let result = this.vouchers.map((receiptVoucherId) =>receiptVoucherId)
            console.log('hhhhhhhhhhhhhhhhh',result)


            let maxValue = Math.max.apply(null, result)
            console.log(maxValue) ;

            const max2 = result.reduce((acc, item) => acc = acc > item ? acc : item, 0);
            if(max2.receiptVoucherId!=null)
            {this.max3=max2.receiptVoucherId+1;}
            else{this.max3=1;}


            console.log("ggggg",this.max3)
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }

}
