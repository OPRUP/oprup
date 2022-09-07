import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Vendor } from '../Vendor';
import { VendorserviceService } from '../vendorservice.service';

@Component({
  selector: 'app-delete-vendor',
  templateUrl: './delete-vendor.component.html',
  styleUrls: ['./delete-vendor.component.scss']
})
export class DeleteVendorComponent implements OnInit {

  vendorId!: number;
  vendor;
  vendors!:Vendor[];


  constructor(private vendorService:VendorserviceService ,
  private router: Router ,
  private activateRoute: ActivatedRoute,
  private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }



  ngOnInit() {
  this.getVendor();
  // this.getAllVendor();

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


  public onDeletevendorById(vendor): void {

  this.vendorService.deleteVendor(this.vendor).subscribe(
  (response) => {
  console.log(response);
  Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
  // this.getAllVendor();
  this.goVendorList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

  }
  );
  }

  }



