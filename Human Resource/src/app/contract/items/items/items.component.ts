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
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  displayedColumns = [
    'itemCode',
    'itemNameAr',
    'itemNameEn',
    'unit',
    'taxRate',
    'profession',
    'hourlyRate',
    'actions',
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


  ngAfterViewInit() {}


  public onEditItemsById(itemsId: number): void {
    this.router.navigate(['/sales/items/edit-items', itemsId])
  }


  public onDeleteItemsById(itemsId: number):void{
    this.router.navigate(['/sales/items/delete-items', itemsId])
  }

  filterData($event: any){
    this.items.filter = $event.target.value;
  }

}

