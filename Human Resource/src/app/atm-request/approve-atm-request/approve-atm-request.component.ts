import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AdvanceService } from 'src/app/advances/advance.service';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';
import { AtmRequestService } from '../atm-request.service';

@Component({
  selector: 'app-approve-atm-request',
  templateUrl: './approve-atm-request.component.html',
  styleUrls: ['./approve-atm-request.component.scss']
})
export class ApproveAtmRequestComponent implements OnInit {

  creditCardRequestId;
  aTMCardRequest;

  ATMCardRequestData = {
    creditCardRequestId: '',
    date: '',
    reason:  '',

    employee:  {
      employeeId:'',

  },
};


constructor(
  private activateRoute: ActivatedRoute,
  private router: Router,
  private atmRequestService: AtmRequestService,
  private translate: TranslateService,
  private contractService: Employee09_ContractService,
  contractDetailService:ContractDetailService,

) {

  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
 }

  ngOnInit(): void {
    this.getATMCardRequest();
  }



  public getATMCardRequest(){
    this.creditCardRequestId = this.activateRoute.snapshot.params['id'];
    this.atmRequestService.getById(this.creditCardRequestId).subscribe(data => {

      this.aTMCardRequest = data;
    }, error => console.log(error));
  }


  public onApprove(aTMCardRequest){
    this.atmRequestService.approveATMCardRequest(this.aTMCardRequest).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('Approved'), 'success')
      this.getATMCardRequest();
     // this.getAdvance();
      this.goATMCardRequest();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      warning:
      Swal.fire(this.translate.instant('warning'), this.translate.instant('ErrorwhileaddingData'), 'warning')
    }
    );
  }
  goATMCardRequest(){
    this.router.navigate(['/operation/ATMRequest/atm-requests']);
  }

}

