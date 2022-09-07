import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Visa } from '../visa';
import { VisaService } from '../visa.service';
import countries from '../../_files/countries.json';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-update-visa',
  templateUrl: './update-visa.component.html',
  styleUrls: ['./update-visa.component.scss'],
})
export class UpdateVisaComponent implements OnInit {
  form: FormGroup = new FormGroup({
    approvalNumber: new FormControl(''),
    numberOfProvidedVisas: new FormControl(''),
    jobs: new FormControl(''),
    nationality: new FormControl(''),
    gender: new FormControl(''),
    approvalDate: new FormControl(''),

  });
  displayedColumns: string[] = [
    'approvalNumber',
    'numberOfProvidedVisas',
    'jobs',
    'nationality',
    'gender',
    'approvalDate',
    'copy',
    'actions',
  ];
  visaInformationId!: number;
  visa;
  visas!: Visa[];

  countryList: { name: String; code: String }[] = countries;
  constructor(
    private service: VisaService,
    private fb: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getCompanies();
    this.form = this.fb.group(
      {

    // habitationId:['',[Validators.required]],
    approvalNumber:['',[Validators.required]],
    numberOfProvidedVisas:['',[Validators.required]],
    jobs: ['',[Validators.required]],
    nationality:['',[Validators.required]],
    gender: ['',[Validators.required]],
    approvalDate: ['',[Validators.required]],

      } );
  }

  goCompanyList() {
    this.router.navigate(['/international/visa/visa']);
  }
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public getCompanies() {
    this.visaInformationId = this.activateRoute.snapshot.params['id'];
    this.service.getById(this.visaInformationId).subscribe(
      (data) => {
        this.visa = data;
      },
      (error) => console.log(error)
    );
  }

  public getAll(): void {
    this.service.get().subscribe(
      (response: Visa[]) => {
        this.visas = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateCompany(visa: Visa): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.service.update(this.visa).subscribe(
      (data: Visa) => {
        Swal.fire(
          this.translate.instant('success'),
          this.translate.instant('DataisUpdated'),
          'success'
        );

        this.getAll();
        this.goCompanyList();
      },
      (error) => {
        Swal.fire(
          this.translate.instant('Error'),
          this.translate.instant('ErrorwhileupdatingData'),
          'error'
        );
        console.log(error);
      }
    );
  }
}


