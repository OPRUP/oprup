import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ContractDetail, Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service';

import { ContractDetailService } from 'src/app/employees/contract-detail.service';
import { EmployeeProjectsService } from 'src/app/employee-projects/employee-projects.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss']
})
export class SheetsComponent implements OnInit {

  @ViewChild('TABLE', { static: false })
  TABLE!: ElementRef;
  title = 'Excel';
  paginator: any;
  matSort: any;
  healthId: any;
  ExportTOExcel() {
    this.viewFlag=false
    this.toggleDivs()
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }
  retriveCount: number = 0;
  employees;

  timeSheetData = {
    timeSheetId: '',
    attDay: '',
     attWeekDay: '',
     attMonth: '',
     attYear: '',
     overTimeHour: '',
     otValue: '',
     attValue: '',
     attHour: '',
     saveFlag:'',
     attTotalValue:'',
     projectName:'',


    employee: {
      employeeId: '',

    },
  };
  timeSheets;



  constructor(private timeSheetService: SheetService, private router: Router,
    private translate: TranslateService, private employeeService: EmployeeService, private contractdService:ContractDetailService, private employeeProjectService :EmployeeProjectsService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }
  ngOnInit(): void {
    //View Employee in DropDownList--
     this.getEmployee();


  var today2 = new Date();
  this.monthNumber=new Date().getMonth()
  this.yearNumber=new Date().getFullYear()
  }

saveToggle=true;



