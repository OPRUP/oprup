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
  selector: 'app-print-contract',
  templateUrl: './print-contract.component.html',
  styleUrls: ['./print-contract.component.scss']
})
export class PrintContractComponent implements OnInit {
  ContractId;
  Contractt;
  displayedColumns: string[] = [
   

    'itemCode',

    'itemNameAr',
    'nationality',
    'gender',
    'foodAllowance',
    'housingAllowance',
    'otherAllowance',

    'profession',
    'salary',
    'employeeNumber',
    'contractItemValue',
    'contractItemTotalValue',
    'taxRate',

    ];

    @ViewChild('paginator') paginator!: MatPaginator;
    @ViewChild(MatSort) matSort!: MatSort;
    Contracts;

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
      this.getAllContractItem();
    }

   public getAllContract(): void {
    this.ContractId= this.activateRoute.snapshot.params['id'];
    this.ContractService.getContractById(this.ContractId).subscribe((response) => {
      this.Contracts = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }
        public getAllContractItem(): void {
          this.ContractId= this.activateRoute.snapshot.params['id'];
          this.ContractService.getContractitemById(this.ContractId).subscribe((response) => {
            this.Contractt = response;

            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
            );
              }


  ngAfterViewInit() {}



  filterData($event: any){
    this.Contracts.filter = $event.target.value;
  }
  printPage() {

    window.print();
  }

  }
