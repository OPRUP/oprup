import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { CoaService } from 'src/app/coa/coa.service';
import { CostCenterService } from 'src/app/cost-center/cost-center.service';
import { ItemsserviceService } from 'src/app/items/items.service';
import { JournalVoucherService } from 'src/app/jour-voucher/jour-voucher.service';
import { Vendor } from 'src/app/vendor/Vendor';
import { VendorserviceService } from 'src/app/vendor/vendorservice.service';
import Swal from 'sweetalert2';
import { Purchasing } from '../purchasing';
import { PurchasingItem } from '../purchasing-item';
import { PurchasingService } from '../purchasing.service';


@Component({
  selector: 'app-create-purchasing',
  templateUrl: './create-purchasing.component.html',
  styleUrls: ['./create-purchasing.component.scss']
})
export class CreatePurchasingComponent implements OnInit {
accounts;
  items:any[]=[]
  purchasingInvoiceId!: number;
  purchasingItems:any[]=[]
  taxRate= ''
  data = [];
  purchasing;
  purchasingItem;
  purchasingIdMax=0;
  vendors;
  itemValue;itemTotal;
  purchasingData = {
    purchasingInvoiceId: '',
    purchasingInvoiceNumber: '',
    purchasingInvoiceType: '',
    date: '',
    vendorAccount: { accountId: '' },
    cashAccount: { accountId: '' },
    taxAccount: { accountId: '' },
    purchasingAccount: { accountId: '' },
    amount:0,
    tax:'',
    total:0,
    costCenter:{costCenterId:''}
  };
  journalDetails2={
    journalVoucher: { journalVoucherId: ''},
    debit: '' ,
    credit: '',
    journalVoucherDetailsId: '',
    description: '',
    chartAccounts: {
      accountId: ''
    }
  }
  journalDetails={
    journalVoucher: { journalVoucherId: ''},
    debit: '' ,
    credit: '',
    journalVoucherDetailsId: '',
    description: '',
    chartAccounts: {
      accountId: ''
    },
    costCenter:{costCenterId:''}
  }
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = [
    'itemCode',
    'itemId',
    'itemNameAr',
    'profession',
    'nationality',
    'salary',
    'purchasingItemQuantity',
    'numberOfEmployee',
    'purchasingItemValue',
    'purchasingItemTotal',
    'taxRate',
    'delete',
  ];




  userTable = this.fb.group({
    itemCode: ['', Validators.required],
    itemNameAr: ['', [ Validators.required]],
    numberOfEmployee: [''],
   itemCost:[''],
   itemQuantity:[''],
   itemValue:[''],
   itemRate:[''],
   itemTotal:[''],
    isEditable: [true]
  });

  //userTable: FormGroup;
  control;
  costCenters;
  journalNum;

  mode: boolean=false;
  touchedRows: any;

  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({
    marks: this.rows,
    purchasingInvoiceNumber:new FormControl(''),
    purchasingInvoiceType:new FormControl(''),
    date:new FormControl(''),
    numberOfEmployee:new FormControl(''),
    vendorId:new FormControl(''),
  });
    constructor(private itemService:ItemsserviceService,
      private costCenterService:CostCenterService,
      private journalService:JournalVoucherService,
       private vendorService:VendorserviceService,
       private fb: FormBuilder,
       private translate:TranslateService,
       private purchasingService:PurchasingService,
       private formBuilder: FormBuilder,
       private router: Router,
       private coaService:CoaService
       ) { }

