import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Contract } from '../Contract';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-delete-contract',
  templateUrl: './delete-contract.component.html',
  styleUrls: ['./delete-contract.component.scss']
})
export class DeleteContractComponent implements OnInit {

  companies;
  customers;
  accounts;
  employees;
  datePipe: DatePipe = new DatePipe('en-US');
  date=new Date();
  currentDate;
  Contract;


  ContractId: any;
  constructor(
    private ContractService: ContractService,
    private employeeService: EmployeeService,
    private customerService: CustomerService,
    private coaService: CoaService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    public fb: FormBuilder
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {

    this.getAllCustomers();
    this.getContract();


  }

  public getAllCustomers(): void {
    this.customerService.getAllCustomer().subscribe(
      (response: Customer[]) => {
        console.log('getAllCustomer', response);

        this.customers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goContractList() {
    this.router.navigate(['/sales/Contract/Contract']);
  }

  public getContract(){
    this.ContractId= this.activateRoute.snapshot.params['id'];
   this.ContractService.getContractById(this.ContractId)
   .subscribe(data => {
     this.Contract = data;
     console.log(data)
   }, error => console.log(error));


   }

  public onDeleteContract(): void {


    this.ContractService.deleteContract(this.Contract).subscribe(
      (response: Contract) => {
        console.log(response);

        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

        this.goContractList();
      },
      (error: HttpErrorResponse) => {
        console.log(this.Contract);
        alert(error.message);

        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
      }
    );
  }
}
