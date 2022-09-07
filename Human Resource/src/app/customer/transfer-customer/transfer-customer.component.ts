import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import Swal from 'sweetalert2';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import countries from '../../_files/countries.json';
import cities from '../../_files/KSA_Cities.json';
@Component({
  selector: 'app-transfer-customer',
  templateUrl: './transfer-customer.component.html',
  styleUrls: ['./transfer-customer.component.scss']
})
export class TransferCustomerComponent implements OnInit {

  customerId!: number;
  customer;

  countryList:{name:String,code:String}[]=countries;
  form: FormGroup = new FormGroup({
    nameAr: new FormControl(''),
    nameEn: new FormControl(''),
    numberCR: new FormControl(''),
    contactNumber: new FormControl(''),
    email: new FormControl(''),
    countryEn: new FormControl(''),
    countryAr: new FormControl(''),
    contractDuration: new FormControl(''),
    contractSignerNameAr:new FormControl(''),
    contractSignerNameEn:new FormControl(''),
    designation:new FormControl(''),
    followerNameAr:new FormControl(''),
    followerNameEn:new FormControl(''),
    followerContactNumber: new FormControl(''),
    followerEmail: new FormControl(''),
    date: new FormControl(''),
    contractSignerEmail:  new FormControl(''),
      nationality:  new FormControl(''),
      contractSignerIdNumber: new FormControl(''),
      contractSignerPhoneNumber:  new FormControl(''),
      accountId:  new FormControl(''),

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
      numberCR:['',[Validators.required]],
      contactNumber: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      countryEn: ['',[Validators.required]],
      countryAr: ['',[Validators.required]],
      contractDuration: ['',[Validators.required]],
      contractSignerNameAr: ['',[Validators.required]],
      contractSignerNameEn: ['',[Validators.required]],
      designation: ['',[Validators.required]],
      followerNameAr: ['',[Validators.required]],
      followerNameEn: ['',[Validators.required]],
      followerEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      followerContactNumber: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]],
      date: ['',[Validators.required]],
      contractSignerEmail: ['',[Validators.required]],
      nationality: ['',[Validators.required]],
      contractSignerIdNumber: ['',[Validators.required]],
      contractSignerPhoneNumber: ['',[Validators.required]],

      // customerAccountNumber:['',[Validators.required]],
      accountId: ['',[Validators.required]],

      // contactPerson: ['',[Validators.required]],
      // details: ['',[Validators.required]],
      //date: ['',[Validators.required]],
      // contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]],

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
    //this.customer.chartAccounts={accountId:''}
    this.customer = data;
    this.customer.chartAccounts={accountId:''}
    console.log(data)
  }, error => console.log(error));


  }
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  public onUpdateCustomer(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.customer.customerStatus='محول'
  this.customerService.updateCustomer(this.customer).subscribe(
  (response) => {
  console.log(response);
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



