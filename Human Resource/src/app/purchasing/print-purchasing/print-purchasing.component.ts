import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'angular2-multiselect-dropdown/lib/multiselect.service';
import { BehaviorSubject } from 'rxjs';
import { ItemsserviceService } from 'src/app/items/items.service';
import { Vendor } from 'src/app/vendor/Vendor';
import { VendorserviceService } from 'src/app/vendor/vendorservice.service';
import Swal from 'sweetalert2';
import { Purchasing } from '../purchasing';
import { PurchasingService } from '../purchasing.service';

@Component({
  selector: 'app-print-purchasing',
  templateUrl: './print-purchasing.component.html',
  styleUrls: ['./print-purchasing.component.scss']
})
export class PrintPurchasingComponent implements OnInit {

  purchasingInvoiceId!: number;
purchasingData!:Purchasing;
vendors;
items:any[]=[];
invoiceItems:any[]=[];
tempDeletedData:any[] = [];


dataSource = new BehaviorSubject<AbstractControl[]>([]);
displayColumns = [
  'itemCode',
  'itemId',
  'itemNameAr',
  'nationality',
  'hourlyRate',
  'purchasingItemQuantity',
  'purchasingItemValue',
  'purchasingItemTotal',
  'profession',
  'taxRate',

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
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    this.getInvoiceItemsByInvoiceId()
    this.getInvoice();
    this.getAllVendors();
  }
  public getAllVendors(): void {
    this.vendorService.getAllVendor().subscribe(
      (response: Vendor[]) => {
        this.vendors = response;
        console.log(this.vendors);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  gojobList() {
    this.router.navigate(['/purchasing/purchasing/']);
  }


  public getInvoice() {
    this.purchasingInvoiceId = this.activateRoute.snapshot.params['id'];
    this.purchasingService.getPurchasingById(this.purchasingInvoiceId).subscribe(
      (data) => {
        this.purchasingData = data;



        console.log("aaaa",this.purchasingData);
      },
      (error) => console.log(error)
    );
  }

  public getInvoiceItemsByInvoiceId() {
    this.purchasingInvoiceId = this.activateRoute.snapshot.params['id'];
    this.purchasingService.getPurchasingItemsByPurchasingInvoiceId(this.purchasingInvoiceId).subscribe(
      (data) => {
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
      itemNameEn:element.item.itemNameEn,
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

  public onUpdatePurchasing(salesInvoice): void {
    console.log('deeeel',this.tempDeletedData);


    this.purchasingService.updatePurchasing(this.purchasingData).subscribe(
      (response: Purchasing) => {
        console.log('response',response);
        this.tempDeletedData.forEach(element=>{
          this.purchasingService.deletePurchasing(element).subscribe((response:Purchasing)=>{console.log('dddaaasss');
          }) ,(error: HttpErrorResponse) => {
            console.log('error',element);

      alert(error.message);

      Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
      }
         })
        this.rows.value.forEach(element => {
          element.purchasingInvoiceId=response.purchasingInvoiceId
          this.invoiceItems.push({purchasingItemQuantity:element.purchasingItemQuantity,
            purchasingItemValue:element.purchasingItemValue,
            purchasingItemTotal:element.purchasingItemTotal,
            salesInvoice:{
              purchasingInvoiceId:element.purchasingInvoiceId,
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
          this.purchasingService.addPurchasingItem(element).subscribe(
              (response) => {})
              ,(error: HttpErrorResponse) => {
                console.log(this.purchasingData);

      alert(error.message);

      Swal.fire('Error!! ', 'Error while adding Site visit', 'error');
      }
        })



        Swal.fire('Success', 'Site visit is added', 'success');


      },
      (error: HttpErrorResponse) => {
                  console.log(this.purchasingData);

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
      itemNameEn:'',
      nationality: '',
      hourlyRate: '',
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
    this.items[this.items.length-1].value=0
    this.items[this.items.length-1].total=0
    console.log('items',this.rows.value)
    })
  }
  getValue(event,items){

    items.value= event.target.value*items.hourlyRate
    items.total= items.value+items.value*0.15

  }


  printPage() {

    window.print();
  }
}
