import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RecruitmentCompanynyService } from '../recruitment-companyny.service';
import { RecruitmentCompany } from '../RecruitmentCompany';

@Component({
  selector: 'app-recruitment-company',
  templateUrl: './recruitment-company.component.html',
  styleUrls: ['./recruitment-company.component.scss']
})
export class RecruitmentCompanyComponent implements OnInit {
  //private Long recruitmentCompanyId;

  displayedColumns: string[] = [
    'companyName',
    'numberOfProvidedVisas',
    'country',
    'commercialRegister',
    'contactNumber',
    'ownerName',
    'focalPointName',
    'documents',
    'actions',
  ];


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  recruitmentCompanys!: MatTableDataSource<RecruitmentCompany>;

  constructor(private recruitmentCompanyService:RecruitmentCompanynyService ,
     private router: Router ,
      private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllRecruitmentCompany();
  }


 public getAllRecruitmentCompany(): void {

    this.recruitmentCompanyService.getAllRecruitmentCompany().subscribe((response:RecruitmentCompany[]) => {
      this.recruitmentCompanys = new MatTableDataSource(response);
      this.recruitmentCompanys.paginator =this.paginator;
      this.recruitmentCompanys.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }


  ngAfterViewInit() {}

  public onEditRecruitmentCompanyIdById(recruitmentCompanyId: number): void {
    this.router.navigate(['/international/recruitmentcompany/edit-recruitmentcompany', recruitmentCompanyId])
  }

  public onDeleteRecruitmentCompanyById(recruitmentCompanyId: number):void{
    this.router.navigate(['/international/recruitmentcompany/delete-recruitmentcompany', recruitmentCompanyId])
  }

  filterData($event: any){
    this.recruitmentCompanys.filter = $event.target.value;
  }


}

