import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Contract } from '../Contract';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {


  displayedColumns: string[] = [
  'type',
  'durationofContract',
  'downpayment',
  'ContractNumber',
  'date',
  'description',
  'actions',
  ];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  Contracts!: MatTableDataSource<Contract>;

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
    this.getAllContract();
  }

 public getAllContract(): void {

  this.ContractService.getAllContract().subscribe((response) => {
    this.Contracts = new MatTableDataSource(response);
    this.Contracts.paginator =this.paginator;
    this.Contracts.sort = this.matSort;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
      }


ngAfterViewInit() {}

public onEditContractsById(ContractId: number): void {
  this.router.navigate(['/sales/Contract/edit-Contract', ContractId])
}
public onDeleteContractsById(ContractId: number):void{
  this.router.navigate(['/sales/Contract/delete-Contract',ContractId])
}
public onPrintContractById(ContractId: number):void{
  this.router.navigate(['/sales/Contract/print-Contract', ContractId])
}


filterData($event: any){
  this.Contracts.filter = $event.target.value;
}

}
