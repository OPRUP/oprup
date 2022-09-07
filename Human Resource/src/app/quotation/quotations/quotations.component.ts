import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Items } from 'src/app/items/items';
import { ItemsserviceService } from 'src/app/items/items.service';
import { StoreService } from 'src/app/store/store.service';
import Swal from 'sweetalert2';

import { QuotationService } from '../quotation.service';


import { QuotationItem, Quotation
} from '../quotation';
import { X } from 'angular-feather/icons';
@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit {
  // this.router.navigate(['/employees/employees'])

  employees;
  customers;
  value=0;

  quotationData = {
    quotationId: '',
    quotationAutoNum: '',
    date: '',
    advancedPayment:'',
    quotationStatus: '',
    description:'',
    generalTerms:'',
    employee:  {employeeId:''},
    customer:{customerId:'' },
    deleteFlag: 1,
  };

  items:any[]=[]
  quotationItems:any[]=[]
  taxRate= ''
  data = [];
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
      'quotationItemValue',
      'quotationItemTotalValue',
      'monthlyOperationFee',
      'taxRate',
      'delete',
  ];
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({
    marks: this.rows,
    // date:new FormControl(''),
    // quotationAutoNum:new FormControl(''),
    // quotationStatus:new FormControl(''),
    // description:new FormControl(''),
    // generalTerms:new FormControl(''),
    // employeeId:new FormControl(''),
    // customerId:new FormControl(''),
  });

    constructor(private itemService:ItemsserviceService,
      private quotationService:QuotationService,
      private employeeService:EmployeeService,
      private customerService:CustomerService,
      private storeService:StoreService,
      private fb: FormBuilder,
      private translate: TranslateService,
      private router: Router
      ) {
        this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang') || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
      }

    ngOnInit(): void {
      //this.data.forEach(() => this.addRow());
      this.updateView();
      this.getCustomer();
      this.getCount();
      this.getEmployees();

    }

    public getEmployees(): void{
      this.employeeService.get().subscribe(
        (data:Employee[]) => {
        this.employees = data;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
            alert(error.message);
          }
      )
    }

    public getCustomer(): void {
      this.customerService.getAllQualifiedCustomer().subscribe(
        (response: Customer[]) => {
          this.customers = response;
          console.log('customers',this.customers);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    public getCount() {

      this.quotationService.getCount().subscribe((data) => {
        console.log('xsxssx',data)
          this.quotationData.quotationAutoNum=`QN0003000${data+1}`;
console.log('nnnnnnnnnnn', this.quotationData.quotationAutoNum)
        })

    }
    customerDetails;
    quotationId;
    isLoggedIn=true;
    getCustomerDetails(event){
      console.log("Computeeeeeeeeer",event)
      this.customerService.getCustomerById(event).subscribe((data)=>{
        this.customerDetails=data;

       this.isLoggedIn=false;
       this.quotationData.customer.customerId=this.customerDetails.customerId
        console.log("haneeeeen",this.quotationData.customer.customerId)
      })
    }


public onAddQuotation(): void {

  this.quotationService.addQuotation(this.quotationData).subscribe(
    (response: Quotation) => {
      console.log('response',response);
      this.rows.value.forEach((element) => {
        element.quotationId=response.quotationId
        this.quotationItems.push({
          quotationItemValue:element.quotationItemValue,
          employeeNumber:element.employeeNumber,
          quotationItemTotalValue:element.quotationItemTotalValue,
          operationFee:element.operationFee,
          monthlyOperationFee:element.monthlyOperationFee,
          quotation:{
            quotationId:element.quotationId,
          },
          item:{
            itemId:element.itemId
          }
        })
      });
      console.log('final',this.quotationItems);
      this.quotationItems.forEach((element)=>{
        console.log(element);
        this.quotationService.addQuotationItem(element).subscribe(
            (response) => {
              console.log('bbbbbbbb',response);
            })
      }),(error: HttpErrorResponse) => {
        console.log(this.quotationData);
      alert(error.message);
      console.log('jjj',response);
      Swal.fire('Error!! ', 'Error while adding quotation', 'error');
        }
        console.log('ssss',response);
        Swal.fire('Success', ' is added', 'success');

       this.goQuotationList()
       },
       (error: HttpErrorResponse) => {
                console.log(this.quotationData);

      alert(error.message);

      Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
    }
  );
}
emptyTable() {
  while (this.rows.length !== 0) {
    this.rows.removeAt(0);
  }
}
goQuotationList(){
  this.router.navigate(['/sales/view-quotation/view-quotation'])
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
    quotationItemValue: '',
    quotationItemTotalValue: '',
    operationFee:'',
   monthlyOperationFee:'',
  });
  this.rows.push(row);
  console.log('daaaaata',this.rows);


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
sum;
getItemDetailsByItemCode(event, index) {
  let reg = /^\d+$/
  var x,y,z,u
  this.itemService.getItemsByCode(event.target.value).subscribe(
    (data: any) => {
      console.log('xxxxxxxxxxxxxxxx', data);
      this.items[index] = data;
      this.items[this.items.length - 1].total = 0;

      this.items[this.items.length - 1].monthytotal = 0;
      x = (reg.test(this.items[this.items.length - 1].housingAllowance)?Number(this.items[this.items.length - 1].housingAllowance):0)
      y = (reg.test(this.items[this.items.length - 1].foodAllowance)?Number(this.items[this.items.length - 1].foodAllowance):0)
      z = (reg.test(this.items[this.items.length - 1].otherAllowance)?Number(this.items[this.items.length - 1].otherAllowance):0)
      u = Number(this.items[this.items.length - 1].salary)
      console.log('uuuuuuuuuuuuu',u)
      this.items[this.items.length - 1].value = x+y+z+u
this.sum= x+y+z+u;
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
   return  Number(oprFee) * Number(empNum);
}
//return Number(empNum) * Number(oprFee) * Number(total);
