import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Companies } from '../companies';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  displayedColumns: string[] = [

    'departmentName',
    'companyName',
    'companyPrefix',
    'commercialId',
    'dateStart',
    'dateEnding',
    'actions',
  ]
  companyId!: number;
  company;
  companies!: Companies[];

  form: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    companyPrefix: new FormControl(''),
    commercialId: new FormControl(''),
    dateStart: new FormControl(''),
    dateEnding: new FormControl(''),
    licenseId: new FormControl(''),
    partners: new FormControl(''),
  });


  constructor(private companiesService: CompaniesService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

    private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getCompanies();

    this.form = this.fb.group(
      {

        companyName: ['', Validators.required],
        companyPrefix: ['',Validators.required],
        commercialId: ['',Validators.required],
        dateStart: ['',Validators.required],
        dateEnding: ['',Validators.required],
        licenseId: ['',Validators.required],
        partners: ['',Validators.required],

           }

    );

  }

  goCompanyList(){
    this.router.navigate(['/companies/companies'])
  }

  public getCompanies(){
    this.companyId = this.activateRoute.snapshot.params['id'];
    this.companiesService.getById(this.companyId)
    .subscribe(data => {

      this.company = data;
    }, error => console.log(error));
  }

  public getAll(): void {
    this.companiesService.get().subscribe(
      (response: Companies[]) => {
        this.companies = response;
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

  public onUpdateCompany(company: Companies): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(new Date(this.company.dateEnding)<=new Date(this.company.dateStart))
    {  Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
return;
   }


      this.companiesService.update(this.company).subscribe(
        (data: Companies) => {

 Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
       

          this.getAll();
          this.goCompanyList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
          console.log(error);
        }
      );
    }




}
