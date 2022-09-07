import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import Swal from 'sweetalert2';
import { Customer } from '../Customer';
import countries from '../../_files/countries.json';
import cities from '../../_files/KSA_Cities.json';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-un-qulified-customer',
  templateUrl: './un-qulified-customer.component.html',
  styleUrls: ['./un-qulified-customer.component.scss']
})
export class UnQulifiedCustomerComponent implements OnInit {

  customerId!: number;
  customer;
  accId=''
 customers!:Customer[];

  countryList:{name:String,code:String}[]=countries;
  form: FormGroup = new FormGroup({
    nameAr: new FormControl(''),
    nameEn: new FormControl(''),
    //email: new FormControl(''),
    //contactNumber: new FormControl(''),
    contractDuration: new FormControl(''),
    date: new FormControl(''),
   accountId: new FormControl(''),

  });
  constructor(private customerService:CustomerService ,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router ,
    private coa : CoaService,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService){
   this.translate.setDefaultLang('ar');
   const lang = localStorage.getItem('lang')  || 'ar';
   this.translate.use(lang);
   document.documentElement.lang = lang;
 }
 chartAccounts;


  cityList:{name_ar:String,name_en:String}[]=cities;


  ngOnInit() {
  this.getAllCoa();
  this.getCustomer();
  this.form = this.fb.group(
    {
      // customerName:['', [Validators.required,Validators.minLength(3)]],
      nameEn:['',[Validators.required]],
      nameAr: ['',[Validators.required]],
      date: ['',[Validators.required]],
     // email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      //contactNumber: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]],
      contractDuration:['',[Validators.required]],
      accountId:['',[Validators.required]],
    }

  );

  }
  
  public getAllCoa(): void{

    this.coa.getAccountByType('sub').subscribe((response) => {
    this.chartAccounts = response;
    console.log(this.chartAccounts);
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
    )
}

  goCustomerList(){
  this.router.navigate(['/sales/customer/customer/'])
  }


  public getCustomer(){
   this.customerId= this.activateRoute.snapshot.params['id'];
  this.customerService.getCustomerById(this.customerId)
  .subscribe(data => {
    this.customer = data;
    this.customer.customerStatus='غير مؤهل';
    this.customer.chartAccounts={accountId:''}
  // this.customer.chartAccounts.accountId = '1'
  // this.customer.chartAccounts.accountName =  "My default value"
    console.log('getCustomer',this.customer)
  }, error => console.log(error));
  }
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onUpdateCustomer(customer): void {
    console.log('1111111'); 
    console.log(this.customer);
    
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  
    this.customer.customerStatus='غير مؤهل'
  this.customerService.updateCustomer(this.customer).subscribe(
    
  (response) => {

  console.log('the res is::',response); 
 // console.log('the account id is',this.customer.chartAccounts.accountId)
  Swal.fire('Success', 'Customer Information is Updated', 'success')
  this.goCustomerList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire('Error!! ', 'Error while update Customer', 'error')
  }
  );
  }

  }



