import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Bank } from 'src/app/banks/bank';
import Swal from 'sweetalert2';
import { Vendor } from '../Vendor';
import { VendorserviceService } from '../vendorservice.service';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.scss']
})
export class CreateVendorComponent implements OnInit {

  form: FormGroup = new FormGroup({
    vendorAccountantNumber: new FormControl(''),
    vendorCode: new FormControl(''),
    vendorName: new FormControl(''),
    contactPerson: new FormControl(''),
    contactNumber: new FormControl(''),
    details: new FormControl(''),
  });

  vendors!: Vendor[];
  vendorData = {
    vendorId:'',
    vendorAccountantNumber:'',
    vendorCode: '',
    vendorName: '',
    contactPerson: '',
    contactNumber: '',
    details: '',
   deleteFlag: 1,
 };

  constructor(private vendorService:VendorserviceService ,
     private router: Router,
     public fb: FormBuilder, // Form Builder service for Reactive forms

      private translate: TranslateService){

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {
    this.form = this.fb.group(
      {
        vendorName:['', Validators.required],
        vendorAccountantNumber:['',[Validators.required]],
        vendorCode: ['',[Validators.required]],
        contactPerson: ['',[Validators.required]],
        details: ['',[Validators.required]],

        contactNumber: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]]
       // 1) Begins with 0 or 00962
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits

      }

    );



   }
   goVendorList(){
     this.router.navigate(['/purchase/vendor/vendor'])
   }

   submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
   public onAddVendor(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }  this.vendorService.addVendor(this.vendorData).subscribe(
       (response: Vendor) => {
         console.log(response);
         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

         this.vendorService.getAllVendor();
         this.goVendorList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

       }
     );

   }
  }
