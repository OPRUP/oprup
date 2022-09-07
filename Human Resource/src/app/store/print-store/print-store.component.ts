import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-print-store',
  templateUrl: './print-store.component.html',
  styleUrls: ['./print-store.component.scss']
})
export class PrintStoreComponent implements OnInit {

  displayedColumns: string[] = [

    'storeId',
    'stroeCode',
    'storePlace',
    'storeContact',
    'storeKeeper',
  ]
  stores!: MatTableDataSource<Store>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;


  constructor(
    private storeService : StoreService,
    private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
     }

  ngOnInit(): void {
    this.getAllStores();
  }
  
  public getAllStores(): void {
    this.storeService.getStores().subscribe(
      (response:Store[]) => {
      this.stores = new MatTableDataSource(response);
      this.stores.paginator =this.paginator;
      this.stores.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }
  printPage() {

    window.print();
  }
  ngAfterViewInit() {}
  filterData($event: any){
    this.stores.filter = $event.target.value;
  }
}







   

