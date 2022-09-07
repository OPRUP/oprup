import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { ServiceTravelingEmployeeService } from '../service-traveling-employee.service';
import { travelingEmployee } from '../travelingEmployee';

@Component({
  selector: 'app-delete-traveling-employee',
  templateUrl: './delete-traveling-employee.component.html',
  styleUrls: ['./delete-traveling-employee.component.scss']
})
export class DeleteTravelingEmployeeComponent implements OnInit {

  travelingEmployeeId!: number;
  travelingEmployee;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  travelingEmployees!: MatTableDataSource<travelingEmployee>;

  employees;


  constructor(private travelingEmployeeService:ServiceTravelingEmployeeService ,
    private employeeService: EmployeeService,
    private activateRoute: ActivatedRoute,
     private router: Router,
      private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }


  ngOnInit() {
    this.getEmployee();
    this.getAllTravelingEmployees();
   }
   goTravelingEmployeeList(){
     this.router.navigate(['/operation/TravelingEmloyee/TravelingEmloyee'])
   }
   public getAllTravelingEmployees(): void {

  this.travelingEmployeeId= this.activateRoute.snapshot.params['id'];
  this.travelingEmployeeService.getTravelingEmployeeById(this.travelingEmployeeId)
  .subscribe(data => {
    this.travelingEmployee = data;

  }, error => console.log(error));


        }


   public onDeleteTravelingEmployee(travelingEmployees): void {
      this.travelingEmployeeService.deleteTravelingEmployee(this.travelingEmployee).subscribe(
      (response) => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      this.goTravelingEmployeeList();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
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

