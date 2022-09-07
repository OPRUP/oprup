import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Contract } from '../Contract';
import { ContractService } from '../contract.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss'],
})
export class CreateContractComponent implements OnInit {

  ContractData = {
    contractId: '',
    durationofContract: '',
    downpayment: '',
    contractNumber: '',
    generalTerms:'',
   date: new Date(),
    type: '',
    customer: {
      customerId:'',
    },
    description: '',
    deleteFlag: 1,
  };
  companies;
  customers;
  accounts;
  employees;

  items: any[] = [];
  ContractItems: any[] = [];
  taxRate = '';
  data = [];
  Contract;
  value = 0;
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
    'employeeNumber',
    'operationFee',
    'contractItemValue',
    'contractItemTotalValue',
    'monthlyOperationFee',
    'taxRate',
    'delete',
  ];
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({
    marks: this.rows,
  //   durationofContract: new FormControl(''),
  //   downpayment: new FormControl(''),
  //   date: new FormControl(''),
  //   customerId: new FormControl(''),
  //   type: new FormControl(''),
  //   contractNumber: new FormControl(''),
  });

  datePipe: DatePipe = new DatePipe('en-US');
  date = new Date();
  currentDate;
  max;
  constructor(
    private ContractService: ContractService,
    private employeeService: EmployeeService,
    private customerService: CustomerService,
    private coaService: CoaService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    public fb: FormBuilder
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);

    document.documentElement.lang = lang;
    this.ContractData.date = new Date();
    var date = new Date();
    var transformDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    console.log(transformDate);
    this.currentDate = transformDate;
  }


  ngOnInit(): void {

    this.updateView();

    this.getAllCustomers();
    this.count();
  }



  public getAllCustomers(): void {
    this.customerService.getAllCustomerTransfer().subscribe(
      (response: Customer[]) => {
        console.log('getAllCustomer', response);
        this.customers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goContractList() {
    this.router.navigate(['/sales/Contract/Contract']);
  }

  public count() {
    this.ContractService.countContract().subscribe((data) => {
      console.log('xsxssx',data)
      this.ContractData.contractNumber = `CR0002500${data + 1}`;
      console.log('xsxssx',this.ContractData.contractNumber)
    });
  }

  customerDetails;
  isLoggedIn = true;
  getCustomer(event) {
    this.customerService.getCustomerById(event).subscribe((data) => {
      this.customerDetails = data;
      this.ContractData.customer.customerId = data.customerId;
      this.isLoggedIn = false;
    });
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddContract(): void {
    // this.submitted = true;
    // if (this.form.invalid) {
    //   return;
    // }
    this.ContractService.addContract(this.ContractData).subscribe(
      (response: Contract) => {
        console.log('rowsval',this.rows.value);
        this.rows.value.forEach((element) => {
          element.contractId = response.contractId;
          this.ContractItems.push({
            contractItemValue: element.contractItemValue,
            employeeNumber: element.employeeNumber,
            contractItemTotalValue: element.contractItemTotalValue,
            operationFee:element.operationFee,
            monthlyOperationFee:element.monthlyOperationFee,
            contract: {
              contractId: element.contractId,
            },
            item: {
              itemId: element.itemId,
            },
          });
        });

        console.log('final', this.ContractItems);
        this.ContractItems.forEach((element) => {
          console.log(element);
          this.ContractService.addContractItems(element).subscribe(
            (response) => {
              console.log('done');
            }
          );
        }),
          (error: HttpErrorResponse) => {
            console.log(this.ContractData);

            alert(error.message);

            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
          };

          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.goQuotationList();
      },
      (error: HttpErrorResponse) => {
        console.log(this.ContractData);

        alert(error.message);

        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
      }
    );
  }
  emptyTable() {
    while (this.rows.length !== 0) {
      this.rows.removeAt(0);
    }
  }
  goQuotationList() {
    this.router.navigate(['/sales/Contract/Contract']);
  }
  addRow() {
    const row = this.fb.group({
      itemId: '',
      itemCode: '',
      itemNameAr: '',
      nationality: '',
      taxRate: '',
      profession: '',
      gender: '',
      foodAllowance: '',
      salary:'',
      employeeNumber:'',
      housingAllowance: '',
      otherAllowance: '',
      contractItemValue: '',
      contractItemTotalValue: '',
      operationFee:'',
     monthlyOperationFee:'',
    });


    this.rows.push(row);
    console.log('daaaaata', this.rows);

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
    var x,y,z,u
    this.ContractService.getcontractItemByItem(event.target.value).subscribe(
      (data: any) => {
        console.log('xxxxxxxxxxxxxxxx', data);
        this.items[index] = data;
        this.items[this.items.length - 1].total = 0;


        this.items[this.items.length - 1].monthytotal = 0;
        x = (reg.test(this.items[this.items.length - 1].housingAllowance)?Number(this.items[this.items.length - 1].housingAllowance):0)
        y = (reg.test(this.items[this.items.length - 1].foodAllowance)?Number(this.items[this.items.length - 1].foodAllowance):0)
        z = (reg.test(this.items[this.items.length - 1].otherAllowance)?Number(this.items[this.items.length - 1].otherAllowance):0)
        u = Number(this.items[this.items.length - 1].salary)
         this.items[this.items.length - 1].value = x+y+z+u
        this.sum = x+y+z+u
        var empNum =  this.items[this.items.length - 1].employeeNumber;
        var oprFee= this.items[this.items.length - 1].operationFee
        var total =  this.items[this.items.length - 1].value

         this.items[this.items.length - 1].monthytotal = gelAll(empNum,oprFee)

      }
    );
  }

  operationFee;
  getMonthlyCost(event, items) {
    var empNum = items.employeeNumber;
    var oprFee= items.operationFee;
   // var total =  items.value;
   if (oprFee!=null || oprFee!=0 || oprFee!=""){
  items.value = 0;
items.total=0
  }

    items.monthytotal = gelAll(empNum,oprFee)
  }

  getValueQuantity(event, items) {
    let reg = /^\d+$/

    var empNum = items.employeeNumber;
    var oprFee= items.operationFee;
    console.log('for test: ',oprFee)
    if (oprFee==null || oprFee==0 || oprFee==""){


      var total =  items.value ;



      console.log('val',items.value);
      items.value =this.sum * items.employeeNumber;
      items.total = items.value + items.value * items.taxRate;

    }else{
      items.value = 0;
      items.total=0
    }
    items.monthytotal = gelAll(empNum,oprFee)

   }
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
// return Number(empNum) * Number(oprFee) * Number(total);
