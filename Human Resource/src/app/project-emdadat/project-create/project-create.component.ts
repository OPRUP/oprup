import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Coa } from 'src/app/coa/coa';
import { CoaService } from 'src/app/coa/coa.service';
import { CompaniesService } from 'src/app/companies/companies.service';
import { Customer } from 'src/app/customer/Customer';
import { CustomerService } from 'src/app/customer/customer.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { ProjectEmdadat } from '../project-emdadat';
import { ProjectEmdadateService } from '../project-emdadate.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    accountCode: new FormControl(''),
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

  proemdatat;
  projectEmdadat = {
   projectId:'',
    projectCode: '',
    projectName: '',
    projectValue: '',
    projectAddress: '',
    projectDuration: '',
    startingDate: '',
    endingDate: '',
    projectNumber: '',

    workingTime: '',
    employeeNumber: '',
    projectDescription: '',
    expectedExpense: '',
    deleteFlag: 1,
    employees:{
      employeeId: '',
    },
    customer:{
      customerId: '',
      customerName:'',
      // email: '',
      // contactNumber: '',
      // nationality: '',
      // designation: '',
      // contractSignerNameEn: '',
      // contractSignerNameAr: '',
      // countryEn: '',
      // countryAr: '',
      // nameEn: '',
      // nameAr: '',
      // customerName: '',
      // customerAccountNumber: '',
      // numberCR: '',
      // date: '',
      // customerStatus: '',
      // followerNameAr: '',
      // followerNameEn: '',
      // followerContactNumber: '',
      // followerEmailAdrress: '',
      // contactPerson: '',
      },

    chartAccounts:{
      accountId:''
    }
  }
  accounts;
  employees;
  customers;
  projects!: ProjectEmdadat[];

  constructor(  private projectEmdadatService: ProjectEmdadateService ,
    private employeeService: EmployeeService,
    private customerService:CustomerService ,
    private coaService:CoaService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router,
    private activateRoute: ActivatedRoute,
     private translate: TranslateService
     )
{
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
 }
 public getAllEmployee(): void{
  this.employeeService.get().subscribe((response:Employee[]) => {
  this.employees = response;

  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  }
  )
  }

ngOnInit()
{

this.getAllEmployee();
this.getTree();
this.getAllCustomers();
this.count();
this.form = this.fb.group(
  {
    parentAccount: ['', Validators.required],
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
      submitted = false;
      get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
      }


goProjectsList(){
this.router.navigate(['/operation/project-emdadat/project-view'])
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


  public count(){
    this.projectEmdadatService.countProject().subscribe((data)=>{
      this.projectEmdadat.projectNumber=`CR000${data+1}`

    })
  }





public onAddProject(): void {
  this.submitted = true;
  if (this.form.invalid) {
    return;
  }
//  if(this.projectEmdadat.projectName.trim() == '' || this.projectEmdadat.projectName == null){
// Swal.fire('Warning', 'project Name is Required', 'warning')
// }
// else if(this.projectEmdadat.projectValue.trim() == '' || this.projectEmdadat.projectValue == null){
// Swal.fire('Warning', 'project Value is Required', 'warning')
// }
// else if(this.projectEmdadat.projectAddress.trim() == '' || this.projectEmdadat.projectAddress == null){
// Swal.fire('Warning', 'project Address is Required', 'warning')
// }
// else if(this.projectEmdadat.projectCode.trim() == '' || this.projectEmdadat.projectCode == null){
// Swal.fire('Warning', 'project Code is Required', 'warning')
// }
// else if(this.projectEmdadat.startingDate == '' || this.projectEmdadat.startingDate == null){
// Swal.fire('Warning', 'starting Date is Required', 'warning')
// }
// else if(this.projectEmdadat.endingDate == '' || this.projectEmdadat.endingDate == null){
// Swal.fire('Warning', 'ending Date is Required', 'warning')
// }
// else if(this.projectEmdadat.employeeNumber.trim() == '' || this.projectEmdadat.employeeNumber == null){
// Swal.fire('Warning', 'number of employee is Required', 'warning')
// }
// else if(this.projectEmdadat.expectedExpense.trim() == '' || this.projectEmdadat.expectedExpense == null){
// Swal.fire('Warning', 'expected Expense is Required', 'warning')
// }
// else if(this.projectEmdadat.projectDuration.trim() == '' || this.projectEmdadat.projectDuration == null){
// Swal.fire('Warning', 'project Duration is Required', 'warning')
// }
// else if(this.projectEmdadat.workingTime.trim() == '' || this.projectEmdadat.workingTime == null){
// Swal.fire('Warning', 'working Time is Required', 'warning')
// }
// else{
  if(new Date(this.projectEmdadat.endingDate)<=new Date(this.projectEmdadat.startingDate))
    {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
return;
   }
  document.getElementById('add-project-form')?.click();

this.projectEmdadatService.addProject(this.projectEmdadat).subscribe(

  (response: ProjectEmdadat) => {
    Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
    this.getAllProjects();
    this.goProjectsList();
  },
(error: HttpErrorResponse) => {
  Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

}
);

}

isLoggedIn=true;
customerDetails;

    getCustomer(event){

      this.customerService.getCustomerById(event).subscribe((data)=>{
        this.customerDetails=data;
        this.projectEmdadat.customer.customerId= this.customerDetails.customerId
       this.isLoggedIn=false;


      })
    }




public getAllProjects(): void{
  this.projectEmdadatService.getAllProject().subscribe(
    (response:ProjectEmdadat[]) => {
    this.projects = response;

  },
  (error: HttpErrorResponse) => {
        alert(error.message);
      }
  )
}

};






