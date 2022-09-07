import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Companies } from '../companies';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  displayedColumns: string[] = [
    // 'companylId',
    'companyName',
    'companyPrefix',
    'commercialId',
    'partners',
    'actions',
  ];
  companies//!: MatTableDataSource<Companies>;
  partners
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private companiesService: CompaniesService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCompanies();
    this.getAllCompanies2()
  }



data;
  public getAllCompanies2(): void {
    this.companiesService.get().subscribe((response) => {
      this.data=response;

      console.log('fffffff',this.data[0].partners)
      console.log('rrrrrrrrrrrr',)
    })

  }
  public getAllCompanies(): void {

    this.companiesService.get().subscribe((response:Companies[]) => {
      this.companies=response
      this.companies.forEach(element=>{
        element.partners=element.partners.split(',')
      })
      console.log(this.companies[0].partners);


      // this.companies = new MatTableDataSource(response);
      // this.companies.paginator =this.paginator;
      // this.companies.sort = this.matSort;




      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }
      );
  }


  ngAfterViewInit() {}



  public onEditCompanyById(id: number): void {
    this.router.navigate(['/companies/edit-company', id])
  }


  public onDeleteCompanyById(id: number):void{
    this.router.navigate(['/companies/delete-company', id])
  }

  filterData($event: any){
    this.companies.filter = $event.target.value;
  }


}
