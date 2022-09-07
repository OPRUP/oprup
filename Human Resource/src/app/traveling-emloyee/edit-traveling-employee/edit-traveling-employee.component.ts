import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { RoomsTaskeenService } from 'src/app/RoomsTaskeen/RoomsTaskeen.service';
import { TaskeenService } from 'src/app/Taskeen/Taskeen.service';
import Swal from 'sweetalert2';
import { ServiceTravelingEmployeeService } from '../service-traveling-employee.service';
import { travelingEmployee } from '../travelingEmployee';

@Component({
  selector: 'app-edit-traveling-employee',
  templateUrl: './edit-traveling-employee.component.html',
  styleUrls: ['./edit-traveling-employee.component.scss']
})
export class EditTravelingEmployeeComponent implements OnInit {

  Taskeen;
  RoomsTaskeen;
  form: FormGroup = new FormGroup({
    habitationId: new FormControl(''),
    roomId: new FormControl(''),
    travilinDate: new FormControl(''),
    backDate: new FormControl(''),
    employeeId: new FormControl(''),
  });

  travelingEmployeeId!: number;
  travelingEmployee;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  travelingEmployees!: MatTableDataSource<travelingEmployee>;

  employees;


  constructor(private travelingEmployeeService:ServiceTravelingEmployeeService ,
    private taskeenService: TaskeenService,
    private roomsTaskeenService: RoomsTaskeenService,
    private employeeService: EmployeeService,

  private activateRoute: ActivatedRoute,
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
    this.getAllTravelingEmployees();
    this.getAllRoomsTaskeen();
    this.getAllTaskeen();

    this.form = this.fb.group(
      {
    habitationId:['',Validators.required],
    roomId: ['',Validators.required],
    travilinDate: ['',Validators.required],
    backDate:['',Validators.required],
    employeeId:['',Validators.required],


   });
  }


   goTravelingEmployeeList(){
     this.router.navigate(['/operation/TravelingEmloyee/TravelingEmloyee'])
   }


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



   public getAllTravelingEmployees(): void {

  this.travelingEmployeeId= this.activateRoute.snapshot.params['id'];
  this.travelingEmployeeService.getTravelingEmployeeById(this.travelingEmployeeId)
  .subscribe(data => {
    this.travelingEmployee = data;

  }, error => console.log(error));


        }

        submitted = false;
        get f(): { [key: string]: AbstractControl } {
          return this.form.controls;
        }


   public onUpdatingTravelingEmployee(travelingEmployees): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(new Date(this.travelingEmployee.backDate)<=new Date(this.travelingEmployee.travilinDate))
      { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
  return;
     }


      this.travelingEmployeeService.updateTravelingEmployee(this.travelingEmployee).subscribe(
      (response) => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

      this.goTravelingEmployeeList();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);

      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')

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

