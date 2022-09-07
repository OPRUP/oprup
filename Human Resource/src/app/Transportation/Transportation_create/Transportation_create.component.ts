import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Transportation } from '../Transportation';
import { TransportationService } from '../Transportation.service';

@Component({
  selector: 'app-Transportation_create',
  templateUrl: './Transportation_create.component.html',
  styleUrls: ['./Transportation_create.component.scss']
})
export class Transportation_createComponent implements OnInit {

  transportation;
  form: FormGroup = new FormGroup({
    transportationMeanCode: new FormControl(''),
    transportationMeanType:new FormControl(''),
    transportationMeanNumber: new FormControl(''),
    transportationMeanBuyingDate: new FormControl(''),
    licenseReleaseDate:new FormControl(''),
    licenseExpiryDate:new FormControl(''),
    employeeId: new FormControl(''),


  });
  transportationEmdadat = {
    transportationMeanId:'',
    transportationMeanCode: '',
    transportationMeanType: '',
    transportationMeanNumber: '',
    transportationMeanBuyingDate: '',
    licenseReleaseDate: '',
    licenseExpiryDate: '',
    licensePhoto: '',
    deleteFlag: 1,
    employees:{
      employeeId: '',
      employeeName: '',
    }
  }
  employees;
  transportations!: Transportation[];

  constructor(private transportationService: TransportationService, private employeeService: EmployeeService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public fb: FormBuilder, // Form Builder service for Reactive forms
     private translate: TranslateService
    ) {
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

  ngOnInit() {
    this.getAllEmployee();
    this.form = this.fb.group(
      {
        transportationMeanCode:['', Validators.required],
        transportationMeanType:['',Validators.required],
        transportationMeanNumber: ['',Validators.required],
        transportationMeanBuyingDate: ['',Validators.required],
        licenseReleaseDate: ['',Validators.required],
        licenseExpiryDate:['',Validators.required],
        employeeId: ['',Validators.required],


      });
  }
  goTransportationsList(){
    this.router.navigate(['/operation/Transportation/Transportation'])
    }
    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onAddTransportation(): void {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }

      if(new Date(this.transportationEmdadat.licenseExpiryDate)<=new Date(this.transportationEmdadat.licenseReleaseDate))
      { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
  return;
     }


        document.getElementById('add-trasnportation-form')?.click();
      this.transportationService.addTransportation(this.transportationEmdadat).subscribe(

        (response: Transportation) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.getAllTransportations();
          this.goTransportationsList();
        },
      (error: HttpErrorResponse) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
      );


      }
      public getAllTransportations(): void{
        this.transportationService.getAllTransportation().subscribe(
          (response:Transportation[]) => {
          this.transportations = response;
        
        },
        (error: HttpErrorResponse) => {
              alert(error.message);
            }
        )
      }

}
