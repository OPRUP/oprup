import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Companies } from 'src/app/companies/companies';
import { CompaniesService } from 'src/app/companies/companies.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import Swal from 'sweetalert2';
import { DebtorNoticeService } from '../debtor-notice.service';
import { DebtorNotice } from '../DebtorNotice';

@Component({
  selector: 'app-delete-debtor-notice',
  templateUrl: './delete-debtor-notice.component.html',
  styleUrls: ['./delete-debtor-notice.component.scss']
})
export class DeleteDebtorNoticeComponent implements OnInit {

  DebtorNoticesId;
  DebtorNoticess;
  items;

  constructor(private DebtorNoticesService:DebtorNoticeService ,
    private companiesService: CompaniesService,
    private customerService:CustomerService ,
     private router: Router,
     private activateRoute: ActivatedRoute,
     public fb: FormBuilder, // Form Builder service for Reactive forms

      private translate: TranslateService){

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {
    this.getAllItems()
    this. getDebtorNoticesAllById();


   }
   goDebtorNoticesList(){
     this.router.navigate(['/accounts/debtorNotice/debtorNotice'])
   }


   public getAllItems(): void {

    this.DebtorNoticesService.getItemsByDebtorNoticeId(this.activateRoute.snapshot.params['id']).subscribe((response) => {
    this.items =response;

      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }
      );
  }

  public getDebtorNoticesAllById(): void {
    this.DebtorNoticesId= this.activateRoute.snapshot.params['id'];
    this.DebtorNoticesService.getDebtorNoticeById(this.DebtorNoticesId)
    .subscribe(data => {
      this.DebtorNoticess = data;
      console.log(data)
    }, error => console.log(error));
  }






   public onDeleteDebtorNotices(): void {
    this.items.forEach(element=>{
      this.DebtorNoticesService.deleteItemByDebtorNoticeId(element).subscribe(data=>{
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

        this.goDebtorNoticesList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
      })
    })

    this.DebtorNoticesService.deleteDebtorNotice(this.DebtorNoticess).subscribe(
       (response: DebtorNotice) => {
         console.log(response);
         Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

         this.goDebtorNoticesList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
       }
     );

   }
  }
