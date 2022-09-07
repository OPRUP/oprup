import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Bank } from 'src/app/banks/bank';
import { BankService } from 'src/app/banks/bank.service';
import Swal from 'sweetalert2';
import { PaymentVoucher } from '../payment-voucher';
import { PaymentVoucherService } from '../payment-voucher.service';
import { CoaService } from 'src/app/coa/coa.service';
import { PaymentCheckService } from '../payment-check.service';



@Component({
  selector: 'app-edit-payment-voucher',
  templateUrl: './edit-payment-voucher.component.html',
  styleUrls: ['./edit-payment-voucher.component.scss']
})
export class EditPaymentVoucherComponent implements OnInit {
  constructor(
    private paymentVoucherService: PaymentVoucherService,
    private checkService: PaymentCheckService,
    private bankService:BankService,
    private router: Router,
    private coaService:CoaService,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    private fb: FormBuilder) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
    }

  ngOnInit() {


  }

}
