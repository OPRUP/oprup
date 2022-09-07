import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Companies } from 'src/app/companies/companies';
import { CompaniesService } from 'src/app/companies/companies.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import Swal from 'sweetalert2';
import { CreditNoticeService } from '../credit-notice.service';
import { CreditNotice } from '../CreditNotice';

@Component({
  selector: 'app-delete-credit-notice',
  templateUrl: './delete-credit-notice.component.html',
  styleUrls: ['./delete-credit-notice.component.scss']
})
export class DeleteCreditNoticeComponent implements OnInit {

  CreditNoticeId= this.activateRoute.snapshot.params['id'];
  creditNotices;
  items;




  constructor(private creditNoticeService:CreditNoticeService ,
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
    this.getItemsByCreditNotice();
    this. getCreditNoticeById();


   }
   gocreditNoticeList(){
     this.router.navigate(['/accounts/creditNotice/creditNotice'])
   }


   public getItemsByCreditNotice(): void {

    this.creditNoticeService.getItemsByCreditNoticeId(this.CreditNoticeId).subscribe((response) => {
      this.items =response;
      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }
      );
  }

  public getCreditNoticeById(): void {
    this.creditNoticeService.getCreditNoticeById(this.CreditNoticeId)
    .subscribe(data => {
      this.creditNotices = data;
      console.log(data)
    }, error => console.log(error));
  }


 




   public onDeleteCreditNotice(): void {


    this.creditNoticeService.deleteCreditNotice(this.creditNotices).subscribe(
       (response: CreditNotice) => {
         console.log(response);
         
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire('Error!! ', 'Error while updating Credit Notice', 'error')
       }
     );

     this.items.forEach(element=>{
      this.creditNoticeService.deleteCreditNoticeItems(element).subscribe(data=>{
        Swal.fire('Success', 'Credit Notice is updated', 'success')

         this.gocreditNoticeList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        Swal.fire('Error!! ', 'Error while updating Credit Notice', 'error')
      })
     })

   }
  }
