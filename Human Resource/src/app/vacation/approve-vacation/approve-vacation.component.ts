import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AdvanceService } from 'src/app/advances/advance.service';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';
import { Vacation } from '../vacation';
import { VacationService } from '../vacation.service';
@Component({
  selector: 'app-approve-vacation',
  templateUrl: './approve-vacation.component.html',
  styleUrls: ['./approve-vacation.component.scss']
})
export class ApproveVacationComponent implements OnInit {

  vacationId;
  vacation;

  vacationData = {
    vacationId: '',
    vacationType: '',
    description:  '',
    approvedBy:'',
    dateFrom:'',
    dateTo:'',
    attachment:'',
    // daysOfVacation: 0,
    remainingVacation:0,
    employee:  {
      employeeId:'',

  },
};

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private vacationService: VacationService,
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
    this.getVacation();

  }

  public getVacation(){
    this.vacationId = this.activateRoute.snapshot.params['id'];
    this.vacationService.getById(this.vacationId).subscribe(data => {
      console.log(data)
      this.vacation = data;
    }, error => console.log(error));
  }


  public onApprove(vacation){
    this.vacationService.approveVacation(this.vacation).subscribe( data => {
      console.log(data);
      Swal.fire(this.translate.instant('Success'), this.translate.instant('vacationisapproved'), 'success')

      this.getVacation();
     // this.getAdvance();
      this.goVacations();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('Errorwhileapproveadvance'), 'error')

    }
    );
  }

  goVacations(){
    this.router.navigate(['/operation/vacation/vacations']);
  }

contract;
days;
  public getContract(): void{

    this.contractService.getContractsByEmployeeId(this.vacation.employeeId).subscribe(
      (data:any) => {
        this.contract = data ;
        this.days=this.contract.vacationDayNumber;
        // daysOfVacation = (dateTo.getTime() -dateFrom.getTime())/ (1000 * 3600 * 24) ;
        console.log(this.contract);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        //Swal.fire(error.message);
      }
    )
  }



}
