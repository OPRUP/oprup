
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AdvanceService } from 'src/app/advances/advance.service';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';
import { FinalExitService } from '../final-exit.service';

@Component({
  selector: 'app-approve-final-exit',
  templateUrl: './approve-final-exit.component.html',
  styleUrls: ['./approve-final-exit.component.scss']
})
export class ApproveFinalExitComponent implements OnInit {



  finalExitId;
  finalExit;

  finalExitData = {
    finalExitId: '',
    ticket: '',
    exitDate:  '',
    reason:'',

    employee:  {
      employeeId:'',

  },
};

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private finalExitService: FinalExitService,
    private translate: TranslateService,
    private contractService: Employee09_ContractService,
    contractDetailService:ContractDetailService,

  ) {

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getFinalExit();

  }

  public getFinalExit(){
    this.finalExitId = this.activateRoute.snapshot.params['id'];
    this.finalExitService.getById(this.finalExitId).subscribe(data => {

      this.finalExit = data;
    }, error => console.log(error));
  }


  public onApprove(finalExit){
    this.finalExitService.approveFinalExit(this.finalExit).subscribe( data => {


      Swal.fire(this.translate.instant('success'), this.translate.instant('finalExitisapproved'), 'success')

      this.getFinalExit();
     // this.getAdvance();
      this.goFinalExit();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileapprovefinalExit'), 'error')
       }
    );
  }

  goFinalExit(){
    this.router.navigate(['/operation/finalExit/print-final-exit']);
  }





}

