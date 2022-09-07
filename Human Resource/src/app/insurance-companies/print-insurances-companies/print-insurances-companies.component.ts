import { InsuranceCompanyService } from './../insurance-company.service';
import { InsuranceCompaniesComponent } from './../insurance-companies/insurance-companies.component';
import { BankService } from './../../banks/bank.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';
import { InsuranceCompany } from '../insurance-company';

@Component({
  selector: 'app-print-insurances-companies',
  templateUrl: './print-insurances-companies.component.html',
  styleUrls: ['./print-insurances-companies.component.scss']
})
export class PrintInsurancesCompaniesComponent implements OnInit {
  ins;
  displayedColumns: string[] = [

    'insuranceCompanyId',
    'insuranceCompanyName',
    'description',
  ]
  paginator: any;
  matSort: any;
  constructor(private service: InsuranceCompanyService) { }

  ngOnInit(): void {
    this.getAllBanks();
  }
  public getAllBanks(): void {
    this.service.getInsuranceCompanies().subscribe(
      (response:InsuranceCompany[]) => {
      this.ins = new MatTableDataSource(response);
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }

  printPage() {

    window.print();
  }
}
