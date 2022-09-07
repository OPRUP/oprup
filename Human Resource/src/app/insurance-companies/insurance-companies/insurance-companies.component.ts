import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { InsuranceCompany } from '../insurance-company';
import { InsuranceCompanyService } from '../insurance-company.service';

@Component({
  selector: 'app-insurance-companies',
  templateUrl: './insurance-companies.component.html',
  styleUrls: ['./insurance-companies.component.scss']
})
export class InsuranceCompaniesComponent implements OnInit {

  displayedColumns: string[] = [
    // 'insuranceCompanyId',
    'insuranceCompanyName',
    'description',
    // 'deleteFlage',
    'actions',
  ];
  insuranceCompanies!: MatTableDataSource<InsuranceCompany>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private insuranceCompanyService: InsuranceCompanyService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllInsuranceCompanies();
   // this.getCurrentBanks();
  }



  public getAllInsuranceCompanies(): void {

    this.insuranceCompanyService.getInsuranceCompanies().subscribe((response:InsuranceCompany[]) => {
      this.insuranceCompanies = new MatTableDataSource(response);
      this.insuranceCompanies.paginator =this.paginator;
      this.insuranceCompanies.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
      // let resp = this.bankService.getBanks();
      // resp.subscribe(report => this.dataSource.data=report as Bank[]);

    //   (response: Bank[]) => {
    //     this.banks = response;

    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );


  }


  ngAfterViewInit() {}



  public onEditInsuranceCompanyById(insuranceCompanyId: number): void {
    this.router.navigate(['/insurance-companies/edit-insurance-company', insuranceCompanyId])
  }


  public onEditToDeleteInsuranceCompanyById(insuranceCompanyId: number):void{
    this.router.navigate(['/insurance-companies/delete-insurance-company', insuranceCompanyId])
  }

  filterData($event: any){
    this.insuranceCompanies.filter = $event.target.value;
  }

}
