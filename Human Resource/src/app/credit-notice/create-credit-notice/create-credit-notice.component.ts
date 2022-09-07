import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { CoaService } from 'src/app/coa/coa.service';
import { Companies } from 'src/app/companies/companies';
import { CompaniesService } from 'src/app/companies/companies.service';
import { CostCenterService } from 'src/app/cost-center/cost-center.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import { ItemsserviceService } from 'src/app/items/items.service';
import { JournalVoucherService } from 'src/app/jour-voucher/jour-voucher.service';
import { ProjectEmdadateService } from 'src/app/project-emdadat/project-emdadate.service';
import { InvoiceItems } from 'src/app/sales-invoice/sales-invoice';
import { Vendor } from 'src/app/vendor/Vendor';
import Swal from 'sweetalert2';
import { CreditNoticeService } from '../credit-notice.service';
import { CreditNotice } from '../CreditNotice';

@Component({
  selector: 'app-create-credit-notice',
  templateUrl: './create-credit-notice.component.html',
  styleUrls: ['./create-credit-notice.component.scss']
})
export class CreateCreditNoticeComponent implements OnInit {

   creditNoticeData = {
    creditNoticeId:'',

    creditNoticeNumber:'',
   creditNoticeType:'',
     clientAccount: { accountId: '' },
     cashAccount: { accountId: '' },
     taxAccount: { accountId: '' },
     salesAccount: { accountId: '' },
     project: { projectId: '' },
     customer:{customerId:''},
     employee: { employeeId: '' },
     date: '',
     deleteFlag: 1,
     amount: 0,
     tax: '',
     total: 0,
     costCenter:{costCenterId:''}
  };
  journalDetails = {
    journalVoucherDetailsId: '',
    debit: '',
    credit: '',
    description: '',
    journalVoucher: { journalVoucherId: '' },
    chartAccounts: { accountId: '' },
    costCenter:{costCenterId:''}
  };
  journalDetails2={
    journalVoucherDetailsId:'',
    debit: '',
    credit: '',
    description: '',
    journalVoucher:{journalVoucherId:''},
    chartAccounts: { accountId: '' },
  }
  customers;
  costCenters;
  projects;
  value = 0;
  employees;
  journalNum;
  items: any[] = [];
  invoiceItems: any[] = [];
  tax = 0;
  amount = 0;
  total = 0;
  data = [];
  taxNumber;
  accounts;
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = [
    'itemCode',
    'itemId',
    'itemNameAr',
    'nationality',
    'gender',
    'foodAllowance',
    'housingAllowance',
    'otherAllowance',
    'profession',
    'salary',
    'numberOfEmployees',
    'operationFee',
    'creditNoticeItemValue',
    'creditNoticeItemTotal',
    'monthlyOperationFee',
    'taxRate',
    'delete',
  ];
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({
    marks: this.rows,
    date: new FormControl(''),
    creditNoticeNumber: new FormControl(''),
    creditNoticeType: new FormControl(''),
    projectId: new FormControl(''),
    accountId: new FormControl(''),
    employeeId: new FormControl(''),
    taxNumber: new FormControl(''),
    customerId: new FormControl(''),

  });