    ngOnInit(): void {
      this.data.forEach(() => this.addRow());
      this.updateView();
      // this.getStores()
      this.touchedRows = [];
      this.userTable = this.fb.group({
        tableRows: this.fb.array([])
      });
      this.getSubAccounts()
      this.count()
      this.countJour()
      this.getCostCenters()

    }
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
       this.journalNum=data+1
      })
    }

    public getSubAccounts(): void {
      this.coaService.getAccountByType('sub').subscribe(
        (response) => {
          this.accounts = response;
          console.log('accounts',this.accounts);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    ngAfterOnInit() {
      this.control = this.userTable.get('tableRows') as FormArray;
    }


    emptyTable() {
      while (this.rows.length !== 0) {
        this.rows.removeAt(0);
      }
    }
    addRow() {
      const row = this.fb.group({
        itemId:'',
        itemCode:'',
        itemNameAr: '',
        itemNameEn:'',
        nationality: '',
        salary: '',
        purchasingItemQuantity:'',
        numberOfEmployee: '',
        purchasingItemValue:'',
        purchasingItemTotal:'',
        profession: '',
        taxRate: '',

      });
      this.rows.push(row);

      this.updateView();
    }

    deleteRow(index) {
      this.rows.removeAt(index);
      this.items.splice(index,1)
      this.updateView();
    }
    updateView() {
      this.dataSource.next(this.rows.controls);
    }

    getItemDetailsByItemCode(event){
      this.itemService.getItemsByCode(event.target.value).subscribe((data:any)=>{
      this.items.push(data)
      this.items[this.items.length-1].value=0
      this.items[this.items.length-1].total=0

      })

    }
    getValue(event,items){
      items.value= event.target.value*items.salary
      items.total=items.value+items.value*items.taxRate

    }
    public count(){
      this.purchasingService.countPurchasing().subscribe((data)=>{
        this.purchasingData.purchasingInvoiceNumber=`inv-${data+1}`

      })
    }
    getValueEmployeenumber(event,items){

      items.value= event.target.value*items.value
      items.total= items.value+items.value*items.taxRate

    }

    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }


    goPurchasingList() {
      this.router.navigate(['/purchase/purchasing/purchasing/']);
    }
      public onAddpurchasing(): void {
        this.submitted = true;
        if (this.form.invalid) {
          return;
        }
        this.purchasingService.addPurchasing(this.purchasingData).subscribe(
          (response: Purchasing) => {

            this.rows.value.forEach(element => {
              element.purchasingInvoiceId=response.purchasingInvoiceId
              this.purchasingItems.push({purchasingItemQuantity:element.purchasingItemQuantity,

                purchasingItemValue:element.purchasingItemValue,
                purchasingItemTotal:element.purchasingItemTotal,
                numberOfEmployee:element.numberOfEmployee,
                purchasing:{
                  purchasingInvoiceId:element.purchasingInvoiceId,
                },
                item:{
                  itemId:element.itemId
                }
              })
            });


            this.purchasingItems.forEach((element)=>{
              this.purchasingService.addPurchasingItem(element).subscribe(
                  (response: PurchasingItem) => {})
            }),(error: HttpErrorResponse) => {


    alert(error.message);

  }
  this.journalService.addJournalVoucher({journalVoucherId:'',journalVoucherNumber:this.journalNum,dateVoucher:this.purchasingData.date,}).subscribe
(response=>{console.log('journalVoucher',response);
// journalDetails={
//   journalVoucher: { journalVoucherId: response.journalVoucherId},
//   debit: this.purchasingData.total.toString(),
//   credit: '0',
//   journalVoucherDetailsId: '',
//   description: '',
//   chartAccounts: {
//     accountId: this.purchasingData.clientAccount.accountId
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
if(this.purchasingData.purchasingInvoiceType ==='debit')
journalDetailsfn(response.journalVoucherId,0,this.purchasingData.total,this.purchasingData.vendorAccount.accountId,null)
if(this.purchasingData.purchasingInvoiceType ==='cash')
journalDetailsfn(response.journalVoucherId,0,this.purchasingData.total,this.purchasingData.cashAccount.accountId,null)
journalDetailsfn(response.journalVoucherId,this.purchasingData.tax,0,this.purchasingData.taxAccount.accountId,this.purchasingData.costCenter.costCenterId)
journalDetailsfn(response.journalVoucherId,this.purchasingData.amount,0,this.purchasingData.purchasingAccount.accountId,this.purchasingData.costCenter.costCenterId)





})
Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

            this.goPurchasingList();
          },
          (error: HttpErrorResponse) => {

            console.log('daataa',this.purchasingData);

            alert(error.message);

            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

          }
        );
    }
    calculateInvoice(amount=0,total=0){
      this.rows.value.forEach((element)=>{
        amount+=element.purchasingItemValue
        this.purchasingData.amount=amount
        total+=element.purchasingItemTotal
        this.purchasingData.total=total
      })
      this.purchasingData.tax=(this.purchasingData.amount*0.15).toString()
    }
}
