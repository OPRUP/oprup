import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { ItemsserviceService } from 'src/app/items/items.service';
import Swal from 'sweetalert2';
import { Quotation, QuotationItem } from '../quotation';
import { QuotationService } from '../quotation.service';


@Component({
  selector: 'app-print-quotation',
  templateUrl: './print-quotation.component.html',
  styleUrls: ['./print-quotation.component.scss']
})
export class PrintQuotationComponent implements OnInit {
  quotations
  quotationId!:number;
  quotationData!:Quotation;
  customers;
  employees;
  items:any[]=[];
  quotationItems:any[]=[];
  tempDeletedData:any[] = [];


  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = [
    'itemCode',
    'itemId',
    'itemNameAr',
    // 'itemNameEn',
    'nationality',
    'profession',
    'hourlyRate',
    'quotationItemTotalValue',

    'taxRate',

  ];

  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({
    marks: this.rows,
    date:new FormControl(''),
    advancedPayment:new FormControl(''),
    quotationAutoNum:new FormControl(''),
    employeeId:new FormControl(''),
    customerId:new FormControl(''),
    radio1:new FormControl(''),

  });
    constructor(
      private quotationService: QuotationService,
      private customerService: CustomerService,
      private employeeservice: EmployeeService,
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
      this.getQuotationItemsByQuotationId()
      this.getQuotation();
      this.getAllCustomers();
      this.getAllEmployees();
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


    public getAll(): void {
      this.quotationId = this.activateRoute.snapshot.params['id'];
      this.quotationService.getQuotationById(this.quotationId).subscribe(
        (data) => {
          this.quotations = data;
          console.log(this.customers);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }




    goQuotationList() {
      this.router.navigate(['/view-quotation/view-quotation/']);
    }
    public getAllEmployees(): void {
      this.employeeservice.get().subscribe(
        (response: Employee[]) => {
          this.employees = response;
          console.log('employees',this.employees);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public getQuotation() {
      this.quotationId = this.activateRoute.snapshot.params['id'];
      this.quotationService.getQuotationById(this.quotationId).subscribe(
        (data) => {
          this.quotationData = data;

          //this.quotationData.date=new Date(this.quotationData.date);
          console.log("aaaa",this.quotationData);
        },
        (error) => console.log(error)
      );
    }



    public getQuotationItemsByQuotationId() {
      this.quotationId = this.activateRoute.snapshot.params['id'];
      this.quotationService.getQuotationItemByQuotationId(this.quotationId).subscribe(
        (data) => {

          this.quotationItems=data
          let filtered =data.filter((element)=>{
            return element.deleteFlag ==1
          })
          console.log('invId',filtered);

          filtered.forEach((element)=>{
            this.items.push({
              itemId:element.item.itemId,
        itemCode: element.item.itemCode,
        itemNameAr:element.item.itemNameAr,
        nationality: element.item.nationality,
        profession: element.item.profession,

        salary: element.item.salary,

        quotationItemTotalValue:element.quotationItemTotalValue,

        taxRate: element.item.taxRate,
            })
            this.tempDeletedData.push(element)
          })
          console.log('items',this.items);
          console.log('tempdeleted',this.tempDeletedData)
          this.items.forEach(() => this.addRow());
          console.log('rowss',this.rows);


        },
        (error) => console.log(error)
      );
    }

  public onUpdateQuotation(): void {
    console.log('deeeel',this.tempDeletedData);
    this.quotationService.updateQuotation(this.quotationData).subscribe(
      (response) => {
        console.log('response',response);
        this.tempDeletedData.forEach(element=>{
          this.quotationService.deleteQuotationItem(element).subscribe((response)=>{console.log('dddaaasss');
          }) ,(error: HttpErrorResponse) => {
            console.log('error',element);

      alert(error.message);

      Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
      }
         })
        this.rows.value.forEach(element => {
          element.quotationId=response.quotationId
          //'quotationItemValue',
    //'quotationItemTotalValue',
          this.quotationItems.push({
           // quotationItemValue:element.quotationItemValue,
            quotationItemTotalValue:element.quotationItemTotalValue,
            quotation:{
              quotationId:element.quotationId,
            },
            item:{
              itemId:element.itemId
            },


          })
        });
        console.log('final',this.quotationItems);
        this.quotationItems=this.quotationItems.filter(element=>{
          return !element.quotationItemId
        })
        console.log('fffffffff',this.quotationItems);

        this.quotationItems.forEach((element)=>{
          this.quotationService.addQuotationItem(element).subscribe(
              (response) => {})
              ,(error: HttpErrorResponse) => {
                console.log(this.quotationData);

      alert(error.message);

      Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
      }
        })
        // this.salesInvoiceService.addInvoiceItems(this.invoiceItems).subscribe(
        //   (response: InvoiceItems) => {})

        Swal.fire('Success', 'Site visit is added', 'success');
        //this.siteVisitsService.getAllVisits();
        //this.goSalesInvoiceList();
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

    addRow() {
      const row = this.fb.group({
        itemId:'',
        itemCode: '',
        itemNameAr: '',
        // itemNameEn:'',
        nationality: '',
        profession: '',
        // salesInvoiceItemQuantity:'',
        // salesInvoiceItemValue:'',
        // salesInvoiceItemTotal:'',
        salary:'',
        quotationItemTotalValue:'',
        taxRate: '',
      });
      this.rows.push(row);
      console.log("updated",this.items)
      this.updateView();
    }
    deleteRow(index) {
      // this.salesInvoiceService.deleteInvoiceItem(this.quotationItems[index]).subscribe((data)=>{
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
    getItemDetailsByItemCode(event,index){
      this.itemService.getItemsByCode(event.target.value).subscribe((data:any)=>{
        this.items[index]=data
        this.items[index].quotationItemTotalValue=Number(this.items[index].salary)+this.items[index].salary*this.items[index].taxRate
        console.log('itemsccccc',this.items)
      })
    }
    // getValue(event,items){

    //   items.value= event.target.value*items.hourlyRate
    //   items.total= items.value+items.value*0.15

    // }
    printPage() {

      window.print();
    }
  }

