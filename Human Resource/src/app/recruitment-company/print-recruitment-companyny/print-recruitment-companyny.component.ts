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
  selector: 'app-print-recruitment-companyny',
  templateUrl: './print-recruitment-companyny.component.html',
  styleUrls: ['./print-recruitment-companyny.component.scss']
})
export class PrintRecruitmentCompanynyComponent implements OnInit {

displayedColumns: string[] = [
  'companyName',
  'numberOfProvidedVisas',
  'country',
  'commercialRegister',
  'contactNumber',
  'ownerName',
  'focalPointName',
  'documents',

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


filterData($event: any){
  this.recruitmentCompanys.filter = $event.target.value;
}
printPage() {

  window.print();
}


}

