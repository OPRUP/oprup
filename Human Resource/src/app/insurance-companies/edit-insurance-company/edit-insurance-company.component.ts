import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { InsuranceCompany } from '../insurance-company';
import { InsuranceCompanyService } from '../insurance-company.service';

@Component({
  selector: 'app-edit-insurance-company',
  templateUrl: './edit-insurance-company.component.html',
  styleUrls: ['./edit-insurance-company.component.scss']
})
export class EditInsuranceCompanyComponent implements OnInit {

  //public qualification: Qualification[] = [];
  id!: number;
  insuranceCompany!: InsuranceCompany;
  insuranceCompanies!: InsuranceCompany[];

  form: FormGroup = new FormGroup({
    insuranceCompanyName: new FormControl(''),
  });


  constructor(private insuranceCompanyService: InsuranceCompanyService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getInsuranceCompany();
    this.form = this.fb.group(
      {
        insuranceCompanyName:['', [Validators.required,Validators.minLength(3)]],

      }

    );

  }

  goInsuranceCompanyList(){
    this.router.navigate(['/insurance-companies/insurance-companies'])
  }

  public getInsuranceCompany(){
    this.id = this.activateRoute.snapshot.params['id'];
    this.insuranceCompanyService.getInsuranceCompanyById(this.id)
    .subscribe(data => {

      this.insuranceCompany = data;
    }, error => console.log(error));
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

  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }


  public onUpdateInsuranceCompany(insuranceCompany: InsuranceCompany): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

      this.insuranceCompanyService.updateInsuranceCompany(this.insuranceCompany).subscribe(
        (response: InsuranceCompany) => {

          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

          this.getAllInsuranceCompanies();
          this.goInsuranceCompanyList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        }
      );
    }
}
