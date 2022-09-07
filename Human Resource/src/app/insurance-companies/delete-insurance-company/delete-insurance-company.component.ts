import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { InsuranceCompany } from '../insurance-company';
import { InsuranceCompanyService } from '../insurance-company.service';

@Component({
  selector: 'app-delete-insurance-company',
  templateUrl: './delete-insurance-company.component.html',
  styleUrls: ['./delete-insurance-company.component.css']
})
export class DeleteInsuranceCompanyComponent implements OnInit {

  insuranceCompanyId!: number;
  insuranceCompany!: InsuranceCompany;
  insuranceCompanies!: InsuranceCompany[];


  constructor(private insuranceCompanyService: InsuranceCompanyService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getInsuranceCompany();
  }

  public getInsuranceCompany(){
    this.insuranceCompanyId = this.activateRoute.snapshot.params['id'];
    this.insuranceCompanyService.getInsuranceCompanyById(this.insuranceCompanyId)
    .subscribe(data => {

      this.insuranceCompany = data;
    }, error => console.log(error));
  }


  public onDeleteInsuranceCompany(insuranceCompany: InsuranceCompany){
    this.insuranceCompanyService.deleteInsuranceCompany(insuranceCompany).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goInsuranceCompanyList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }

  public getAllInsuranceCompanies(): void {
    this.insuranceCompanyService.getInsuranceCompanies().subscribe(
      (response: InsuranceCompany[]) => {
        this.insuranceCompanies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goInsuranceCompanyList(){
    this.router.navigate(['/insurance-companies/insurance-companies'])
  }


}
