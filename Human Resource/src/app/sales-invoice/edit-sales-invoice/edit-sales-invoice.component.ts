import { InvoiceItems } from './../sales-invoice';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { ItemsserviceService } from 'src/app/items/items.service';
import { ProjectEmdadateService } from 'src/app/project-emdadat/project-emdadate.service';
import { Store } from 'src/app/store/store';
import Swal from 'sweetalert2';
import { SalesInvoice } from '../sales-invoice';
import { salesInvoiceService } from '../sales-invoice.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import { CoaService } from 'src/app/coa/coa.service';

@Component({
  selector: 'app-edit-sales-invoice',
  templateUrl: './edit-sales-invoice.component.html',
  styleUrls: ['./edit-sales-invoice.component.scss']
})
export class EditSalesInvoiceComponent implements OnInit {

invoiceId!: number;
salesInoviceData!:SalesInvoice;
customers;
projects;
items:any[]=[];
invoiceItems:any[]=[];
tempDeletedData:any[] = [];
employees;
amount=0;
tax=0;
total=0;
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
  'salesInvoiceItemValue',
  'salesInvoiceItemTotal',
  'monthlyOperationFee',
  'taxRate',
  'delete',
];

rows: FormArray = this.fb.array([]);
form: FormGroup = this.fb.group({
  marks: this.rows,
  invoiceNumber: new FormControl(''),
  salesInvoiceType: new FormControl(''),
  projectId: new FormControl(''),
  accountId: new FormControl(''),
  employeeId: new FormControl(''),
  taxNumber: new FormControl(''),
  customerId: new FormControl(''),

});
  constructor(
    private salesInvoiceService: salesInvoiceService,
    private customerService: CustomerService,
    private coaService:CoaService,
    private employeeService:EmployeeService,
    private projectService: ProjectEmdadateService,
    private itemService: ItemsserviceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    public fb: FormBuilder,
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    this.getInvoiceItemsByInvoiceId()
    this.getInvoice();
    this.getAllCustomers();
    this.getAllProjects()
    this.getAllEmployees()
    this.getSubAccounts()
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

  gojobList() {
    this.router.navigate(['/job/job/']);
  }
  public getAllProjects(): void {
    this.projectService.getAllProject().subscribe(
      (response) => {
        this.projects = response;
        console.log('projects',this.projects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getInvoice() {
    this.invoiceId = this.activateRoute.snapshot.params['id'];
    this.salesInvoiceService.getInvoiceById(this.invoiceId).subscribe(
      (data) => {
        this.salesInoviceData = data;

        //this.salesInoviceData.date=new Date(this.salesInoviceData.date);
        console.log("aaaa",this.salesInoviceData);
      },
      (error) => console.log(error)
    );
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
  public getInvoiceItemsByInvoiceId() {
    this.invoiceId = this.activateRoute.snapshot.params['id'];
    this.salesInvoiceService.getInvoiceItemsByInvocieId(this.invoiceId).subscribe(
      (data) => {
//         deleteFlag: 1
// item: {itemId: 1, itemCode: 'bangladesh', itemNameAr: 'عامل بناء بنغلاديش', itemNameEn: 'bangalo', nationality: 'بنجلاديش', …}
// salesInvoice: {salesInvoiceId: 24, salesInvoiceNumber: '1', salesInvoiceType: 'cash', customer: {…}, project: {…}, …}
// salesInvoiceItemId: 6
// salesInvoiceItemQuantity: 10
// salesInvoiceItemTotal: 172
// salesInvoiceItemValue: 150
        this.invoiceItems=data
        let filtered =data.filter((element)=>{
          return element.deleteFlag ==1
        })
        console.log('invId',data);

        filtered.forEach((element)=>{
          this.items.push({
            itemId:element.item.itemId,
      itemCode: element.item.itemCode,
      itemNameAr:element.item.itemNameAr,
     // itemNameEn:element.item.itemNameEn,
      nationality: element.item.nationality,
      salary: element.item.salary,
      gender:element.item.gender,
      salesInvoiceItemQuantity:element.salesInvoiceItemQuantity,
      numberOfEmployees:element.numberOfEmployees,
      value:element.salesInvoiceItemValue,
      total:element.salesInvoiceItemTotal,
      profession: element.item.profession,
      taxRate: element.item.taxRate,
      foodAllowance: element.item.foodAllowance,
      housingAllowance: element.item.housingAllowance,
      otherAllowance: element.item.otherAllowance,
      operationFee: element.operationFee,
      monthlyOperationFee:element.monthlyOperationFee,
          })
          this.tempDeletedData.push(element)
        })
        console.log('items',this.items);

        this.items.forEach(() => this.addRow());
        console.log('rowss',this.rows);


      },
      (error) => console.log(error)
    );
  }

  public onUpdateSaleInvoice(): void {
    console.log('deeeel',this.tempDeletedData);


    this.salesInvoiceService.updateInvoice(this.salesInoviceData).subscribe(
      (response: SalesInvoice) => {
        console.log('response',response);
        this.tempDeletedData.forEach(element=>{
          this.salesInvoiceService.deleteInvoiceItem(element).subscribe((response:InvoiceItems)=>{console.log('dddaaasss');
          }) ,(error: HttpErrorResponse) => {
            console.log('error',element);

      alert(error.message);

      Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
      }
         })
        this.rows.value.forEach(element => {
          element.salesInvoiceId=response.salesInvoiceId
          this.invoiceItems.push({salesInvoiceItemQuantity:element.salesInvoiceItemQuantity,
            salesInvoiceItemValue:element.salesInvoiceItemValue,
            salesInvoiceItemTotal:element.salesInvoiceItemTotal,
            numberOfEmployees:element.numberOfEmployees,
            operationFee:element.operationFee,
            monthlyOperationFee:element.monthlyOperationFee,
            salesInvoice:{
              salesInvoiceId:element.salesInvoiceId,
            },
            item:{
              itemId:element.itemId
            }


          })
        });
        console.log('final',this.invoiceItems);
        this.invoiceItems=this.invoiceItems.filter(element=>{
          return !element.salesInvoiceItemId
        })
        console.log('fffffffff',this.invoiceItems);

        this.invoiceItems.forEach((element)=>{
          this.salesInvoiceService.addInvoiceItems(element).subscribe(
              (response) => {})
              ,(error: HttpErrorResponse) => {
                console.log(this.salesInoviceData);

             alert(error.message);

      Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
      }
        })
        // this.salesInvoiceService.addInvoiceItems(this.invoiceItems).subscribe(
        //   (response: InvoiceItems) => {})

        Swal.fire('Success', 'Site visit is added', 'success');
        //this.siteVisitsService.getAllVisits();
        this.goSalesInvoiceList();
      },
      (error: HttpErrorResponse) => {
                  console.log(this.salesInoviceData);

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
  goSalesInvoiceList() {
    this.router.navigate(['/accounts/sales-invoice/sales-invoice']);
  }
  addRow() {
    const row = this.fb.group({
      itemId: '',
      itemCode: '',
      itemNameAr: '',
      //itemNameEn: '',
      nationality: '',
      numberOfEmployees: '',
      salesInvoiceItemValue: '',
      salesInvoiceItemTotal: '',
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
    console.log("updated",this.items)
    this.updateView();
  }
  deleteRow(index) {
    // this.salesInvoiceService.deleteInvoiceItem(this.invoiceItems[index]).subscribe((data)=>{
    //   console.log('delete',data);

    // })

    console.log('deleted',this.tempDeletedData);

    this.rows.removeAt(index);

    this.items.splice(index,1)

    this.updateView();
  }

  updateView() {
    this.dataSource.next(this.rows.controls);
  }
  sum;
  getItemDetailsByItemCode(event,index){
    console.log('haneen jaradat')
    let reg = /^\d+$/

    this.itemService
      .getItemsByCode(event.target.value)
      .subscribe((data: any) => {
        this.items[index] = data;
        this.items[this.items.length - 1].total = 0;

        this.items[this.items.length - 1].monthytotal = 0;

      });
  }
  operationFee;
  getMonthlyCost(event, items) {
    var empNum = items.numberOfEmployees;
    var oprFee= items.operationFee;
    var total =  items.value;
    items.monthytotal = gelAll(empNum,oprFee)
  }

  getValueQuantity(event, items) {
    let reg = /^\d+$/
    var x,y,z,u;

////////////////////
x = (reg.test(this.items[this.items.length - 1].housingAllowance)?Number(this.items[this.items.length - 1].housingAllowance):0)
y = (reg.test(this.items[this.items.length - 1].foodAllowance)?Number(this.items[this.items.length - 1].foodAllowance):0)
z = (reg.test(this.items[this.items.length - 1].otherAllowance)?Number(this.items[this.items.length - 1].otherAllowance):0)
u = Number(this.items[this.items.length - 1].salary)
this.items[this.items.length - 1].value = x+y+z+u
this.sum = x+y+z+u
console.log('xxxxxxx',x)
console.log('yyyyyy',y)
console.log('zzzzz',z)
console.log('uuuuuuuuuuuuu',u)
var empNum =  this.items[this.items.length - 1].numberOfEmployees;
var oprFee= this.items[this.items.length - 1].operationFee
var total =  this.items[this.items.length - 1].value

this.items[this.items.length - 1].monthytotal = gelAll(empNum,oprFee)
 ///////////////
 var empNum = items.numberOfEmployees;
 var oprFee= items.operationFee;

 var total =  items.value ;

 items.monthytotal = gelAll(empNum,oprFee)

 console.log('val of numberOfEmployees;',items.numberOfEmployees);
 console.log('val of sum;',this.sum);
 items.value =this.sum * items.numberOfEmployees;
 items.total = items.value + items.value * items.taxRate;
  }
  // getValueEmployeesnumber(event,items){
  //   console.log('val',items.value);

  //   items.value= event.target.value*items.value
  //   items.total= items.value+items.value*items.taxRate

  // }
  public getAllEmployees(): void {
    this.employeeService.get().subscribe(
      (response) => {
        this.employees = response;
        console.log('employees',this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  calculateInvoice(amount=0,total=0){
    this.rows.value.forEach((element)=>{
      amount+=element.salesInvoiceItemValue
      this.salesInoviceData.amount=amount
      total+=element.salesInvoiceItemTotal
      this.salesInoviceData.total=total
    })
    this.salesInoviceData.tax=(this.salesInoviceData.amount*0.15).toString()
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
