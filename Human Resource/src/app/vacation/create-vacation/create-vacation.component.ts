import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import Swal from 'sweetalert2';
import { Vacation } from '../vacation';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-create-vacation',
  templateUrl: './create-vacation.component.html',
  styleUrls: ['./create-vacation.component.scss']
})
export class CreateVacationComponent implements OnInit {
  contractId;
  contract;

  employeeId;
  employee;

    vacationData = {
      vacationId: '',
      vacationType: '',
      description:  '',
      approvedBy:'',
      dateFrom:'',
      dateTo:'',
      attachment:'',
      daysOfVacation:'',
      employee:  {
        employeeId:'',
    },
  };


  vacation!: Vacation[];
  employees!: Employee[];
  empDaysVacation=0;
  contractDays=0;
  vocationDays=0;
  totalDays=0;


  constructor(
    private vacationService : VacationService,
    private employeeService: EmployeeService,

    private contractService: Employee09_ContractService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }
  getNumberOfDays(dateFrom,dateTo) {
    dateFrom = new Date(this.vacationData.dateFrom);
    dateTo = new Date(this.vacationData.dateTo);
    this.vocationDays = ((dateTo.getTime() -dateFrom.getTime())/ (1000 * 3600 * 24)+1);
    this.vacationData.daysOfVacation=(this.vocationDays).toString();
    this.getSumOfDaysVacation();
  }
  getContractEmp(employeeId){
    console.log(employeeId);
      this.contractService.getContractsByEmployeeId(employeeId).subscribe((response:any) =>{
        this.contractDays = response[0].vacationDayNumber;

      this.vacationService.findDaysOfVacation(employeeId).subscribe((response:any)=>{
        if (response[0]==null)
          this.empDaysVacation=0;
        else
          this.empDaysVacation=response[0];
      },)
    },)
  }
 getSumOfDaysVacation()
{
  this.totalDays = this.contractDays - this.empDaysVacation;
  // alert("contractDays: " + this.contractDays);
  // alert("empDaysVacation: " + this.empDaysVacation);
  // alert("totalDays:' " + this.totalDays);
  if (this.totalDays < this.vocationDays){
    Swal.fire(this.translate.instant('ًarning'), this.translate.instant('youdonthaveenoghdays'), 'warning')
  }
}



  ngOnInit() {
    this.getEmployee();
    // this.getContract();


  }

  public getContract(): void{
    this.contractId = this.activateRoute.snapshot.params['cid'];
    this.contractService.getById(this.contractId).subscribe(
      (data:any) => {
        this.contract = data;
        console.log(this.contract);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        //Swal.fire(error.message);
      }
    )
  }

  goVacationList(){
    this.router.navigate(['/operation/vacation/vacations'])
  }
  public onAddVacation(): void {
    document.getElementById('add-vacation-form')?.click();
    if(new Date(this.vacationData.dateTo)<=new Date(this.vacationData.dateFrom))
    { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
return;
   }
    this.vacationService.addVacation(this.vacationData).subscribe(
      (response: Vacation) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        this.goVacationList();
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
    );
  }

  public getEmployee(): void{
    this.employeeService.get().subscribe((response:Employee[]) => {
      this.employees = response;
      console.log(this.employees);
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }



}
