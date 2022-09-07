import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { Companies } from 'src/app/companies/companies';
import { CompaniesService } from 'src/app/companies/companies.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import Swal from 'sweetalert2';
import { DebtorNoticeService } from '../debtor-notice.service';
import { DebtorNotice } from '../DebtorNotice';

@Component({
  selector: 'app-edit-debtor-notice',
  templateUrl: './edit-debtor-notice.component.html',
  styleUrls: ['./edit-debtor-notice.component.scss']
})
export class EditDebtorNoticeComponent implements OnInit {

  DebtorNoticesId;
  DebtorNoticess;
  form: FormGroup = new FormGroup({
    creditNoticeDate: new FormControl(''),
    creditNoticevalue: new FormControl(''),
    customerId: new FormControl(''),

    accountId: new FormControl(''),

  });


 companies;
 customers;
 accounts;

  constructor(private DebtorNoticesService:DebtorNoticeService ,
    private companiesService: CompaniesService,
    private customerService:CustomerService ,
     private router: Router,
     private coaService:CoaService,

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
    this. getDebtorNoticesAllById();
    this.form = this.fb.group(
      {
        creditNoticeDate:  ['',Validators.required],
        creditNoticevalue:  ['',Validators.required],
        customerId:['',Validators.required],

        accountId:['',Validators.required],
   } )

   }
   goDebtorNoticesList(){
     this.router.navigate(['/accounts/debtorNotice/debtorNotice'])
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

  public getDebtorNoticesAllById(): void {
    this.DebtorNoticesId= this.activateRoute.snapshot.params['id'];
    this.DebtorNoticesService.getDebtorNoticeById(this.DebtorNoticesId)
    .subscribe(data => {
      this.DebtorNoticess = data;
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

   public onEditDebtorNotices(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.DebtorNoticesService.updatDebtorNotice(this.DebtorNoticess).subscribe(
       (response: DebtorNotice) => {
         console.log(response);
         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

         this.goDebtorNoticesList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
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
