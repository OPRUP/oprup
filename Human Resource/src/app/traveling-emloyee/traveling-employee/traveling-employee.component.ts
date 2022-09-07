import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Vendor } from 'src/app/vendor/Vendor';

import { ServiceTravelingEmployeeService } from '../service-traveling-employee.service';
import { travelingEmployee } from '../travelingEmployee';

@Component({
  selector: 'app-traveling-employee',
  templateUrl: './traveling-employee.component.html',
  styleUrls: ['./traveling-employee.component.scss']
})
export class TravelingEmployeeComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeId',
    'habitationName',
    'roomCode',
    "employeeName",
    "employeeNameAr",
    'travilinDate',
    'backDate',
    'actions',
  ];


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  travelingEmployees!: MatTableDataSource<travelingEmployee>;

  constructor(private travelingEmployeeService:ServiceTravelingEmployeeService ,
     private router: Router ,
      private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllTravelingEmployees();
  }


 public getAllTravelingEmployees(): void {

    this.travelingEmployeeService.getAllTravelingEmployee().subscribe((response:travelingEmployee[]) => {
      this.travelingEmployees = new MatTableDataSource(response);
      this.travelingEmployees.paginator =this.paginator;
      this.travelingEmployees.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }

  ngAfterViewInit() {}

  public onEditTravelingEmployeeById(travelingEmployeeId: number): void {
    this.router.navigate(['/operation/TravelingEmloyee/edit-TravelingEmloyee', travelingEmployeeId])
  }

  public onDeleteTravelingEmployeeById(travelingEmployeeId: number):void{
    this.router.navigate(['/operation/TravelingEmloyee/delete-TravelingEmloyee', travelingEmployeeId])
  }

  filterData($event: any){
    this.travelingEmployees.filter = $event.target.value;
  }

}

