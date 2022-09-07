import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Vendor } from 'src/app/vendor/Vendor';
import Swal from 'sweetalert2';
import { Purchasing } from '../purchasing';
import { PurchasingService } from '../purchasing.service';

@Component({
  selector: 'app-purchasing',
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.scss']
})
export class PurchasingComponent implements OnInit {
  displayedColumns: string[] = [
    //   'quotationNumber',
    //   'date',
    //   'paymentWay',
    //  'employeeName',
    //  'customerName',
    //  'actions',

     'purchasingInvoiceNumber',
     'purchasingInvoiceType',
     'date',
     'vendorName',
     'actions',
    ];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  vendors!: Vendor[];
  purchasing!: MatTableDataSource<Purchasing>;
  constructor(private purchasingService : PurchasingService,
    private router: Router, private translate: TranslateService) {
        this.translate.setDefaultLang('ar');
        const lang = localStorage.getItem('lang')  || 'ar';
        this.translate.use(lang);
        document.documentElement.lang = lang;
       }
    ngOnInit(): void {
      this.getAllPurchasing();


    }
    public getAllPurchasing(): void {
      this.purchasingService.getAllPurchasings().subscribe(
        (response:Purchasing[]) => {
        this.purchasing= new MatTableDataSource(response);
        this.purchasing.paginator =this.paginator;
        this.purchasing.sort = this.matSort;
        // console.log(this.stores);
        },
        (error)  =>
          {
            console.log(error);
            Swal.fire('Error !', 'Error in loading data !', 'error');
          }
        );

    }

    ngAfterViewInit() {}

  public onEditPurchasingById(purchasingInvoiceId: number): void {
    this.router.navigate(['/purchase/purchasing/edit-purchasing', purchasingInvoiceId])
  }


  public onEditToDeletePurchasingById(purchasingInvoiceId: number):void{
    this.router.navigate(['/purchase/purchasing/delete-purchasing', purchasingInvoiceId])
  }

  public onPrintPurchasingById(purchasingInvoiceId: number):void{
    this.router.navigate(['/purchase/purchasing/print-purchasing', purchasingInvoiceId])
  }


  filterData($event: any){
    this.purchasing.filter = $event.target.value;

  }

  }

  function ngAfterViewInit() {
    throw new Error('Function not implemented.');
  }

