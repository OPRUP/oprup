import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Employee, Employee05_Address } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee05_AddressService } from '../Employee05_Address.service';

@Component({
  selector: 'app-create-employee05-address',
  templateUrl: './create-employee05-address.component.html',
  styleUrls: ['./create-employee05-address.component.scss']
})
export class CreateEmployee05AddressComponent implements OnInit {
  [x: string]: any;
  viewMode;
  snackBar: any;
  addresses;
  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  emp05 = {
    addressId: '',
    email: '',
    countryAddress: '',
    countryContactNumber: '',
    residenceAddress: '',
    residenceContactNumber: '',
    email2:'',
    number:'',
    number2:'',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    }
  };

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    email2: new FormControl(''),
    number: new FormControl(''),
    number2: new FormControl(''),
    countryAddress: new FormControl(''),
    countryContactNumber: new FormControl(''),
    residenceAddress: new FormControl(''),
    residenceContactNumber: new FormControl(''),
  });



  //constructor() { }
  constructor( private employeeService: EmployeeService,
    private emp05_address: Employee05_AddressService,
    private addressService: Employee05_AddressService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router, private activateRoute: ActivatedRoute, public translate: TranslateService){
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    }
  ngOnInit(): void {
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.viewMode = "tab05";
    this.getEmployee();
    this.getAddresses();


    this.form = this.fb.group(
      {

        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        email2: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        number: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]],
        number2: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]],
        countryAddress: ['', Validators.required],
        countryContactNumber: ['', Validators.required],
        residenceAddress: ['', Validators.required],
        residenceContactNumber: ['', Validators.required],
      }

    );

  }
  public getEmployee(): void{
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId)
    .subscribe(data => {
      this.employee = data;

    }, error => console.log(error));
  }
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddAddress(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
      document.getElementById('add-Address-form')?.click();
    this.emp05_address.add(this.emp05).subscribe(
      (response: Employee05_Address) => {
          this.emp05.email= '';
          this.emp05.email2= '';
          this.emp05.number= '';
          this.emp05.number2= '';
          this.emp05.countryAddress= '';
          this.emp05.countryContactNumber= '';
          this.emp05.residenceAddress= '';
          this.emp05.residenceContactNumber= '';
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        this.viewMode = "tab05";
        this.getAddresses();
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
    );
   }

   public getAddresses(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.addressService.getAddressesByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.addresses = response;
     
      },
    )
  }

  public deleteEmployeeAddress(addressId){
    Swal.fire({
      icon: 'info',
      title:  'هل انت متاكد من حذف السجل',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){

        this.addressService.deleteAddress(addressId).subscribe(
          (response) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
            this.getAddresses();
            this.viewMode = "tab05";
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

          }
        );
      }


    })
  }

}
