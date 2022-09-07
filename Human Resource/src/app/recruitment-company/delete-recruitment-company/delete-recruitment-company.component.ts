import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { RecruitmentCompanynyService } from '../recruitment-companyny.service';
import { RecruitmentCompany } from '../RecruitmentCompany';

@Component({
  selector: 'app-delete-recruitment-company',
  templateUrl: './delete-recruitment-company.component.html',
  styleUrls: ['./delete-recruitment-company.component.scss']
})
export class DeleteRecruitmentCompanyComponent implements OnInit {

  recruitmentCompanynyId!:number;
  recruitmentCompanyny;
  recruitmentCompanynys!:RecruitmentCompany[];


  constructor(private recruitmentCompanyService:RecruitmentCompanynyService ,
    private router: Router ,
  private activateRoute: ActivatedRoute,
  private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }



  ngOnInit() {
  this.getRecruitmentCompany();

  }

  goRecruitmentCompanyList(){
  this.router.navigate(['/international/recruitmentcompany/recruitmentcompany/'])
  }

  public getRecruitmentCompany(){
   this.recruitmentCompanynyId= this.activateRoute.snapshot.params['id'];
  this.recruitmentCompanyService.getRecruitmentCompanyyId(this.recruitmentCompanynyId)
  .subscribe(data => {
    this.recruitmentCompanyny = data;

  }, error => console.log(error));


  }


  public onDeleteRecruitmentCompany(recruitmentCompanyny): void {

  this.recruitmentCompanyService.deleteRecruitmentCompany(this.recruitmentCompanyny).subscribe(
  (response) => {

    Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

  this.goRecruitmentCompanyList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
  }
  );
  }

  }



