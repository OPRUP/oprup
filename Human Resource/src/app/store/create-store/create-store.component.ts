import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from '../store.service';
import { Store } from '../store';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss']
})
export class CreateStoreComponent implements OnInit {
  form: FormGroup = new FormGroup({
    storeId: new FormControl(''),
    stroeCode: new FormControl(''),
    storePlace: new FormControl(''),
    storeContact: new FormControl(''),
    // storeKeeper: new FormControl(''),
    employeeId: new FormControl(''),

  });

   StoreData = {
    storeId: '',
    stroeCode: '',
    storePlace:'',
    storeContact:'',
    // storeKeeper:'',
    deleteFlag: 1,
    employee:  {
      employeeId:'',

  },

   };
  store!: Store[]
  employees!: Employee[];
  constructor(  private storeService: StoreService ,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router,
    private activateRoute: ActivatedRoute,
     private translate: TranslateService,
     private employeeService: EmployeeService,
     ){
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
     }


  ngOnInit(): void {
    this.getEmployee();
    this.form = this.fb.group(
      {
        stroeCode:['', [Validators.required]],
        storePlace:['',[Validators.required]],
        storeContact: ['',[Validators.required]],
        // storeKeeper: ['',[Validators.required]],
        employeeId: ['',[Validators.required]],
      }
    );

  }
  goStoresList(){
    this.router.navigate(['/stores/stores'])
  }




  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddStore(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(this.StoreData.stroeCode.trim() == '' || this.StoreData.stroeCode == null){
      Swal.fire('تحذير', 'يجب إدخال رمز المخزن', 'warning')
    }
    else if(this.StoreData.storePlace.trim() == '' || this.StoreData.storePlace == null){
      Swal.fire('تحذير', 'يجب إدخال مكان الخزن', 'warning')
    }


    // else if(this.StoreData.storeKeeper.trim() == '' || this.StoreData.storeKeeper == null){
    //   Swal.fire('تحذير', 'يجب إدخال من هو امين المخزن', 'warning')
    // }

    else{
      document.getElementById('add-store-form')?.click();
      this.storeService.addStore(this.StoreData).subscribe(
        (response: Store) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.getStores();
          this.goStoresList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
          console.log(error);
        }
      );
    }


  }

  public getStores(): void{
    this.storeService.getStores().subscribe(
      (response:Store[]) => {
      this.store = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }


  public getEmployee(): void{
    this.employeeService.get().subscribe((response:Employee[]) => {
      this.employees = response;
      
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
}

