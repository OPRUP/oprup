import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { Employee, Employee09_Contract } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee09_ContractService } from '../Employee09_Contract.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee09-contract',
  templateUrl: './create-employee09-contract.component.html',
  styleUrls: ['./create-employee09-contract.component.scss']
})
export class CreateEmployee09ContractComponent implements OnInit {
  viewMode;
  contracts;
  snackBar: any;
  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  emp09 = {
    contractId: '',
    contractType: '',
    vacationDayNumber: '',
    dateFrom: '',
    dateTo: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    }
  };

  form: FormGroup = new FormGroup({
    contractType: new FormControl(''),
    vacationDayNumber:  new FormControl(''),
    dateFrom:  new FormControl(''),
    dateTo:  new FormControl(''),
  });


  //constructor() { }
  constructor( private employeeService: EmployeeService,
    private emp09_contract: Employee09_ContractService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router, private activateRoute: ActivatedRoute, public translate: TranslateService){
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    }
  ngOnInit(): void {
    this.viewMode = "tab09";
    this.getEmployee();
    this.getContracts();
    // this.getEmployees();

    this.form = this.fb.group(
      {
    contractType:['', Validators.required],
    vacationDayNumber:  ['', Validators.required],
    dateFrom: ['', Validators.required],
    dateTo: ['', Validators.required],
      }
    );

  }
  public getEmployee(): void{
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId)
    .subscribe(data => {
      this.employee = data;

    }, error => console.log(error));
  }
  public getContracts(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp09_contract.getContractsByEmployeeId(this.employeeId).subscribe(
      (response:any) => {

        this.contracts = response;

      },
    )
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  public onAddContact(): void {
    document.getElementById('add-Contact-form')?.click();

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

     if(new Date(this.emp09.dateTo)<=new Date(this.emp09.dateFrom))
     {Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
     return;
    }
    this.emp09_contract.add(this.emp09).subscribe(
      (response: Employee09_Contract) => {

        this.getContracts();
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        this.viewMode = "tab09";
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        console.log(error);
      }
    );
   }



   public editEmployeeContract(employeeId,contractId){
    this.router.navigate(['employees/employee-contract-details',employeeId,contractId]);
   }

   public deleteEmployeeContract(contractId){
    Swal.fire({
      icon: 'info',
      title:  'Are you Sure want to Delete',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){

        this.emp09_contract.deleteContract(contractId).subscribe(
          (response) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
            this.getContracts();
            this.viewMode = "tab09";
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
          }
        );
      }


    })
  }
}
