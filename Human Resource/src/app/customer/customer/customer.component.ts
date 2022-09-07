import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  displayedColumns: string[] = [
    'customerAccountNumber',
    'nameAr',
    'countryAr',
    'customerStatus',
    'contactNumber',
    'email',
    // 'details',
    'actions',
  ];


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  customers!: MatTableDataSource<Customer>;

  constructor(private customerService:CustomerService ,
     private router: Router ,
      private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCustomers();
  }


 public getAllCustomers(): void {

    this.customerService.getAllCustomer().subscribe((response:Customer[]) => {
      console.log('getAllCustomer', response)

      this.customers = new MatTableDataSource(response);
      this.customers.paginator =this.paginator;
      this.customers.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }


  ngAfterViewInit() {}

  public onEditCustomerById(customerId: number): void {
    this.router.navigate(['/sales/customer/edit-customer', customerId])
  }

  public onDeleteCustomerById(customerId: number):void{
    this.router.navigate(['/sales/customer/delete-customer', customerId])
  }
  public onPrintCustomerById(customerId: number):void{
    this.router.navigate(['/sales/customer/print-customer', customerId])
  }


  filterData($event: any){
    this.customers.filter = $event.target.value;
  }


}

