import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { CoaService } from 'src/app/coa/coa.service';

import { ContractService } from 'src/app/contract/contract.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { ItemsserviceService } from 'src/app/items/items.service';
import Swal from 'sweetalert2';
import { Contract } from '../extension';
import { ExtensionsService } from '../extensions.service';

@Component({
  selector: 'app-create-extension',
  templateUrl: './create-extension.component.html',
  styleUrls: ['./create-extension.component.scss']
})
export class CreateExtensionComponent implements OnInit {
  accounts;
  contractId!: number;
 contractData!:Contract;
  vendors;
  items:any[]=[];
  InvoiceItems:any[]=[];
  tempDeletedData:any[] = [];


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
    // date:new FormControl(''),
    // purchasingInvoiceNumber:new FormControl(''),
    // purchasingInvoiceType:new FormControl(''),
    // vendorId:new FormControl(''),
    // radio1:new FormControl(''),

  });
    constructor(
      private extensionsService: ExtensionsService,
      private itemService: ItemsserviceService,
      private customerService:CustomerService,
      private contractservice:ContractService,
      private router: Router,
      private activateRoute: ActivatedRoute,
      private translate: TranslateService,
      public fb: FormBuilder,
      private coaService:CoaService

    ) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang') || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

    ngOnInit(): void {
     // this.getInvoiceItemsByInvoiceId()
      //this.getInvoice();
      this.getAllContracts();
      this.getAllCustomers();
    }


    gojobList() {
      this.router.navigate(['/purchase/purchasing/purchasing/']);
    }
   ///addded
   customerDetails;
   quotationId;
   isLoggedIn=true;
   customers;
   getCustomerDetails(event){
     console.log("Computeeeeeeeeer",event)
     this.customerService.getCustomerById(event).subscribe((data)=>{
       this.customerDetails=data;
       let id=this.customerDetails.customerId;
       this.getContractDetailsByCustomerId(id);
       //this.contractDetails= this.customerDetails.customerId;
      this.isLoggedIn=false;
     // this.customerData.customer.customerId=this.customerDetails.customerId
       //console.log("haneeeeen",this.ContractData.customer.customerId)

     })
   }
   getContractDetailsByCustomerId(id:number){
    console.log("vvvvvv", id)
    this.extensionsService.findbyCustomerID(id).subscribe((data)=>{
        this.contractDetails=data;
    console.log("xxxxxxxxxxxxxx", this.contractDetails)
     this.isContract=false;
    })
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
   isContract=true;
  contractDetails;
  getContractDetails(event){
    console.log("Computeeeeeeeeer",event)
    this.contractservice.getContractById(event).subscribe((data)=>{
    this.contractDetails=data;
    console.log("Computeeeeeeeeer", this.contractDetails)
     this.isContract=false;
    })
  }

  contracts;
  public getAllContracts(): void {
    this.contractservice.getAllContract().subscribe(
      (response) => {
        console.log('getAllCotract', response);
        this.contracts = response;
        console.log('get All Cotract', this.contracts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


    public onUpdateExtension(): void {
      console.log('deeeel',this.tempDeletedData);

      this.extensionsService.updateContract(this.contractDetails).subscribe(
        (response) => {
          console.log('response',response);
          this.tempDeletedData.forEach(element=>{
            this.contractservice.deleteContractItem(element).subscribe((response)=>{console.log('dddaaasss');
            }) ,(error: HttpErrorResponse) => {
              console.log('error',element);

        alert(error.message);

        Swal.fire(this.translate.instant('error')!!, this.translate.instant('ErrorwhileaddingPurchasingInvoice'), 'error');
        }

           })
          this.rows.value.forEach(element => {
            element.contractId=response.contractId

            this.InvoiceItems.push({
              contractItemValue:element.contractItemValue,
              contractItemTotalValue:element.contractItemTotalValue,
              employeeNumber:element.employeeNumber,
              contractExtension:1,
            operationFee:element.operationFee,
            monthlyOperationFee:element.monthlyOperationFee,
              contract:{
                contractId:element.contractId,
              },
              item:{
                itemId:element.itemId
              }
            })
          });
          console.log('final',this.InvoiceItems);
          this.InvoiceItems=this.InvoiceItems.filter(element=>{
            return !element.contractItemId
          })
          console.log('fffffffff',this.InvoiceItems);
          console.log('Size = ',this.InvoiceItems.length);
          this.InvoiceItems.forEach((element)=>{
            this.contractservice.addContractItems(element).subscribe(
                (response) => {})
                ,(error: HttpErrorResponse) => {
                  console.log("AABED")
                  console.log(this.contractData);

        alert(error.message);

        Swal.fire(this.translate.instant('error')!!, this.translate.instant('ErrorwhileaddingPurchasingInvoice'), 'error');
        }
          })

          Swal.fire('Success', 'Site visit is added', 'success');

          this.goPurchasingList();
        },
        (error: HttpErrorResponse) => {
                    console.log(this.contractData);

          alert(error.message);

          Swal.fire(this.translate.instant('error')!!,this.translate.instant('ErrorwhileaddingPurchasingInvoice'), 'error');
        }
      );


  }

    emptyTable() {
      while (this.rows.length !== 0) {
        this.rows.removeAt(0);
      }
    }
    goPurchasingList() {
      this.router.navigate(['/sales/Contract-Extensions/Extensions']);
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
    getItemDetailsByItemCode(event, index) {
      let reg = /^\d+$/
      var x,y,z,u
      this.extensionsService.getcontractItemByItem(event.target.value).subscribe(
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
       return  Number(oprFee) * Number(empNum);
  }
