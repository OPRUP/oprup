
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ResidenceCardRequestService } from '../residence-card-request.service';
import { ResidenceCardRequest } from '../residence-card-request';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';


@Component({
  selector: 'app-reject-residence-card',
  templateUrl: './reject-residence-card.component.html',
  styleUrls: ['./reject-residence-card.component.scss']
})
export class RejectResidenceCardComponent implements OnInit {



  residenceCardRequestId;
  residenceCardRequest;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private residenceCardRequestService: ResidenceCardRequestService,
    private translate: TranslateService
  ) {

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }


  ngOnInit(): void {
    this.getResidenceCardRequest();
  }

  public getResidenceCardRequest(){
    this.residenceCardRequestId = this.activateRoute.snapshot.params['id'];
    this.residenceCardRequestService.getResidenceCardRequestById(this.residenceCardRequestId).subscribe(data => {

      this.residenceCardRequest = data;
    }, error => console.log(error));
  }


  public onReject(residenceCardRequest: ResidenceCardRequest){
    this.residenceCardRequestService.rejectResidenceRequest(this.residenceCardRequest).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('ResidenceCardRequestisrejected'), 'success')
      this.goResidenceCardRequest();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ResidenceCardRequestisrejected'), 'error')
    }
    );
  }

  goResidenceCardRequest(){
    this.router.navigate(['/operation/ResidenceCard/print-residence-card/']);
  }
}







