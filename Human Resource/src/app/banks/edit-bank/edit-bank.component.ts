import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.scss']
})
export class EditBankComponent implements OnInit {

  //public qualification: Qualification[] = [];
  bankId!: number;
  bank!: Bank;
  banks!: Bank[];
  form: FormGroup = new FormGroup({
    bankName: new FormControl(''),

  });

  constructor(private bankService: BankService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getBank();
    this.form = this.fb.group(
      {
        bankName:['', Validators.required],
      }

    );
  }

  goBankList(){
    this.router.navigate(['/banks/banks'])
  }

  public getBank(){
    this.bankId = this.activateRoute.snapshot.params['id'];
    this.bankService.getBankById(this.bankId)
    .subscribe(data => {

      this.bank = data;
    }, error => console.log(error));
  }

  public getAllBanks(): void {
    this.bankService.getBanks().subscribe(
      (response: Bank[]) => {
        this.banks = response;
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

  public onUpdateBank(bank: Bank): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.bankService.updateBank(this.bank).subscribe(
      (response: Bank) => {

        // Swal.fire('Success', 'Bank Information is Updated', 'success')
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
        this.getAllBanks();
        this.goBankList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')

      }
    );

  }


}
