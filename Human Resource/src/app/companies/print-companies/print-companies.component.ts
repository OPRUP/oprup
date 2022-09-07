import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Companies } from '../companies';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-print-companies',
  templateUrl: './print-companies.component.html',
  styleUrls: ['./print-companies.component.scss']
})
export class PrintCompaniesComponent implements OnInit {
  displayedColumns: string[] = [
    // 'companylId',
    'companyName',
    'companyPrefix',
    'commercialId',
    'partners',
  ];
  companies!: MatTableDataSource<Companies>;


  constructor(private companiesService: CompaniesService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCompanies();
  }



  public getAllCompanies(): void {

    this.companiesService.get().subscribe((response:Companies[]) => {
      this.companies = new MatTableDataSource(response);

      },
      (error)  =>
      {
        console.log(error);
      }
      );
  }
  printPage() {

    window.print();
  }
}
