import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { AtmRequestService } from '../atm-request.service';
import { ATMCardRequest } from '../atm-request';

@Component({
  selector: 'app-reject-atm-request',
  templateUrl: './reject-atm-request.component.html',
  styleUrls: ['./reject-atm-request.component.scss']
})
export class RejectAtmRequestComponent implements OnInit {
  // creditCardRequestId;
  // aTMCardRequest;
  creditCardRequestId;
  aTMCardRequest;

//   ATMCardRequestData = {
//     creditCardRequestId: '',
//     date: '',
//     reason:  '',

//     employee:  {
//       employeeId:'',

//   },
// };


  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private atmRequestService: AtmRequestService,
    private translate: TranslateService
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
    this.atmRequestService.getATMCardRequestById(this.creditCardRequestId).subscribe(data => {

      this.aTMCardRequest = data;
    }, error => console.log(error));
  }


  public onReject(aTMCardRequest: ATMCardRequest){
    this.atmRequestService.rejectATMCardRequest(this.aTMCardRequest).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('Reject'), 'success')
      this.goATMCardRequest();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('warning'), this.translate.instant('ErrorwhileaddingData'), 'warning')
    }
    );
  }

  goATMCardRequest(){
    this.router.navigate(['/operation/ATMRequest/atm-requests']);
  }
}






