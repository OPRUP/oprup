
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Store } from '../store';
import { StoreModule } from '../store.module';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-delete-store',
  templateUrl: './delete-store.component.html',
  styleUrls: ['./delete-store.component.scss']
})
export class DeleteStoreComponent implements OnInit {

  storeId!: number;

  store !:Store;
  stores !:Store[];
  constructor(private storeService: StoreService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getStore();

  }
  goStoreList(){
    this.router.navigate(['/stores/stores'])
  }
  public getStore(){
    this.storeId = this.activateRoute.snapshot.params['id'];
    this.storeService.getStoreById(this.storeId)
    .subscribe(data => {
      this.store = data;

    }, error => console.log(error));
  }
  public onDeleteStore(st: Store){
    this.storeService.deleteStore(st).subscribe( data => {
   
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goStoreList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }

  public getAllStores(): void {
    this.storeService.getStores().subscribe(
      (response:Store[]) => {
      this.stores=response;
      },

      (error:HttpErrorResponse)  =>
        {
          alert(error.message);
        }
      );

      }

}
