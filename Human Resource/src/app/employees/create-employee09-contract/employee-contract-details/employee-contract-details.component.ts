import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SalaryObject } from 'src/app/salary-objects/salary-object';
import { SalaryObjectService } from 'src/app/salary-objects/salary-object.service';
import Swal from 'sweetalert2';
import { ContractDetailService } from '../../contract-detail.service';
import { ContractDetail } from '../../employee';
import { EmployeeService } from '../../employee.service';
import { Employee09_ContractService } from '../../Employee09_Contract.service';

@Component({
  selector: 'app-employee-contract-details',
  templateUrl: './employee-contract-details.component.html',
  styleUrls: ['./employee-contract-details.component.scss']
})
export class EmployeeContractDetailsComponent implements OnInit {

  employeeId;
  employee;
  salaryObjects;
  contractId;
  contract;
  contractDetails;
  allowanceCounter;
  deductionCounter;

  contractDetailsData = {
    contractDetailId: '',
    salaryObjectType: '',
    allowanceAmount: '',
    deductionAmount: '',
    amount:'',
    employee :{
      employeeId:  this.activateRoute.snapshot.params['eid'],
    },
    salaryObject: {
      salaryObjectId: '',
    },
    contract :{
      contractId: this.activateRoute.snapshot.params['cid'],
    }

  }
  snackBar: any;

  constructor(
    private employeeService: EmployeeService,
    private salaryObjectService: SalaryObjectService,
    private contractService: Employee09_ContractService,
    private contractDetailService: ContractDetailService,
    private router: Router,
    private translate: TranslateService,
    private activateRoute: ActivatedRoute

    ) { }

  ngOnInit() {
    this.employeeId = this.activateRoute.snapshot.params['eid'];
    this.contractId = this.activateRoute.snapshot.params['cid'];
    this.getEmployee();
    this.getSalaryObjects();
    this.getContract();
    this.getContractDetailsByContractId();
  }

  public getEmployee(): void{
    this.employeeId = this.activateRoute.snapshot.params['eid'];
    this.employeeService.getById(this.employeeId).subscribe(
      (data:any) => {
      this.employee = data;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }

  public getContract(): void{
    this.contractId = this.activateRoute.snapshot.params['cid'];
    this.contractService.getById(this.contractId).subscribe(
      (data:any) => {
        this.contract = data;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        //Swal.fire(error.message);
      }
    )
  }

  public getSalaryObjects(): void{
    this.salaryObjectService.getSalaryObjects().subscribe(
      (data:SalaryObject[]) => {
      this.salaryObjects = data;
;
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }



  public onAddContractDetail(){

   if(this.contractDetailsData.salaryObjectType=="زيادة")
   {this.contractDetailsData.allowanceAmount=this.contractDetailsData.amount}
   else{
    this.contractDetailsData.deductionAmount=this.contractDetailsData.amount
   }





      this.contractDetailService.add(this.contractDetailsData).subscribe(
        (data: ContractDetail) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

          // this.contractDetailsData.amount = "";
          // this.contractDetailsData.salaryObject.salaryObjectId= "";
          // this.contractDetailsData.salaryObjectType="";

          this.getContractDetailsByContractId();
         // this.employeeSalaryObjectService.getEmployeeSalaryObjects();

        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

          console.log(error);
        }
      );










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
 public deleteEmployeeDocument(salaryObjectId){
    Swal.fire({
      icon: 'info',
      title:  'Are You Sure to Delete record',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){

        this.contractDetailService.delete(salaryObjectId).subscribe(
          (response) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

            this.getContractDetailsByContractId();
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

          }
        );
      }

    })
  }

  goEmployeesList(){
    this.router.navigate([`/employees/employee-contract-details/${this.activateRoute.snapshot.params['eid']}/${this.activateRoute.snapshot.params['cid']}`])
  }

}
