import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CentralJob } from 'src/app/central-jobs/central-job';
import Swal from 'sweetalert2';
import { Companies } from '../companies';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.scss']
})
export class DeleteCompanyComponent implements OnInit {
  companyId!: number;
  company!: Companies;
  companies!: Companies[];
  companyData = {
    companyId: '',
    companyName: '',
    companyPrefix:'',
    commercialId:  '',
    dateStart:  '',
    dateEnding:  '',
    licenseId:  '',
    partners:  '',
    deleteFlag: 1,

  };
  constructor(private companyService: CompaniesService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getCompany();
    this.getAllCompanies();
  }

  public getCompany(){
    this.companyId = this.activateRoute.snapshot.params['id'];
    this.companyService.getById(this.companyId)
    .subscribe(data => {

      this.company = data;
    }, error => console.log(error));
  }

  public onDeleteCentralJob(company: Companies){
    this.companyService.delete(company).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goCompaniesList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }



  public getAllCompanies(): void {
    this.companyService.get().subscribe(
      (data: Companies[]) => {
        this.companies = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goCompaniesList(){
    this.router.navigate(['/companies/companies'])
  }


}
