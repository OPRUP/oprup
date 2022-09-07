import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import countries from '../../_files/countries.json';
import cities from '../../_files/KSA_Cities.json';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { CoaService } from 'src/app/coa/coa.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  customerId!: number;
  customer;
  customers!:Customer[];
  countryList:{name:String,code:String}[]=countries;
  form: FormGroup = new FormGroup({
    nameAr:new FormControl(''),
    nameEn: new FormControl(''),
    date: new FormControl(''),
    //accountId: new FormControl(''),
  //   customerAccountNumber: new FormControl(''),
  // // customerName: new FormControl(''),
  // countryAr: new FormControl(''),
  // accountId: new FormControl(''),
  // countryEn: new FormControl(''),
  // nationality: new FormControl(''),
  // contactPerson: new FormControl(''),
  // contactNumber: new FormControl(''),
  // email: new FormControl(''),
  // details: new FormControl(''),
  // date: new FormControl(''),
  // followerContactNumber: new FormControl(''),
  // followerEmail: new FormControl(''),
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
      nameAr:['',[Validators.required]],
      nameEn: ['',[Validators.required]],
      date: ['',[Validators.required]],
     // accountId: ['',[Validators.required]],
    //   countryAr: ['',[Validators.required]],
    //   nationality: ['',[Validators.required]],
    //   countryEn: ['',[Validators.required]],
    //   contactPerson: ['',[Validators.required]],
    //   details: ['',[Validators.required]],
    //   date: ['',[Validators.required]],
    //   email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    //   // contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]],
    //   contactNumber: ['',[Validators.required,Validators.pattern('(0|00962)?[7-9][0-9]{8}')]],
    //  // 1) Begins with 0 or 00962
    //  // 2) Then contains 7 or 8 or 9.
    //  // 3) Then contains 8 digits
    //  followerEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    //  followerContactNumber: ['',[Validators.required,Validators.pattern('(0|00962)?[7-9][0-9]{8}')]],


    }

  );

  }
  public getAllCoa(): void{

    this.coa.getAccountByType('sub').subscribe((response) => {
    this.chartAccounts = response;
    console.log('chartAccounts:',this.chartAccounts);
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


  public onEditQualifiedById(customerId: number): void {
    this.router.navigate(['/sales/customer/qualified-customer', customerId])
  }

  public onEditTransferById(customerId: number):void{
    this.router.navigate(['/sales/customer/transfer-customer', customerId])
  }
  public onEditUnQualiifiedById(customerId: number):void{
    this.router.navigate(['/sales/customer/unqualified-customer', customerId])
  }
  }



