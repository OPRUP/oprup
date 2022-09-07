import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { Contract } from 'src/app/contract/Contract';
import { CustomerService } from 'src/app/customer/customer.service';
import { EmployeeService } from 'src/app/employees/employee.service';

import { ExtensionsService } from '../extensions.service';

@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.scss']
})
export class ExtensionsComponent implements OnInit {

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
      private ExtensionsService: ExtensionsService ,
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

    this.ExtensionsService.getAllContractExtension().subscribe((response) => {
      console.log('the getAllContract',response)
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
    this.router.navigate(['/sales/Contract-Extensions/edit-Extension', ContractId])
  }

  public onDeleteContractsById(ContractId: number):void{
    this.router.navigate(['/sales/Contract-Extensions/delete-Extension',ContractId])
  }
  public onPrintContractById(ContractId: number):void{
    this.router.navigate(['/sales/Contract-Extensions/print-Extension', ContractId])
  }


  filterData($event: any){
    this.Contracts.filter = $event.target.value;
  }

  }
