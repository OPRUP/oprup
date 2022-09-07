
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Store } from '../store';
import { StoreService } from '../store.service';


@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.scss']
})
export class EditStoreComponent implements OnInit {





  storeId!: number;
  store;
  stores!: Store[];
  employees!: Employee[];
  router: any;


  constructor(private storeService: StoreService,

    private activateRoute: ActivatedRoute, private translate: TranslateService){
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getStore();

  }

  goStoreList(){
    this.router.navigate(['/store/stores'])
  }

  public getStore(){
   this.storeId = this.activateRoute.snapshot.params['id'];
   this.storeService.getStoreById(this.storeId)
   .subscribe(data => {
     this.store = data;

   }, error => console.log(error));
 }

  public onUpdateStore(st: Store) {
    // if(st.stroeCode.trim() == '' || st.stroeCode == null){
    //   Swal.fire('تحذير', 'يجب إدخال رمز المخزن', 'warning')
    // }
    // else if(st.storePlace == '' || st.storePlace == null){
    //   Swal.fire('تحذير', 'يجب إدخال مكان الخزن', 'warning')
    // }

    // // else if(st.storeContact.trim() == '' || st.storeContact == null){
    // //   Swal.fire('تحذير', 'يجب إدخال رقم التواصل', 'warning')
    // // }
    // else if(st.storeKeeper.trim() == '' || st.storeKeeper == null){
    //   Swal.fire('تحذير', 'يجب إدخال من هو امين المخزن', 'warning')
    // }
    // else{
      this.storeService.updateStore(this.store).subscribe(
        (data) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

          this.goStoreList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
          console.log(error);
        }
      );
    }
 }
