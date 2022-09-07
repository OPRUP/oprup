import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Transportation } from '../Transportation';
import { TransportationService } from '../Transportation.service';

@Component({
  selector: 'app-Transportation_edit',
  templateUrl: './Transportation_edit.component.html',
  styleUrls: ['./Transportation_edit.component.scss']
})
export class Transportation_editComponent implements OnInit {
  employees!: Employee[];
  form: FormGroup = new FormGroup({
    transportationMeanCode: new FormControl(''),
    transportationMeanType:new FormControl(''),
    transportationMeanNumber: new FormControl(''),
    transportationMeanBuyingDate: new FormControl(''),
    licenseReleaseDate:new FormControl(''),
    licenseExpiryDate:new FormControl(''),
    employeeId: new FormControl(''),


  });
  transportationMeanId!: number;
  transportation;
  transportations!:Transportation[]

  constructor( private transportationService: TransportationService,
    private employeeService: EmployeeService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
     private activateRoute: ActivatedRoute,
     private translate: TranslateService ) {
       this.translate.setDefaultLang('ar');
   const lang = localStorage.getItem('lang')  || 'ar';
   this.translate.use(lang);
   document.documentElement.lang = lang;
      }

  ngOnInit() {
    this.getEmployees();
    this.getTransportation();
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
    public getTransportation(){
      this.transportationMeanId = this.activateRoute.snapshot.params['id'];
      this.transportationService.getTransportationById(this.transportationMeanId)
      .subscribe(data => {

        this.transportation = data;
      }, error => console.log(error));
    }
    public getEmployees(): void{
      this.employeeService.get().subscribe(
        (data:Employee[]) => {
        this.employees = data;

      },
      (error: HttpErrorResponse) => {
            alert(error.message);
            //Swal.fire(error.message);
          }
      )
    }
    public onUpdateTransportation(transportationMeanId) : void{
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      if(new Date(this.transportation.licenseExpiryDate)<=new Date(this.transportation.licenseReleaseDate))
      { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
  return;
     }
        this.transportationService.updateTransportation(this.transportation).subscribe(
          (data) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
            // this.getProject();
            this.goTransportationsList();

          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
            console.log(error);
          }
        );

   }

}