  //Get Employee Function // Calling Service
  public getEmployee(): void {
    this.employeeService.get().subscribe((response: Employee[]) => {

      this.employees = response;


    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  // Update Function/ Calling Service
  public onUpdateTimeSheet(timeSheet): void {
    timeSheet.saveFlag=1;
    this.saveToggle=false
     debugger
    this.timeSheetService.updateTimeSheet(timeSheet).subscribe(

      (data) => {


        Swal.fire(this.translate.instant('success'), this.translate.instant('SheetisUpdated'), 'success')

this.getEmpSheetT(timeSheet.employee.employeeId,this.monthNumber,this.yearNumber)
      },
      (error) => {

        Swal.fire(this.translate.instant('error')!!, this.translate.instant('ErrorWhileUpdatingSheet'), 'error')
   ///////////////////////

        console.log(error);
      }
    );
  }








  monthNumber=new Date().getMonth()
  yearNumber=new Date().getFullYear()
  attTotal=0;


  getFinalTotaAtt(h :string){

   return this.finalTotalAtt +=parseInt(h)

}
finalTotalOver=0;
getFinalTotalOver(h :string){ return this.finalTotalOver +=parseFloat(h)}

finalTotalAttValue=0;
getFinalTotalAttValue(h :string){ return this.finalTotalAttValue += parseFloat(this.getAttValue(h)) }

finalTotalOverValue=0;
getFinalTotalOverValue(h :string){ return this.finalTotalOverValue +=parseFloat(this.getOtValue(h)) }

finalTotalOfTotals=0;
getFinalTotalOfTotals(a :string, o:string){  return (parseFloat(a)+parseFloat(o)).toString(); }


  public getLastDay(month: number, year: number) {

    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) { return 31; }
    else if ([4, 6, 9, 11].includes(month)) { return 30 }

    else  {
      if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){return 28}
      else {return 29}
    }

  }

  public onGenerateSheet(employeeId: number): void {
   // debugger
   // this.getEmpSheetT(this.employees.employeeId,this.monthNumber,this.yearNumber)


   if (this.retriveCount> 0) {


    Swal.fire(this.translate.instant('info')!!, this.translate.instant('Attendenceisexist'), 'error')

  } else {

      let i = 1;
      let lastDay=1;
      lastDay = this.getLastDay(this.monthNumber, this.yearNumber);
       this.getProject(employeeId);

      while (i <= lastDay) {

        this.timeSheetData.attDay = i.toString();
        this.timeSheetData.attMonth = this.monthNumber.toString();
        this.timeSheetData.attYear = this.yearNumber.toString();
        this.timeSheetData.employee.employeeId = employeeId.toString();
        this.timeSheetData.overTimeHour = '0';
        this.timeSheetData.otValue='0'
        this.timeSheetData.attHour = '0';
        this.timeSheetData.attValue = '0';
        this.timeSheetData.saveFlag = '0';
        this.timeSheetData.attTotalValue = '0';
        this.timeSheetData.attWeekDay=this.getDayName(new Date(this.yearNumber.toString()+'/'+this.monthNumber.toString()+'/'+i.toString()))
        this.timeSheetData.projectName=this.empProject;
       // this.timeSheetData.attTotal='0'

        // this.days.push(currentDate);

        //Call Add Service
        this.timeSheetService.addTimeSheet(this.timeSheetData).subscribe(
          (response: Sheet) => {
           // Swal.fire('Success', 'Attendence is added', 'success')
            Swal.fire(this.translate.instant('success')!!, this.translate.instant('AttendenceisAdded'), 'success')


          },
          (error) => {

            Swal.fire(this.translate.instant('error')!!, this.translate.instant('ErrorWhileAddingAttendence'), 'error')

          }
        );

        i += 1;
      }
    this.timeSheets=null;
      this.getEmpSheetT(employeeId,this.monthNumber,this.yearNumber)
      this.getEmpSheetT(employeeId,this.monthNumber,this.yearNumber)
    }

  }
  getDayName(date:Date){
    const weekday = ["Sun","Mon","Tus","Wed","Thu","Fri","Sat"];
    const d = new Date(date);
    let day = d.getDay()
return weekday[day];
  }



  salary=0;
getOtValue(OtCount:string){
  let daysInMonth =this.getLastDay(this.monthNumber,this.yearNumber);
  return  (parseFloat(OtCount)*(this.salary/(daysInMonth*8))).toFixed(2);
 // return  (parseFloat(OtCount)*(this.salary/240)).toString();
}

getAttValue(attCount:string){
  let daysInMonth =this.getLastDay(this.monthNumber,this.yearNumber);

  return  (parseFloat(attCount)*(this.salary/(daysInMonth*8))).toFixed(2);
}
getTotalValue(attValue:string, oTValue:string){


  return (parseFloat(attValue)+parseFloat(oTValue) ).toFixed(2);
}



finalTotalAtt:number=0;
AttValue:number=0;
getEmpSheetT(employeeId,month,year){

   if(employeeId && month && year){
    this.timeSheetService.getSheetofEmployeeS(employeeId, 1, month, year).subscribe((response: Sheet[]) => {

this.saveToggle=true
      this.timeSheets = response;
     this.retriveCount= response.length;

       this.finalTotalAtt=0;
       this.finalTotalOver=0;
       this.finalTotalAttValue=0;
       this.finalTotalOverValue=0;

       for (const item of response){
        this.finalTotalAtt+= parseInt(item.attHour)
       }

       for (const item of response){
        this.finalTotalOver+= parseInt(item.overTimeHour)
       }

       for (const item of response){
        this.finalTotalAttValue+= parseInt(item.attValue)
       }
       for (const item of response){
        this.finalTotalOverValue+= parseInt(item.otValue)
       }

    },
      (error) => {
        alert(error.message)
        Swal.fire('Error !', error.message, 'error');

      }


    );}
      else
      this.timeSheets=null;
    //  Swal.fire('Error !','Select Employee to Generate Time Sheet', 'error');
}


  public getContractDetailsByEmployeeId(emp:any){
   // alert(emp)
    this.contractdService.getContractDetailsByEmployeeId(emp).subscribe(
      (data:any) => {

         if(data.length==0){
        //  Swal.fire('Error !', 'Adding the attendence has been faild, please make sure this employee have contract', 'error');
          Swal.fire(this.translate.instant('error')!!, this.translate.instant('ErrorAttContract'), 'error')

        }else{

       for(const item of data){

         this.salary += parseInt(item.allowanceAmount)}

      }}
    )

  }
viewFlag=true;
toggleDivs(){
  this.viewFlag=false
}
  printPage() {
    this.viewFlag=false
    window.print();
  }
  empProject
public  getProject(emp:number) {
  this.employeeProjectService.getProjectByEmpId(emp).subscribe(
    (data:any) => {

      this.empProject= data[0].project.projectCode
     //this.empProject=data[0].projectId;

      },(error) => {

        alert(error.message)
        Swal.fire('Error !', error.message, 'error');


      }
  )
}
}







