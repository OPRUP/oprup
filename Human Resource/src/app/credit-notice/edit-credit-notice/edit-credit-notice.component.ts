import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { Companies } from 'src/app/companies/companies';
import { CompaniesService } from 'src/app/companies/companies.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import Swal from 'sweetalert2';
import { CreditNoticeService } from '../credit-notice.service';
import { CreditNotice } from '../CreditNotice';

@Component({
  selector: 'app-edit-credit-notice',
  templateUrl: './edit-credit-notice.component.html',
  styleUrls: ['./edit-credit-notice.component.scss']
})
export class EditCreditNoticeComponent implements OnInit {
  CreditNoticeId;
  creditNotices;
  form: FormGroup = new FormGroup({
    creditNoticeDate: new FormControl(''),
    creditNoticevalue: new FormControl(''),
    customerId: new FormControl(''),

    accountId: new FormControl(''),

  });


 companies;
 customers;
 accounts

  constructor(private creditNoticeService:CreditNoticeService ,
    private companiesService: CompaniesService,
    private customerService:CustomerService ,
    private coaService:CoaService,
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
    this.getAllCompanies();
    this.getAllCustomers();
    this.getTree();
    this. getCreditNoticeAllById();
    this.form = this.fb.group(
      {
        creditNoticeDate:  ['',Validators.required],
        creditNoticevalue:  ['',Validators.required],
        customerId:['',Validators.required],

        accountId:['',Validators.required],
   } )

   }
   gocreditNoticeList(){
     this.router.navigate(['/accounts/creditNotice/creditNotice'])
   }


   public getAllCompanies(): void {

    this.companiesService.get().subscribe((response:Companies[]) => {
      this.companies =response;
      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }
      );
  }

  public getCreditNoticeAllById(): void {
    this.CreditNoticeId= this.activateRoute.snapshot.params['id'];
    this.creditNoticeService.getCreditNoticeById(this.CreditNoticeId)
    .subscribe(data => {
      this.creditNotices = data;
      console.log(data)
    }, error => console.log(error));
  }


  public getAllCustomers(): void {

    this.customerService.getAllCustomer().subscribe((response:Customer[]) => {
      console.log('getAllCustomer', response)

      this.customers = response;


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }




   submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

   public onEditCreditNotice(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.creditNoticeService.updatCreditNotice(this.creditNotices).subscribe(
       (response: CreditNotice) => {
         console.log(response);
         Swal.fire('Success', 'Credit Notice is updated', 'success')

         this.gocreditNoticeList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire('Error!! ', 'Error while updating Credit Notice', 'error')
       }
     );

   }



   public getTree(){
    this.coaService.getAccountByType('sub').subscribe((response) => {
    this.accounts = response;

    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
    )
    }

  }
