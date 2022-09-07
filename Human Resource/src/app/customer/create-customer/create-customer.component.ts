import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import countries from '../../_files/countries.json';
import cities from '../../_files/KSA_Cities.json';
import { CoaService } from 'src/app/coa/coa.service';
import { Coa } from 'src/app/coa/coa';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

form: FormGroup = new FormGroup({


  nameAr:new FormControl(''),
  nameEn: new FormControl(''),
  date: new FormControl(''),
 // accountId: new FormControl(''),

});

  customers!: Customer[];
  customerData = {
    customerId:'',
    date: '',
    numberCR: '',
    customerAccountNumber:'',
    // customerName:'',
    nameAr:'',
    nameEn: '',
    countryAr:'',
    countryEn: '',
    contractSignerNameAr: '',
    contractSignerNameEn: '',
    contractSignerIdNumber:'',
    contractSignerPhoneNumber:'',
    contractSignerEmail:'',
    followerNameAr: '',
    followerNameEn: '',
    followerContactNumber: '',
    contractDuration:'',
    followerEmail: '',
    customerStatus: 'جديد',
    notesAndUpdates: '',
    designation: '',
    nationality: '',
    //contactPerson:'',
    //contactNumber:'',
   // email:'',
    details:'',
   deleteFlag: 1,
  //  chartAccounts:{
  //   accountId:'',
  //   accountName: '',


  // }
 };
 chartAccounts;

  countryList:{name:String,code:String}[]=countries;
  cityList:{name_ar:String,name_en:String}[]=cities;

  constructor(private customerService:CustomerService ,
     private router: Router,
     public fb: FormBuilder, // Form Builder service for Reactive forms
private coa : CoaService,
     private translate: TranslateService){

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }


   ngOnInit() {
    this.countCustomer();
// this.setUserCategoryValidators();
    this.getAllCoa();
    this.form = this.fb.group(
      {
       // customerName:['', [Validators.required,Validators.minLength(3)]],
        nameAr: [null,[Validators.required]],
       nameEn: ['',[Validators.required]],
       date: ['',[Validators.required]],
      // accountId: ['',[Validators.required]],
      //  date: ['',[Validators.required]],
      //  countryEn: ['',[Validators.required]],
        //contactPerson: ['',[Validators.required]],
        // followerEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        // followerContactNumber: ['',[Validators.required,Validators.pattern('(0|00962)?[7-9][0-9]{8}')]],
        //contractDuration: ['',[Validators.required]],
        // email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        // contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]],
        // contactNumber: ['',[Validators.required,Validators.pattern('(0|00962)?[7-9][0-9]{8}')]],
       // 1) Begins with 0 or 00962
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits
  //      numberCR: ['',[Validators.required]],
  // countryAr: ['',[Validators.required]],
  // contractSignerNameAr: ['',[Validators.required]],
  // contractSignerNameEn: ['',[Validators.required]],
  // customerStatus: [null,[Validators.required]],
  // designation: ['',[Validators.required]],
  // followerNameAr: ['',[Validators.required]],
  // followerNameEn : ['',[Validators.required]],
        }

    );

   }
isvalid=true;
   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

   public onAddCustomer(event): void {
    event.preventDefault();

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
      document.getElementById('add-Customer-form')?.click();
    this.customerService.addCustomer(this.customerData).subscribe(

      (response: Customer) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Customerisadded'), 'success')
        // this.getAllCustomer();
        this.goCustomerList();
      },
    (error: HttpErrorResponse) => {
      Swal.fire('Error!! ', 'Error while adding Customer '+ error, 'error')
      console.log(error);
    }
    );


    }



      goCustomerList(){
        this.router.navigate(['/sales/customer/customer'])
      }
     public getAllCoa(): void{

        this.coa.getAccountByType('sub').subscribe((response) => {
        this.chartAccounts = response;
        console.log(this.chartAccounts);
       // this.customerData.chartAccounts.accountId=this.chartAccounts.accountId;
        },
        (error: HttpErrorResponse) => {
        alert(error.message);
        }
        )
        }
        public countCustomer(){
          this.customerService.countCustomer().subscribe((data)=>{
            this.customerData.customerAccountNumber=`L000500${data+1}`

          })
        }

// isQualified=true
//         getValue(event){
//           console.log('is Qualified ????',event)
//         if(event=='Qualified'){

// this.form = new FormGroup({
//   customerName: new FormControl(''),
//   //contractDuration:new FormControl(''),
//  countryAr: new FormControl(''),
//   countryEn: new FormControl(''),
//   contactNumber: new FormControl(''),
//   email: new FormControl(''),
//   followerContactNumber: new FormControl(''),
//   followerEmail: new FormControl(''),
//   numberCR:new FormControl(''),
//   contractSignerNameAr:new FormControl(''),
//   contractSignerNameEn:new FormControl(''),
//   designation:new FormControl(''),
//   followerNameAr:new FormControl(''),
//   followerNameEn :new FormControl(''),
//   nameAr:new FormControl(''),
//   nameEn: new FormControl(''),
// });
//        this.isQualified=false

// }else{this.isQualified=true}
//         }
//      }


// setUserCategoryValidators() {


//   this.form.get('customerStatus').valueChanges
//     .subscribe(customerStatus => {

//       if (customerStatus === 'Qualified') {
//        // nameControl.setValidators([Validators.required]);
//        nameControl.setValidators(null);
//        // salaryControl.setValidators(null);
//       }

//       if (customerStatus === 'new') {
//         ///institutionControl.setValidators(null);
//         nameControl.setValidators([Validators.required]);
//        // salaryControl.setValidators([Validators.required]);
//       }

//       nameControl.updateValueAndValidity();
//       // companyControl.updateValueAndValidity();
//       // salaryControl.updateValueAndValidity();
//     });
// }

      }

