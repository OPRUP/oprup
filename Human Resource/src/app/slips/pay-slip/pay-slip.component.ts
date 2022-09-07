import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeSalaryObjectService } from 'src/app/employee-salary-objects/employee-salary-object.service';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Slip } from '../slip';
import { SlipService } from '../slip.service';

@Component({
  selector: 'app-pay-slip',
  templateUrl: './pay-slip.component.html',
  styleUrls: ['./pay-slip.component.scss']
})
export class PaySlipComponent implements OnInit {
  slipId;
  employeeId;
  contractId;
  employee;
  contractDetails;
  slip!:Slip;
  allowance;
  deduction;
  allowanceCounter;
  deductionCounter;


  constructor(

    private slipService: SlipService,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    private contractDetailService: ContractDetailService,
    private employeeService: EmployeeService
    )
    {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
     }

  ngOnInit() {
    this.getEmployee();
    this.contractId = this.activateRoute.snapshot.params['cid'];
    this.slipId = this.activateRoute.snapshot.params['id'];
    this.getSlipBySlipId();
    this.getContractDetailsByContractId();
  }

  public getSlipBySlipId() {
    // this.slipId = this.activateRoute.snapshot.params['id'];

    this.slipService.getSlipBySlip(this.slipId).subscribe(
      (data:Slip) => {
        this.slip = data;


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        //Swal.fire(error.message);
      }

    )
  }

  public getEmployee(){
    this.employeeId = 1;
    this.employeeService.getById(this.employeeId).subscribe(
      (response:any) =>{
        this.employee = response;

      },
    )
  }


  public getContractDetailsByContractId(){
    this.contractId = this.activateRoute.snapshot.params['cid'];
    this.contractDetailService.getContractDetailsByContractId(this.contractId).subscribe(
      (data:any) => {
        this.contractDetails =data;
     
        this.allowanceCounter=0;
        this.contractDetails.forEach(allowance => {
          this.allowanceCounter+= allowance.allowanceAmount;

        });
        this.deductionCounter=0;
        this.contractDetails.forEach(deduction => {
          this.deductionCounter+= deduction.deductionAmount;

        });
      }
    )

  }




  // public getEmployeeSalaryObjectsOfEmployee(){
  //   this.slipId = this.activateRoute.snapshot.params['sid'];
  //   this.employeeId = this.activateRoute.snapshot.params['eid'];
  //   this.employeeSalaryObjectService.getEmployeeSalaryObjectByEmployeeId(this.employeeId).subscribe(
  //     (data:any) => {
  //       this.employeeSalaryObjects =data;
  //       console.log(this.employeeSalaryObjects);
  //       this.allowance=0;
  //       this.employeeSalaryObjects.forEach(allowance => {
  //         this.allowance+= allowance.allowanceAmount;

  //       });
  //       this.deduction=0;
  //       this.employeeSalaryObjects.forEach(deduction => {
  //         this.deduction+= deduction.deductionAmount;

  //       });
  //       this.netSalary = this.allowance - this.deduction;

  //     }
  //   )

  // }



}
