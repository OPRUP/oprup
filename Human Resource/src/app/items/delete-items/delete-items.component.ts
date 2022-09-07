import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Item } from 'angular2-multiselect-dropdown';
import Swal from 'sweetalert2';
import { ItemsserviceService } from '../items.service';

@Component({
  selector: 'app-delete-items',
  templateUrl: './delete-items.component.html',
  styleUrls: ['./delete-items.component.scss']
})
export class DeleteItemsComponent implements OnInit {

  itemsId!: number;
  items;
  item!:Item[];


  constructor(private itemsService:ItemsserviceService ,
  private router: Router ,
  private activateRoute: ActivatedRoute,
  private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }



  ngOnInit() {
  this.getItems();
  // this.getAllVendor();

  }

  goItemsList(){
  this.router.navigate(['/sales/items/items/'])
  }

  public getItems(){
   this.itemsId= this.activateRoute.snapshot.params['id'];
  this.itemsService.getItemsById(this.itemsId)
  .subscribe(data => {
    this.items = data;

  }, error => console.log(error));


  }


  public onDeleteItemsById(vendor): void {

  this.itemsService.deleteVendor(this.items).subscribe(
  (response) => {

    Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

  // this.getAllVendor();
  this.goItemsList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

  }
  );
  }


}
