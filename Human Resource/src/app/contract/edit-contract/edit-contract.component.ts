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
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.scss']
})
export class EditContractComponent implements OnInit {

  companies;
  customers;
  accounts;
  employees;
  datePipe: DatePipe = new DatePipe('en-US');
  date=new Date();
  currentDate;
  Contract;
  form: FormGroup = new FormGroup({
    durationofContract: new FormControl(''),
    downpayment: new FormControl(''),
    date: new FormControl(''),
    customerId: new FormControl(''),
    type: new FormControl(''),
  });
  max;
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


    this.form = this.fb.group({
      durationofContract: ['', Validators.required],
      downpayment: ['', Validators.required],
      date: ['', Validators.required],
      customerId: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  public getAllCustomers(): void {
    this.customerService.getAllCustomerTransfer().subscribe(
      (response: Customer[]) => {
        console.log('getAllCustomer', response);

        this.customers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  customerDetails;
  isLoggedIn = true;
  getCustomer(event) {
    this.customerService.getCustomerById(event).subscribe((data) => {
      this.customerDetails = data;
      this.isLoggedIn = false;
    });
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

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public onEditContract(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.ContractService.updateContract(this.Contract).subscribe(
      (response: Contract) => {
        console.log(response);
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
        this.goContractList();
      },
      (error: HttpErrorResponse) => {
        console.log(this.Contract);
        alert(error.message);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
      }
    );
  }
}