  constructor(
    private journalService: JournalVoucherService,
    private costCenterService: CostCenterService,
    private creditNoticeService: CreditNoticeService,
    private customerService: CustomerService,
    private projectService: ProjectEmdadateService,
    private employeeService: EmployeeService,
    private coaService: CoaService,
    private itemService: ItemsserviceService,
    private router: Router,
    private translate: TranslateService,
    private fb: FormBuilder,
    public datepipe:DatePipe
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.data.forEach(() => this.addRow());
    this.updateView();
    this.getAllCustomers();
    this.getAllProjects();
    this.getAllEmployees();
    this.count();
    this.getSubAccounts();
    this.countJour();
    this.getCostCenters();
    var ddMMyyyy = this.datepipe.transform(new Date(),"dd-MM-yyyy");

  }
  count(){
    this.creditNoticeService.count().subscribe(data=>{
      this.creditNoticeData.creditNoticeNumber=(data+1).toString()
    })
  }
  public getAllCustomers(): void {
    this.customerService.getAllCustomer().subscribe(
      (response: Customer[]) => {
        this.customers = response;
        console.log(this.customers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    );
  }
  public countJour() {
    this.journalService.count().subscribe((data) => {
      console.log('ddddaaattaa', data);
      this.journalNum = `JV-${data + 1}`;
    });
  }
  // public count() {
  //   this.salesInvoiceService.countSalesInvoice().subscribe((data) => {
  //     this.creditNoticeData.salesInvoiceNumber = `inv-${data + 1}`;
  //   });
  // }
  public getAllProjects(): void {
    this.projectService.getAllProject().subscribe(
      (response) => {
        this.projects = response;
        console.log(this.projects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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
  public getSubAccounts(): void {
    this.coaService.getAccountByType('sub').subscribe(
      (response) => {
        this.accounts = response;
        console.log('accounts', this.accounts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getAllEmployees(): void {
    this.employeeService.get().subscribe(
      (response) => {
        this.employees = response;
        console.log('employees', this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddSaleInvoice(): void {
    this.creditNoticeService.addCreditNotice(this.creditNoticeData).subscribe(
      (response: CreditNotice) => {
        console.log('response', response);
        this.rows.value.forEach((element) => {
          element.creditNoticeId = response.creditNoticeId;
          this.invoiceItems.push({
            creditNoticeItemValue: element.creditNoticeItemValue,
            creditNoticeItemTotal: element.creditNoticeItemTotal,
            numberOfEmployees: element.numberOfEmployees,
            operationFee:element.operationFee,
            monthlyOperationFee:element.monthlyOperationFee,
            creditNotice: {
              creditNoticeId: element.creditNoticeId,
            },
            item: {
              itemId: element.itemId,
            },
          });
        });
        console.log('final', this.invoiceItems);
        this.invoiceItems.forEach((element) => {
          this.creditNoticeService
            .addInvoiceItems(element)
            .subscribe((response) => {});
        }),
          (error: HttpErrorResponse) => {
            console.log(this.creditNoticeData);

            alert(error.message);

            Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
          };

        this.journalService
          .addJournalVoucher({
            journalVoucherId: '',
            journalVoucherNumber: this.journalNum,
            dateVoucher: this.creditNoticeData.date,
            costCenter: {
              costCenterId: this.creditNoticeData.costCenter.costCenterId,
            },
          })
          .subscribe((response) => {
            console.log('journalVoucher', response);
            // journalDetails={
            //   journalVoucher: { journalVoucherId: response.journalVoucherId},
            //   debit: this.creditNoticeData.total.toString(),
            //   credit: '0',
            //   journalVoucherDetailsId: '',
            //   description: '',
            //   chartAccounts: {
            //     accountId: this.creditNoticeData.clientAccount.accountId
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


              journalDetailsfn(
                response.journalVoucherId,
                0,
                this.creditNoticeData.total,
                this.creditNoticeData.clientAccount.accountId,
                null
              );

            journalDetailsfn(
              response.journalVoucherId,
              this.creditNoticeData.tax,
              0,
              this.creditNoticeData.taxAccount.accountId,
              this.creditNoticeData.costCenter.costCenterId

            );
            journalDetailsfn(
              response.journalVoucherId,
              this.creditNoticeData.amount,
              0,
              this.creditNoticeData.salesAccount.accountId,
              this.creditNoticeData.costCenter.costCenterId
            );
          });
        // this.salesInvoiceService.addInvoiceItems(this.invoiceItems).subscribe(
        //   (response: InvoiceItems) => {})


        Swal.fire('Success', 'Site visit is added', 'success');
        //this.siteVisitsService.getAllVisits();
        this.goCreditNoticeList();
      },
      (error: HttpErrorResponse) => {
        console.log(this.creditNoticeData);

        alert(error.message);

        Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
      }
    )
  }
  goCreditNoticeList() {
    this.router.navigate(['/accounts/creditNotice/creditNotice']);
  }
  emptyTable() {
    while (this.rows.length !== 0) {
      this.rows.removeAt(0);
    }
  }

  addRow() {
    const row = this.fb.group({
      itemId: '',
      itemCode: '',
      itemNameAr: '',
      //itemNameEn: '',
      nationality: '',
      numberOfEmployees: '',
      creditNoticeItemValue: '',
      creditNoticeItemTotal: '',
      profession: '',
      taxRate: '',
      delete: '',
      gender: '',
      salary: '',
      operationFee:'',
      monthlyOperationFee:'',
      foodAllowance: '',
      housingAllowance: '',
      otherAllowance: '',
    });

    this.rows.push(row);

    this.updateView();
  }
  deleteRow(index) {
    this.rows.removeAt(index);
    this.items.splice(index, 1);
    this.updateView();
  }

  updateView() {
    this.dataSource.next(this.rows.controls);
  }
  sum;
  getItemDetailsByItemCode(event, index) {
    let reg = /^\d+$/
    var x,y,z,u;
    this.itemService
      .getItemsByCode(event.target.value)
      .subscribe((data: any) => {
        this.items[index] = data;
        this.items[this.items.length - 1].total = 0;

        this.items[this.items.length - 1].monthytotal = 0;
        x = (reg.test(this.items[this.items.length - 1].housingAllowance)?Number(this.items[this.items.length - 1].housingAllowance):0)
        y = (reg.test(this.items[this.items.length - 1].foodAllowance)?Number(this.items[this.items.length - 1].foodAllowance):0)
        z = (reg.test(this.items[this.items.length - 1].otherAllowance)?Number(this.items[this.items.length - 1].otherAllowance):0)
        u = Number(this.items[this.items.length - 1].salary)
         this.items[this.items.length - 1].value = x+y+z+u
        this.sum = x+y+z+u
        var empNum =  this.items[this.items.length - 1].numberOfEmployees;
        var oprFee= this.items[this.items.length - 1].operationFee
        var total =  this.items[this.items.length - 1].value

         this.items[this.items.length - 1].monthytotal = gelAll(empNum,oprFee)
      });
  }


  operationFee;
  getMonthlyCost(event, items) {
    var empNum = items.numberOfEmployees;
    var oprFee= items.operationFee;
    if (oprFee!=null || oprFee!=0 || oprFee!=""){
      items.value = 0;
    items.total=0
      }
   // var total =  items.value;
    items.monthytotal = gelAll(empNum,oprFee)

  }

  getValueQuantity(event, items) {
    let reg = /^\d+$/
    var empNum = items.numberOfEmployees;

var oprFee= items.operationFee;
if (oprFee==null || oprFee==0 || oprFee==""){

    var total =  items.value ;



    console.log('val',items.value);
    items.value =this.sum * items.numberOfEmployees;
    items.total = items.value + items.value * items.taxRate;
   // this.calculateInvoice()
}

else{
  items.value = 0;
  items.total=0

}
items.monthytotal = gelAll(empNum,oprFee)
  }
  calculateInvoice(amount=0, total = 0) {
    this.rows.value.forEach((element) => {
      amount += element.creditNoticeItemValue;
      if (amount==null || amount==0 ){
        amount += element.monthlyOperationFee;
        this.creditNoticeData.amount = amount;
       total += element.monthlyOperationFee;
       this.creditNoticeData.tax = (
        this.creditNoticeData.amount * 0.15
      ).toString();
        this.creditNoticeData.total = total+Number(this.creditNoticeData.tax );
      }
      else
      {
        this.creditNoticeData.amount = amount;
        total += element.creditNoticeItemTotal;
        this.creditNoticeData.total = total;
        this.creditNoticeData.tax = (
          this.creditNoticeData.amount * 0.15
        ).toString();
      }

    });

  }


// calculateInvoice2(amount = 0, total = 0) {
//   this.rows.value.forEach((element) => {
//     amount += element.monthytotal;
//     this.creditNoticeData.amount = amount;
//    // total += element.creditNoticeItemTotal;
//     this.creditNoticeData.total = amount;
//   });
//   this.creditNoticeData.tax=(0).toString();
//   // this.creditNoticeData.tax = (
//   //   this.creditNoticeData.amount * 0.15
//   // ).toString();
// }
}

  function gelAll(empNum,oprFee) {

    if (empNum==null || empNum==0 || empNum==""){
      empNum=1;
    }
    if (oprFee==null || oprFee==0 || oprFee==""){
      oprFee=0;
    }
       return Number(empNum) * Number(oprFee) ;
  }
