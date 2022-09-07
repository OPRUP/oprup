import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoaService } from 'src/app/coa/coa.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { ProjectEmdadat } from '../project-emdadat';
import { ProjectEmdadateService } from '../project-emdadate.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  projectId!: number;
  project;
  projects!:ProjectEmdadat[]
  employees!: Employee[];
  accounts;
  customers;



  form: FormGroup = new FormGroup({
    accountId: new FormControl(''),
    customerId:new FormControl(''),
    // projectNumber:new FormControl(''),
    projectCode: new FormControl(''),
    projectName: new FormControl(''),
    projectValue:new FormControl(''),
    workingTime:new FormControl(''),
    projectAddress: new FormControl(''),
    projectDuration:new FormControl(''),
    employeeNumber:new FormControl(''),
    expectedExpense: new FormControl(''),
    employeeId:new FormControl(''),
    startingDate:new FormControl(''),
    endingDate: new FormControl(''),
  });

  constructor( private projectEmdadateService: ProjectEmdadateService,
     private employeeService: EmployeeService,
     private coaService:CoaService,
     private customerService:CustomerService ,
     public fb: FormBuilder, // Form Builder service for Reactive forms
     private router: Router,
      private activateRoute: ActivatedRoute,
      private translate: TranslateService ) {
        this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
       }

  ngOnInit() {
    this.getEmployees();
    this.getProject();


this.getTree();
this.getAllCustomers();

    this.form = this.fb.group(
      {
        accountId: ['', Validators.required],
        customerId:['', Validators.required],
        // projectNumber:['', Validators.required],
        projectCode: ['', Validators.required],
        projectName: ['', Validators.required],
        projectValue:['', Validators.required],
        workingTime:['', Validators.required],
        projectAddress: ['', Validators.required],
        projectDuration:['', Validators.required],
        employeeNumber:['', Validators.required],
        expectedExpense: ['', Validators.required],
        employeeId:['', Validators.required],
        startingDate:['', Validators.required],
        endingDate: ['', Validators.required],
        // companyName:['', Validators.required],
        // dateStart:['',Validators.required],
        // dateEnding: ['',Validators.required],
        // commercialId: ['',Validators.required],
        // licenseId: ['',Validators.required],


      });
  }


  public getAllCustomers(): void {

    this.customerService.getAllCustomer().subscribe((response:Customer[]) => {


      this.customers = response;


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }

  public getTree(){
    this.coaService.getAccountByType('sub').subscribe((response) => {
    this.accounts = response;

    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
    )
    }
    isLoggedIn=true;

  goProjectsList(){
    this.router.navigate(['/operation/project-emdadat/project-view'])
    }

  public getProject(){
    this.projectId = this.activateRoute.snapshot.params['id'];
    this.projectEmdadateService.getProjectById(this.projectId)
    .subscribe(data => {

      this.project = data;
    }, error => console.log(error));
  }

  public getEmployees(): void{
    this.employeeService.get().subscribe(
      (data:Employee[]) => {
      this.employees = data;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);

        }
    )
  }
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }






  public onUpdateProject() {
    this.submitted = true;
  if (this.form.invalid) {
    return;
  }

      if(new Date(this.project.endingDate)<=new Date(this.project.startingDate))
       {Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
            return;
            }
      this.projectEmdadateService.updateProject(this.project).subscribe(
        (data) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

          // this.getProject();
          this.goProjectsList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')

       
        }
      );
    }

}
