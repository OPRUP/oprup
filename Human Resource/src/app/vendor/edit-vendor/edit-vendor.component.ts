  import { HttpErrorResponse } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { TranslateService } from '@ngx-translate/core';
  import { Bank } from 'src/app/banks/bank';
  import Swal from 'sweetalert2';
  import { Vendor } from '../Vendor';
  import { VendorserviceService } from '../vendorservice.service';

  @Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
  })
  export class EditVendorComponent implements OnInit {

    form: FormGroup = new FormGroup({
      vendorAccountantNumber: new FormControl(''),
      vendorCode: new FormControl(''),
      vendorName: new FormControl(''),
      contactPerson: new FormControl(''),
      contactNumber: new FormControl(''),
      details: new FormControl(''),
    });


  vendorId!: number;
  vendor;
  vendors!:Vendor[];


  constructor(private vendorService:VendorserviceService ,
  private router: Router ,
  public fb: FormBuilder, // Form Builder service for Reactive forms

  private activateRoute: ActivatedRoute,
  private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }



  ngOnInit() {
  this.getVendor();
  this.form = this.fb.group(
    {
      vendorName:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
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

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  goVendorList(){
  this.router.navigate(['/purchase/vendor/vendor/'])
  }

  public getVendor(){
   this.vendorId= this.activateRoute.snapshot.params['id'];
  this.vendorService.getVendorById(this.vendorId)
  .subscribe(data => {
    this.vendor = data;
    console.log(data)
  }, error => console.log(error));


  }


  public onUpdateVendor(vendor): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

  this.vendorService.updateVendor(this.vendor).subscribe(
  (response) => {
  console.log(response);
  Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
  // this.getAllVendor();
  this.goVendorList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
  }
  );
  }

  }



