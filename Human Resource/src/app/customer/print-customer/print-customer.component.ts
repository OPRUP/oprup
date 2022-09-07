import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-print-customer',
  templateUrl: './print-customer.component.html',
  styleUrls: ['./print-customer.component.scss']
})
export class PrintCustomerComponent implements OnInit {
  customerId!: number;

  displayedColumns: string[] = [
    'date',
    'numberCR',
    'customerAccountNumber',
    'customerName',
    'nameAr',
    'nameEn',
    'countryAr',
    'countryEn',
    'contractSignerNameAr',
    'contractSignerNameEn',
    'followerNameAr',
    'followerNameEn',
    'followerContactNumber',
    'followerEmail',
    'customerStatus',
    'notesAndUpdates',
    'designation',
    'nationality',
    'contactPerson',
    'contactNumber',
    'email',
    'details',
  ];


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  customers;

  constructor(private customerService:CustomerService ,
     private router: Router ,
     private acvivate: ActivatedRoute,
      private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCustomers();
  }

  public getAllCustomers() {
    this.customerId = this.acvivate.snapshot.params['id'];
    this.customerService.getCustomerById(this.customerId).subscribe(
      (data) => {
        this.customers = data;



        console.log("aaaa",this.customers);
      },
      (error) => console.log(error)
    );
  }

//  public getAllCustomers(): void {

//     this.customerService.getCustomerById(this.customerId).subscribe((response) => {
//       this.customers = response;

//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//       );
//         }


  ngAfterViewInit() {}



  filterData($event: any){
    this.customers.filter = $event.target.value;
  }


  printPage() {

    window.print();
  }
}

