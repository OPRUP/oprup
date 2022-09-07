import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Bank } from 'src/app/banks/bank';
import { BankService } from 'src/app/banks/bank.service';
import Swal from 'sweetalert2';
import { Employee, Employee08_BankAccount } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee08_BankAccountService } from '../Employee08_BankAccount.service';

@Component({
  selector: 'app-create-employee08-bank-account',
  templateUrl: './create-employee08-bank-account.component.html',
  styleUrls: ['./create-employee08-bank-account.component.scss']
})
export class CreateEmployee08BankAccountComponent implements OnInit {
  viewMode;
  snackBar: any;
  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  empBanks;
  bank!: Bank[];
  emp08 = {
    empBankId: '',
    bankBranch: '',
    accountNumber: '',
    accountType: '',
    iban: '',
    swiftCode: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    },
    bank:{
      bankId:'',
    }
  };


  form: FormGroup = new FormGroup({

    bankBranch:new FormControl(''),
    bankId:new FormControl(''),
    accountNumber: new FormControl(''),
    accountType: new FormControl(''),
    iban: new FormControl(''),
    swiftCode: new FormControl(''),
  });



  //constructor() { }
  constructor( private employeeService: EmployeeService,
    private emp08_bank: Employee08_BankAccountService,
    private bankService: BankService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private activateRoute: ActivatedRoute,
    public translate: TranslateService){
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    }
  ngOnInit(): void {
    this.viewMode = "tab08";
    this.getEmployee();
   this.getBank();
   this.getEmpBank()


    this.form = this.fb.group(
      {
        bankBranch:['', Validators.required],
        bankId:['', Validators.required],
        accountNumber:['', Validators.required],
        accountType: ['', Validators.required],
        iban:['', Validators.required],
        swiftCode:['', Validators.required],

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
  public getBank(): void{
    this.bankService.getBanks().subscribe(
      (response:Bank[]) => {
      this.bank = response;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  public onAddBank(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    document.getElementById('add-Bank-form')?.click();


    this.emp08_bank.add(this.emp08).subscribe(
      (response: Employee08_BankAccount) => {

        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        this.getEmpBank();

        // this.emp08.bank.bankId= '';
        // this.emp08.bankBranch= '';
        // this.emp08.accountType= '';
        // this.emp08.accountNumber= '';
        // this.emp08.iban= '';
        // this.emp08.swiftCode= '';
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        console.log(error);
      }
    );

  }

   public getEmpBank(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp08_bank.getBankByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.empBanks = response;

      },
    )
  }

  public deleteEmployeeBank(bankId){
    Swal.fire({
      icon: 'info',
      title:  'هل انت متاكد من حذف السجل',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){

        this.emp08_bank.deleteBank(bankId).subscribe(
          (response) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
            this.getEmpBank();
            this.viewMode = "tab08";
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
          }
        );
      }

      
    })
  }
}
