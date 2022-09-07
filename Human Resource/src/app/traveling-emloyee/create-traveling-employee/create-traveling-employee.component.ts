import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { RoomsTaskeenService } from 'src/app/RoomsTaskeen/RoomsTaskeen.service';
import { TaskeenService } from 'src/app/Taskeen/Taskeen.service';
import { Vendor } from 'src/app/vendor/Vendor';
import { VendorserviceService } from 'src/app/vendor/vendorservice.service';
import Swal from 'sweetalert2';
import { ServiceTravelingEmployeeService } from '../service-traveling-employee.service';
import { travelingEmployee } from '../travelingEmployee';

@Component({
  selector: 'app-create-traveling-employee',
  templateUrl: './create-traveling-employee.component.html',
  styleUrls: ['./create-traveling-employee.component.scss']
})
export class CreateTravelingEmployeeComponent implements OnInit {
  Taskeen;
  RoomsTaskeen;
  form: FormGroup = new FormGroup({
    habitationId: new FormControl(''),
    roomId: new FormControl(''),
    travilinDate: new FormControl(''),
    backDate: new FormControl(''),
    employeeId: new FormControl(''),
  });



  travelingEmployees!: travelingEmployee[];
  travelingEmployeeData = {
    travelingEmployeeId:'',
    travilinDate: '',
    backDate: '',
    employee:{
      employeeId:'',
  },
  habitation: {
    habitationId: '' },

    room :{
      roomId:''},

   deleteFlag: 1,
 };
 employees!: Employee[];
  constructor(private travelingEmployeeService:ServiceTravelingEmployeeService ,
    private taskeenService: TaskeenService,
    private roomsTaskeenService: RoomsTaskeenService,
    private employeeService: EmployeeService,
     private router: Router,
     public fb: FormBuilder, // Form Builder service for Reactive forms

      private translate: TranslateService){

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {
    this.getEmployee();
    this.getAllRoomsTaskeen();
    this.getAllTaskeen();
    this.form = this.fb.group(
      {

    habitationId:['',Validators.required],
    roomId: ['',Validators.required],
    travilinDate: ['',Validators.required],
    backDate:['',Validators.required],
    employeeId:['',Validators.required],

      } ); }

      public getAllTaskeen(): void {

        this.taskeenService.getAllTaskeen().subscribe((response) => {
          this.Taskeen = response;

          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
          );

      }
      public getAllRoomsTaskeen(): void {

        this.roomsTaskeenService.getAllRoomsTaskeen().subscribe((response) => {
          this.RoomsTaskeen = response;

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

   goTravelingEmployeeList(){
     this.router.navigate(['/operation/TravelingEmloyee/TravelingEmloyee'])
   }
   public onAddTravelingEmployee(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(new Date(this.travelingEmployeeData.backDate)<=new Date(this.travelingEmployeeData.travilinDate))
      {Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
  return;
     }

     this.travelingEmployeeService.addTravelingEmployee(this.travelingEmployeeData).subscribe(
       (response: travelingEmployee) => {

         Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
         this.travelingEmployeeService.getAllTravelingEmployee();
         this.goTravelingEmployeeList();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
       }
     );
      }


      public getEmployee(): void{
        this.employeeService.get().subscribe((response:Employee[]) => {
          this.employees = response;
        
        },
        (error: HttpErrorResponse) => {
              alert(error.message);
            }
        )
      }


   }

