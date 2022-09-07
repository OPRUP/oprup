import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertTriangle } from 'angular-feather/icons';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { ProjectEmdadat } from 'src/app/project-emdadat/project-emdadat';
import { ProjectEmdadateService } from 'src/app/project-emdadat/project-emdadate.service';
import Swal from 'sweetalert2';
import { SiteVisits } from '../site-visits';
import { siteVisitsService } from '../site-visits.service';

import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-create-site-visits',
  templateUrl: './create-site-visits.component.html',
  styleUrls: ['./create-site-visits.component.scss'],
})
export class CreateSiteVisitsComponent implements OnInit {
  startDate = new Date(2000, 0, 2);
  siteVisits!: SiteVisits[];
  siteVisitsData = {
    visitId: '',
    visitNumber: '',
    project: {
      projectId: '',
    },
    visitTime: '',
    visitDate: new Date(),
    customer: {
      customerId: '',
    },
    deleteFlag: 1,
  };
  customers;
  projects;
  form: FormGroup = new FormGroup({
    // visitNumValidate: new FormControl(''),
    projectId: new FormControl(''),
    visitTime: new FormControl(''),
    visitDate: new FormControl(''),
    customerId: new FormControl(''),
  });

  constructor(
    private siteVisitsService: siteVisitsService,
    public datepipe: DatePipe,
    
    private customerService: CustomerService,
    private projectService: ProjectEmdadateService,
    private router: Router,
    private translate: TranslateService,
    public fb: FormBuilder,

  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
    this.datepipe.transform(this.siteVisitsData.visitDate,'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.countCustomer();
    this.getAllCustomers();
    this.getAllProjects();
    this.form = this.fb.group(
      {
        // visitNumber:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        projectId:['',[Validators.required]],
        customerId: ['',[Validators.required]],
        visitTime: ['',[Validators.required]],
        visitDate: ['',[Validators.required]],
        //email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        // contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]],
        //contactNumber: ['',[Validators.required,Validators.pattern('(0|00962)?[7-9][0-9]{8}')]]
       // 1) Begins with 0 or 00962
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits


      }

    );
  }

  myFunction(){

    let latest_date =this.datepipe.transform(this.siteVisitsData.visitDate, 'dd-MM-yyyy');
   }


  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }
  goSiteVisitsList() {
    this.router.navigate(['/operation/site-visits/site-visits']);
  }

  public countCustomer(){
    this.siteVisitsService.countVisit().subscribe((data)=>{
      this.siteVisitsData.visitNumber=`${data+1}`


    })
  }


  public onAddSiteVisits(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
      this.siteVisitsService.addVisits(this.siteVisitsData).subscribe(
        (response: SiteVisits) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.siteVisitsService.getAllVisits();
          this.goSiteVisitsList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);

          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        }
      );

  }
  public getAllCustomers(): void {
    this.customerService.getAllCustomer().subscribe(
      (response: Customer[]) => {
        this.customers = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getAllProjects(): void {
    this.projectService.getAllProject().subscribe(
      (response: ProjectEmdadat[]) => {
        this.projects = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  aaa(x) {

  }
}
