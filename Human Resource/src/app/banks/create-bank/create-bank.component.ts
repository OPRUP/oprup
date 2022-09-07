import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.scss']
})
export class CreateBankComponent implements OnInit {
   banks!: Bank[];
   bankData = {
    bankId: '',
    bankName: '',
    description:  '',
    deleteFlag: 1,
  };

  form: FormGroup = new FormGroup({
    bankName: new FormControl(''),

  });


   constructor(private bankService: BankService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {

    this.form = this.fb.group(
      {
        bankName:['', Validators.required],
      }

    );


   }
   goBankList(){
     this.router.navigate(['/banks/banks'])
   }


   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

   public onAddBank(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
     this.bankService.addBank(this.bankData).subscribe(
       (response: Bank) => {

        //  Swal.fire('Success', 'Bank is added', 'success')
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
         this.bankService.getBanks();
         this.goBankList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
        // Swal.fire('Error!! ', 'Error while adding Bank', 'error')
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

       }
     );
      }

}
