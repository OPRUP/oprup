import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { CoaService } from 'src/app/coa/coa.service';
import { CostCenter } from 'src/app/cost-center/cost-center';
import { CostCenterService } from 'src/app/cost-center/cost-center.service';
import { JournalVoucherService } from 'src/app/jour-voucher/jour-voucher.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-jour-voucher',
  templateUrl: './create-jour-voucher.component.html',
  styleUrls: ['./create-jour-voucher.component.scss']
})
export class CreateJourVoucherComponent implements OnInit {

  voucherData = {
    journalVoucherId: '',
  journalVoucherNumber:'',
  dateVoucher: '',
  deleteFlag: 1,
  costCenter:{costCenterId:''}
  };
  costCenters
  allAccounts;
  accounts:any[]=[]
  voucherDetails:any[]=[]
  data = [];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = [
    'accountCode',
    'accountId',
    //'accountName',
    'debit',
    'credit',
    'description',
    'costCenter',
      'delete',
  ];
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({
    marks: this.rows,
    date:new FormControl(''),
    journalVoucherNumber:new FormControl(''),
    dateVoucher:new FormControl(''),
    costCenter:new FormControl(''),


  });

  constructor(
    private journalVoucherService: JournalVoucherService,
    private coaService: CoaService,
    private costCenter: CostCenterService,
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
    this.getAllCostCenters()
    this.getAllAccounts()
    this.count()
  }
  count(){
    this.journalVoucherService.count().subscribe(data=>{
      this.voucherData.journalVoucherNumber=`JV-${data+1}`
    })
  }
  getAllAccounts(){
    this.coaService.getAccountByType('sub').subscribe(res=>{
    this.allAccounts=res
    })
  }
  getAllJournalVoucher(){
    this.journalVoucherService.getAllJournalVoucher().subscribe(data=>{
      
    })
  }
  public getAllCostCenters(): void {
    this.costCenter.getAllCostCenter().subscribe(
      (response) => {
        this.costCenters = response;
        console.log(this.costCenters);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddVoucher(): void {
   if(this.totalDebit!==this.totalCredit){
    Swal.fire(this.translate.instant('Error'), this.translate.instant('debitNotEqualCredit'), 'error')
  return;
  }


      this.journalVoucherService.addJournalVoucher(this.voucherData).subscribe(
        (response) => {
          console.log('response',response);
          this.rows.value.forEach(element => {

            element.journalVoucherId=response.journalVoucherId
            if(element.costCenter!=='')
            {
            this.voucherDetails.push({credit:element.credit,
              debit:element.debit,
              description:element.description,
              journalVoucher:{
                journalVoucherId:element.journalVoucherId,
              },
              chartAccounts:{
                accountId:element.accountId
              },


              costCenter:{
                costCenterId:element.costCenter
              }

            })}
            else{
              this.voucherDetails.push({credit:element.credit,
                debit:element.debit,
                description:element.description,
                journalVoucher:{
                  journalVoucherId:element.journalVoucherId,
                },
                chartAccounts:{
                  accountId:element.accountId
                },


               

              })
            }

          });
          console.log('final',this.voucherDetails);
          this.voucherDetails.forEach((element)=>{
            this.journalVoucherService.addJournalVoucherDetalis(element).subscribe(
                (response) => {})
          }),(error: HttpErrorResponse) => {
            console.log(this.voucherData);

  alert(error.message);

  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

}
          // this.salesInvoiceService.addInvoiceItems(this.invoiceItems).subscribe(
          //   (response: InvoiceItems) => {})

          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          //this.siteVisitsService.getAllVisits();
          this.goSalesInvoiceList();
        },
        (error: HttpErrorResponse) => {
                    console.log(this.voucherData);

          alert(error.message);

          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        }
      );

  }
  goSalesInvoiceList() {
    this.router.navigate(['/accounts/jour-voucher/jour-voucher']);
  }
  emptyTable() {
    while (this.rows.length !== 0) {
      this.rows.removeAt(0);
    }
  }

  addRow() {
    const row = this.fb.group({
      accountId:'',
      accountCode: '',
      accountName: '',
      debit:'',
      credit:'',
      description:'',
      costCenter:'',
      delete:''

    });
    this.rows.push(row);

    this.updateView();
  }
  deleteRow(index) {
    this.rows.removeAt(index);
    this.accounts.splice(index,1)
    this.updateView();
  }

  updateView() {
    this.dataSource.next(this.rows.controls);
  }
  getItemDetailsByItemCode(event,index){
    this.coaService.getAccountByCode(event).subscribe((data:any)=>{
    this.accounts[index]=data[0]
    this.accounts[this.accounts.length-1].debit=0
    this.accounts[this.accounts.length-1].credit=0
    this.accounts[this.accounts.length-1].description=''
    console.log('items',data)
    console.log('items',event)
    })
  }

  totalDebit=0;
  totalCredit=0;
  getotalCredit(credit = 0) {
    this.rows.value.forEach((element) => {
      credit += Number(element.credit);

    });
    this.totalCredit = credit;
    console.log(this.totalCredit);



  }
  getotalDebit(debit = 0) {
    this.rows.value.forEach((element) => {
      debit += Number(element.debit);

    });
    this.totalDebit = debit;
    console.log(this.totalDebit);



  }
}



