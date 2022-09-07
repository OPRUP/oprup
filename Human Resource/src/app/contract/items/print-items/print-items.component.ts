import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Items } from '../items';
import { ItemsserviceService } from '../items.service';

@Component({
  selector: 'app-print-items',
  templateUrl: './print-items.component.html',
  styleUrls: ['./print-items.component.scss']
})
export class PrintItemsComponent implements OnInit {
  displayedColumns = [
    'itemCode',
    'itemNameAr',
    'itemNameEn',
    'nationality',
    'taxRate',
    'profession',
    'hourlyRate',
   
    
  ];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  items!: MatTableDataSource<Items>;
  constructor(private itemsService:ItemsserviceService ,
    private router: Router ,
     private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
      }

  ngOnInit(): void {
    this.getAllItems()

  }
  public getAllItems(): void {

    this.itemsService.getAllItems().subscribe((response:Items[]) => {
      this.items = new MatTableDataSource(response);
      this.items.paginator =this.paginator;
      this.items.sort = this.matSort;
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
    this.items.filter = $event.target.value;
  }
}
