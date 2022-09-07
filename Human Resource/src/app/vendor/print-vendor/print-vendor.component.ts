import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Vendor } from '../Vendor';
import { VendorserviceService } from '../vendorservice.service';

@Component({
  selector: 'app-print-vendor',
  templateUrl: './print-vendor.component.html',
  styleUrls: ['./print-vendor.component.scss']
})
export class PrintVendorComponent implements OnInit {

  displayedColumns = [
    'vendorAccountantNumber',
    'vendorName',
    'vendorCode',

    'contactPerson',
    'contactNumber',
    'details',
  ];


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  vendors!: MatTableDataSource<Vendor>;

  constructor(private vendorService:VendorserviceService ,
     private router: Router ,
      private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllVendors();
  }


 public getAllVendors(): void {

    this.vendorService.getAllVendor().subscribe((response:Vendor[]) => {
      this.vendors = new MatTableDataSource(response);
      this.vendors.paginator =this.paginator;
      this.vendors.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }


        printPage() {

          window.print();
        }
  ngAfterViewInit() {}




  filterData($event: any){
    this.vendors.filter = $event.target.value;
  }

}

