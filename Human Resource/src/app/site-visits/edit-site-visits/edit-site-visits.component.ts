import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { ProjectEmdadat } from 'src/app/project-emdadat/project-emdadat';
import { ProjectEmdadateService } from 'src/app/project-emdadat/project-emdadate.service';
import Swal from 'sweetalert2';
import { SiteVisits } from '../site-visits';
import { siteVisitsService } from '../site-visits.service';

@Component({
  selector: 'app-edit-site-visits',
  templateUrl: './edit-site-visits.component.html',
  styleUrls: ['./edit-site-visits.component.scss'],
})
export class EditSiteVisitsComponent implements OnInit {
  visitId!: number;
  siteVisits;
  customers;
  projects;
  form: FormGroup = new FormGroup({
    visitNum: new FormControl(''),
    projectId: new FormControl(''),
    visitTime: new FormControl(''),
    visitDate: new FormControl(''),
    customerId: new FormControl(''),
  });



  constructor(
    private siteVisitsService: siteVisitsService,
    private customerService: CustomerService,
    private projectService: ProjectEmdadateService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    public fb: FormBuilder,
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    this.getVisits();
    this.getAllCustomers();
    this.getAllProjects();
    this.form = this.fb.group(
      {
        visitNumber:['', Validators.required],
        projectId:['',Validators.required],
        customerId: ['',Validators.required],
        visitTime: ['',Validators.required],
        visitDate: ['',Validators.required],
        //email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        // contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]],
        //contactNumber: ['',[Validators.required,Validators.pattern('(0|00962)?[7-9][0-9]{8}')]]
       // 1) Begins with 0 or 00962
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits


      }

    );


  }
  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }
  goVisitList() {
    this.router.navigate(['/operation/site-visits/site-visits/']);
  }

  public getVisits() {
    this.visitId = this.activateRoute.snapshot.params['id'];
    this.siteVisitsService.getVisitById(this.visitId).subscribe(
      (data) => {
        this.siteVisits = data;
        console.log("aaaa",this.siteVisits);
      },
      (error) => console.log(error)
    );
  }

  public onUpdateVisits(visits): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


      this.siteVisitsService.updateVisits(this.siteVisits).subscribe(
        (response) => {
          console.log(response);
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

        this.goVisitList();



        },
        (error: HttpErrorResponse) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        }
      );

  }
  public getAllCustomers(): void {
    this.customerService.getAllCustomer().subscribe(
      (response: Customer[]) => {
        this.customers = response;

        console.log(this.customers);
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
        console.log(this.projects);
      },
      (error: HttpErrorResponse) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
      }
    );
  }
}
