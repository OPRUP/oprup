import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { ContractService } from 'src/app/contract/contract.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Contract } from '../extension';
import { ExtensionsService } from '../extensions.service';

@Component({
  selector: 'app-delete-extension',
  templateUrl: './delete-extension.component.html',
  styleUrls: ['./delete-extension.component.scss']
})
export class DeleteExtensionComponent implements OnInit {

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
    private ExtensionsService: ExtensionsService,
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
   this.ExtensionsService.getcontractExtensionById(this.ContractId)
   .subscribe(data => {
     this.Contract = data;
     console.log(data)
   }, error => console.log(error));


   }

  public onDeleteContract(): void {


    this.ExtensionsService.deleteContract(this.Contract).subscribe(
      (response: Contract) => {
        console.log(response);
        Swal.fire('Success', 'Contract  is Delete', 'success');

        this.goContractList();
      },
      (error: HttpErrorResponse) => {
        console.log(this.Contract);
        alert(error.message);
        Swal.fire('Error!! ', 'Error while Delete Contract ', 'error');
      }
    );
  }
}
