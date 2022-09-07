import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AdvanceService } from 'src/app/advances/advance.service';
import { EmployeeSalaryObjectService } from 'src/app/employee-salary-objects/employee-salary-object.service';
import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import { SheetService } from 'src/app/sheet/sheet.service';
import Swal from 'sweetalert2';
import { Slip } from '../slip';
import { SlipService } from '../slip.service';

@Component({
  selector: 'app-create-slip',
  templateUrl: './create-slip.component.html',
  styleUrls: ['./create-slip.component.scss']
})
export class CreateSlipComponent implements OnInit {
  contractId;
  contractDetails;
  employeeId;
  employee;
  employeeSalaryObjects;
  allowance;
  deduction;
  netSalary=0;
  allowanceCounter;
  deductionCounter

  slipData ={
    slipId: '',
    year: '',
    month: '',
    paymentWay: '',
    paymentDate: '',
    netSalary: '',
    allowance: '',
    deduction: '',
    status :"Approved",
    contract: {
      contractId: this.activateRoute.snapshot.params['cid']
    }


  }
  advances;
  snackBar: any;

  monthlyPayment=0;

  constructor(private employeeService: EmployeeService,
              private contractDetailService: ContractDetailService,
              private slipService: SlipService,
              private advanceService:AdvanceService,
              private sheetService:SheetService,
              private route: Router,
              private activateRoute: ActivatedRoute,
              private translate: TranslateService
    )
    {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;


    }

    public goSlip(){
      this.route.navigate(['/slips/slips'])
    }



  ngOnInit() {
    // if we does not write or initiate employee id here will give you this error
    //object references an unsaved transient instance - save the transient instance before flushing : net.oprup.HumanResource.model.Slip.employee ->
    // this.slipData.employee.employeeId = this.activateRoute.snapshot.params['eid'];

    this.getEmployee();
    this.getContractDetailsByContractId();
    // this.getContractDetailsByEmployeeId();
    //this.getEmployeeadvance();

  }

  public getEmployee(){
    this.employeeId = this.activateRoute.snapshot.params['eid'];
    this.employeeService.getById(this.employeeId).subscribe(
      (response:any) =>{
        this.employee = response;

      },
    )
  }


  public onAddSlip(){
    if(this.slipData.year.trim() == '' || this.slipData.year == null){
      this.snackBar.open("Year is Required !!", '', {
        duration: 3000,
      });
    }
    this.slipData.allowance = this.allowance;
    this.slipData.deduction = this.deduction;
    this.slipData.netSalary = this.netSalary.toString();
    debugger
    this.slipService.addSlip(this.slipData).subscribe(
      (data: Slip) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        this.slipData.month = "";
        this.slipData.year = "";
        this.slipData.paymentWay = "";

        this.goSlip();
      },
      (error) => {

  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
    )
  }

  public getContractDetailsByContractId(){
    this.contractId = this.activateRoute.snapshot.params['cid'];
    this.contractDetailService.getContractDetailsByContractId(this.contractId).subscribe(
      (data:any) => {
        this.contractDetails =data;
      //  console.log(this.contractDetails);
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


  getEmployeeadvance(){

    this.advanceService.getAdvanceByApproveEmpId(this.employeeId).subscribe((response:any) =>{


        this.advances = response;
        var startMonth=this.advances[0].deductionStartMonth;
        var startYear=this.advances[0].deductionStartYear;
       var InstallmentNo=this.advances[0].numberOfInstallment


       var currentMonth= parseInt(this.slipData.month)
       var currentYear= parseInt(this.slipData.year)
var m =0;
var y=0;

       if(currentMonth>= startMonth){

      m = currentMonth-startMonth
      y=currentYear- startYear

       }
       else{
        m = currentMonth+12-startMonth
        y = currentYear-1-(startYear)
       }

       var nInstallmentNo = parseInt(InstallmentNo) -m + y*12
      // alert( " the retrived "+ InstallmentNo + "\n" + "the current Month " + currentMonth  +  "   the current Year " + currentYear   +"\n"  + "the start Month " + startMonth  +  "   the start Year " + startYear + "\n" +  " m = " + m + "\n" + "y = " + y +"\n" +"the last calcultion is nInstallment " + nInstallmentNo)
      //   var startDate = new Date(parseInt(this.advances[0].deductionStartYear), parseInt(this.advances[0].deductionStartMonth),this.getLastDay(parseInt(this.advances[0].deductionStartMonth),parseInt(this.advances[0].deductionStartYear)));
      //  var currentDate = new Date(parseInt(this.slipData.year), parseInt(this.slipData.month),this.getLastDay(parseInt(this.slipData.month),parseInt(this.slipData.year)));

      //  var dif =this.monthDiff(startDate,currentDate)
      //  alert(startDate + "\n"+"the current Date is " + currentDate)
      //  alert(dif)
    //  if(dif>= 0 && dif<= parseInt(this.advances[0].numberOfInstallment)-1){
      if (nInstallmentNo>0)
      this.monthlyPayment=this.advances[0].monthlyPayment
     // alert(this.monthlyPayment)
      this.netSalary -= this.monthlyPayment
      //alert(this.netSalary)

      //alert(this.deductionCounter)
      this.netSalary -=  this.deductionCounter;
     // alert(this.netSalary)
      this.slipData.netSalary=this.netSalary.toString()
    //  }

      },
    )

  }
timesheets;
currentAttValue=0

getAttendenceValue(){


  this.sheetService.getSheetofEmployeeS(this.employeeId,1,this.slipData.month,this.slipData.year).subscribe(
    (response:any) =>{

      this.timesheets = response;
      for(const item of this.timesheets){
       this.currentAttValue += parseFloat(item.attValue)
       this.currentAttValue+= parseFloat(item.otValue)
      }

      this.netSalary=this.currentAttValue


    },
  )

}



}
