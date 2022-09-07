import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { number } from 'echarts';
import { Department } from 'src/app/departments/department';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {


  displayedColumns: string[] = [

    'stroeCode',
    'storePlace',
    'storeContact',
    'storeKeeper',
    'actions',
  ]
  stores!: MatTableDataSource<Store>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private storeService : StoreService,
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
      this.stores= new MatTableDataSource(response);
      this.stores.paginator =this.paginator;
      this.stores.sort = this.matSort;
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
  
  public onEditStoreById(storeId: number): void {
    this.router.navigate(['/stores/edit-store', storeId])
  }
  public onEditToDeleteStoreById(storeId: number):void{
    this.router.navigate(['/stores/delete-store', storeId])
  }
  filterData($event: any){
    this.stores.filter = $event.target.value;

  }
}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

