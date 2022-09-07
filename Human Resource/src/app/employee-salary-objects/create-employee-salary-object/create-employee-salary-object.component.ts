import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { SalaryObject } from 'src/app/salary-objects/salary-object';
import { SalaryObjectService } from 'src/app/salary-objects/salary-object.service';
import Swal from 'sweetalert2';
import { EmployeeSalaryObject } from '../employee-salary-object';
import { EmployeeSalaryObjectService } from '../employee-salary-object.service';

@Component({
  selector: 'app-create-employee-salary-object',
  templateUrl: './create-employee-salary-object.component.html',
  styleUrls: ['./create-employee-salary-object.component.scss']
})
export class CreateEmployeeSalaryObjectComponent implements OnInit {


  employeeSalaryObjectData = {
    employeeSalaryObjectId: '',
    type: '',
    allowanceAmount: '',
    deductionAmount: '',
    amount: '',
    createdDate:  '',
    endDate: '',
    deleteFlag: 1,
    employee: {
      employeeId: '',
      employeeName: '',
    },
    salaryObject: {
      salaryObjectId: '',
      salaryObjectName: '',
    },
  };

  employeeSalaryObject!:  EmployeeSalaryObject[];
  employeeSalaryObjects;
  employees!: Employee[];
  employeeId;
  employee;
  allowanceCounter ;
  deductionCounter ;
  salaryObjects!: SalaryObject[];
  snackBar!: MatSnackBar;


  constructor(private salaryObjectService: SalaryObjectService,
              private employeeService: EmployeeService,
              private employeeSalaryObjectService: EmployeeSalaryObjectService,
              private router: Router,
              private activateRoute: ActivatedRoute, private translate: TranslateService){
                this.translate.setDefaultLang('ar');
                const lang = localStorage.getItem('lang')  || 'ar';
                this.translate.use(lang);
                document.documentElement.lang = lang;
              }

  ngOnInit() {
    this.getEmployee();
    this.getSalaryObjects();
    this.getEmployeeSalaryObjectsOfEmployee();
    this.employeeSalaryObjectData.employee.employeeId = this.activateRoute.snapshot.params['id'];
  }

  goEmployeeSalaryObjectsList(){
    this.router.navigate(['/employee-salary-objects/employee-salary-objects'])
  }

  public onAddEmloyeeSalaryObject(): void {

    if(this.employeeSalaryObjectData.amount.trim() == '' || this.employeeSalaryObjectData.amount == null){
      this.snackBar.open("amount is Required !!", '', {
        duration: 3000,
      });
    }

    if(this.employeeSalaryObjectData.type.trim() == 'Allowance'){
      this.employeeSalaryObjectData.allowanceAmount = this.employeeSalaryObjectData.amount;
      this.employeeSalaryObjectData.deductionAmount = "0";

    }else if(this.employeeSalaryObjectData.type.trim() == 'Deduction'){

      this.employeeSalaryObjectData.deductionAmount = this.employeeSalaryObjectData.amount;
      this.employeeSalaryObjectData.allowanceAmount = "0";


    }


    this.employeeSalaryObjectService.addEmployeeSalaryObject(this.employeeSalaryObjectData).subscribe(
      (data: EmployeeSalaryObject) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.employeeSalaryObjectData.amount = "";
        this.employeeSalaryObjectData.salaryObject.salaryObjectId= "";
        this.employeeSalaryObjectData.type="";

       // this.employeeSalaryObjectService.getEmployeeSalaryObjects();
        this.getEmployeeSalaryObjectsOfEmployee()
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        console.log(error);
      }
    );
  }

  public getEmployee(): void{
    this.employeeId = this.activateRoute.snapshot.params['id'];

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

  public getSalaryObjects(): void{
    this.salaryObjectService.getSalaryObjects().subscribe(
      (data:SalaryObject[]) => {
      this.salaryObjects = data;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }

  public getEmployeeSalaryObjectsOfEmployee(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.employeeSalaryObjectService.getEmployeeSalaryObjectByEmployeeId(this.employeeId).subscribe(
      (data:any) => {
        this.employeeSalaryObjects =data;
    
        this.allowanceCounter=0;
        this.employeeSalaryObjects.forEach(allowance => {
          this.allowanceCounter+= allowance.allowanceAmount;

        });
        this.deductionCounter=0;
        this.employeeSalaryObjects.forEach(deduction => {
          this.deductionCounter+= deduction.deductionAmount;

        });
      }
    )

  }






}
