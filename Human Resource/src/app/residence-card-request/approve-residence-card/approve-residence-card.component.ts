
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';
import { ResidenceCardRequestService } from '../residence-card-request.service';


@Component({
  selector: 'app-approve-residence-card',
  templateUrl: './approve-residence-card.component.html',
  styleUrls: ['./approve-residence-card.component.scss']
})
export class ApproveResidenceCardComponent implements OnInit {

  residenceCardRequestId;
  residenceCardRequest;

  ResidenceCardRequestData = {
    residenceCardRequestId:'',
    date: '',
    reason:  '',
    employee:  {
      employeeId:'',

  },
};


constructor(
  private activateRoute: ActivatedRoute,
  private router: Router,
  private residenceCardRequestService: ResidenceCardRequestService,
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
    this.getResidenceCardRequest();
  }

  public getResidenceCardRequest(){
    this.residenceCardRequestId = this.activateRoute.snapshot.params['id'];
    this.residenceCardRequestService.getById(this.residenceCardRequestId).subscribe(data => {

      this.residenceCardRequest = data;
    }, error => console.log(error));
  }


  public onApprove(residenceCardRequest){
    this.residenceCardRequestService.approveResidenceCardRequest(this.residenceCardRequest).subscribe( data => {


      Swal.fire(this.translate.instant('success'), this.translate.instant('ResidenceCardRequestisapproved'), 'success')
      this.getResidenceCardRequest();
     // this.getAdvance();
      this.goResidenceCardRequest();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileapproveResidenceCardRequest'), 'error')
    }
    );
  }
  goResidenceCardRequest(){
    this.router.navigate(['/operation/ResidenceCard/print-residence-card/']);
  }

}

