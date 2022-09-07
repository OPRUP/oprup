import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { JournalVoucher } from '../jour-voucher';
import { JournalVoucherService } from '../jour-voucher.service';

@Component({
  selector: 'app-delete-jour-voucher',
  templateUrl: './delete-jour-voucher.component.html',
  styleUrls: ['./delete-jour-voucher.component.scss']
})
export class DeleteJourVoucherComponent implements OnInit {
  journalVoucherId!: number;
  JournalVoucher;
  JournalVouchers!:JournalVoucher[];
  journalDetails;
  constructor(private journalVoucherService: JournalVoucherService,
    private activateRoute: ActivatedRoute ,
    private router: Router,
    private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang; }


  ngOnInit() {
    this.getJournalVoucher();
  }
  public getJournalVoucher(){
    this.journalVoucherId= this.activateRoute.snapshot.params['id'];
   this.journalVoucherService.getJournalVoucherById(this.journalVoucherId)
   .subscribe(data => {
     this.JournalVoucher = data;
     console.log(data)
   }, error => console.log(error));
   this.journalVoucherService.getJournalVoucherDetalisByjournalVoucherId(this.journalVoucherId).subscribe(data=>{
    this.journalDetails=data
   })

   }
   goJournalVoucherList() {
    this.router.navigate(['/accounts/jour-voucher/jour-voucher']);
  }
   public onDeleteJournalVoucherbyId(journalVoucherId): void {

  this.journalDetails.forEach(element=>{
    this.journalVoucherService.deleteJournalVoucherDetalis(element).subscribe(data=>{},(error: HttpErrorResponse) => {
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
      })
  })


    
    this.journalVoucherService.deleteJournalVoucher(this.JournalVoucher).subscribe(
    (response) => {
    console.log(response);
    Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

    this.goJournalVoucherList();
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  
    }

}
