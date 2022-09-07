import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { CoaService } from 'src/app/coa/coa.service';
import { ItemsserviceService } from 'src/app/items/items.service';
import { Vendor } from 'src/app/vendor/Vendor';
import { VendorserviceService } from 'src/app/vendor/vendorservice.service';
import Swal from 'sweetalert2';
import { Purchasing } from '../purchasing';
import { PurchasingItem } from '../purchasing-item';
import { PurchasingService } from '../purchasing.service';

@Component({
  selector: 'app-edit-purchasing',
  templateUrl: './edit-purchasing.component.html',
  styleUrls: ['./edit-purchasing.component.scss']
})
export class EditPurchasingComponent implements OnInit {
  accounts;
  purchasingInvoiceId!: number;
 purchasingData!:Purchasing;
  vendors;
  items:any[]=[];
  InvoiceItems:any[]=[];
  tempDeletedData:any[] = [];


  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = [
    'itemCode',

    'itemNameAr',
    'itemId',
    //'itemNameEn',
    'nationality',
    'hourlyRate',
    'numberOfEmployee',
    'purchasingItemQuantity',
    'purchasingItemValue',
    'purchasingItemTotal',
    'profession',
    'taxRate',
    'delete',
  ];

  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({
    marks: this.rows,
    date:new FormControl(''),
    purchasingInvoiceNumber:new FormControl(''),
    purchasingInvoiceType:new FormControl(''),
    vendorId:new FormControl(''),
    radio1:new FormControl(''),

  });
    constructor(
      private purchasingService: PurchasingService,
      private vendorService: VendorserviceService,
      private itemService: ItemsserviceService,
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
      this.getInvoiceItemsByInvoiceId()
      this.getInvoice();
      this.getSubAccounts()

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


    gojobList() {
      this.router.navigate(['/purchase/purchasing/purchasing/']);
    }
    // public getAllProjects(): void {
    //   this.projectService.getAllProject().subscribe(
    //     (response: Store[]) => {
    //       this.projects = response;
    //       console.log('projects',this.projects);
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message);
    //     }
    //   );
    // }

    public getInvoice() {
      this.purchasingInvoiceId = this.activateRoute.snapshot.params['id'];
      this.purchasingService.getPurchasingById(this.purchasingInvoiceId).subscribe(
        (data) => {
          this.purchasingData = data;

          //this.salesInoviceData.date=new Date(this.salesInoviceData.date);
          console.log("aaaa",this.purchasingData);
        },
        (error) => console.log(error)
      );
    }

    public getInvoiceItemsByInvoiceId() {
      this.purchasingInvoiceId = this.activateRoute.snapshot.params['id'];
      this.purchasingService.getPurchasingItemsByPurchasingInvoiceId(this.purchasingInvoiceId).subscribe(
        (data) => {

          this.InvoiceItems=data
          let filtered =data.filter((element)=>{
            return element.deleteFlag ==1
          })
          console.log('invId',data);

          filtered.forEach((element)=>{
            this.items.push({
              itemId:element.item.itemId,
        itemCode: element.item.itemCode,
        itemNameAr:element.item.itemNameAr,
        numberOfEmployee:element.numberOfEmployee,
        // itemNameEn:element.item.itemNameEn,
        nationality: element.item.nationality,
        hourlyRate: element.item.hourlyRate,
        purchasingItemQuantity:element.purchasingItemQuantity,
        value:element.purchasingItemValue,
        total:element.purchasingItemTotal,
        profession: element.item.profession,
        taxRate: element.item.taxRate,

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

    public onUpdatePurchasing(): void {
      console.log('deeeel',this.tempDeletedData);


      this.purchasingService.updatePurchasing(this.purchasingData).subscribe(
        (response: Purchasing) => {
          console.log('response',response);

          this.tempDeletedData.forEach(element=>{
            this.purchasingService.deletePurchasingItem(element).subscribe((response)=>{console.log('dddaaasss');
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
            }) ,(error: HttpErrorResponse) => {
              console.log('error',element);

        alert(error.message);

        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        }
           })
          this.rows.value.forEach(element => {
            element.purchasingInvoiceId=response.purchasingInvoiceId
            this.InvoiceItems.push({
              purchasingItemQuantity:element.purchasingItemQuantity,
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
          console.log('final',this.InvoiceItems);
          this.InvoiceItems=this.InvoiceItems.filter(element=>{
            return !element.purchasingItemId
          })
          console.log('fffffffff',this.InvoiceItems);
          console.log('Size = ',this.InvoiceItems.length);
          this.InvoiceItems.forEach((element)=>{
            this.purchasingService.addPurchasingItem(element).subscribe(
                (response) => {})
                ,(error: HttpErrorResponse) => {
                  console.log("AABED")
                  console.log(this.purchasingData);

        alert(error.message);

        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        }
          })
          // this.salesInvoiceService.addInvoiceItems(this.invoiceItems).subscribe(
          //   (response: InvoiceItems) => {})

          Swal.fire('Success', 'Site visit is added', 'success');
          //this.siteVisitsService.getAllVisits();
          this.goPurchasingList();
        },
        (error: HttpErrorResponse) => {
                    console.log(this.purchasingData);

          alert(error.message);

          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        }
      );


  }

    emptyTable() {
      while (this.rows.length !== 0) {
        this.rows.removeAt(0);
      }
    }
    goPurchasingList() {
      this.router.navigate(['/purchase/purchasing/purchasing']);
    }
    addRow() {
      const row = this.fb.group({

        itemCode: '',
        itemNameAr: '',
        itemId: '',
      // itemNameEn:'',
        nationality: '',
        hourlyRate: '',
        numberOfEmployee:'',
        purchasingItemQuantity:'',
        purchasingItemValue:'',
        purchasingItemTotal:'',
        profession: '',
        taxRate: '',
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
    getValueEmployeenumber(event,items){
      console.log('the result',items.value)
      items.value= event.target.value*items.value
      items.total= items.value+items.value*items.taxRate
      console.log('the result2',items.value)
    }
    getItemDetailsByItemCode(event,index){
      this.itemService.getItemsByCode(event.target.value).subscribe((data:any)=>{
      this.items[index]=data
      this.items[this.items.length-1].value=0
      this.items[this.items.length-1].total=0
      console.log('items',this.rows.value)
      })
    }
    getValue(event,items){

      items.value= event.target.value*items.hourlyRate
      items.total= items.value+items.value*0.15

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
