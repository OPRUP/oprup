import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import Swal from 'sweetalert2';
import { Vacation } from '../vacation';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeName',
    'dateFrom',
    'dateTo',
    'vacationType',
    'description',
    'approvedBy',
    'daysOfVacation',
    'actions'
  ]
  employees!: Employee[];
  vacations!: MatTableDataSource<Vacation>;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  employeeService: any;

  constructor(private vacationService : VacationService, private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllVacations();
  }

  public getAllVacations(): void {

    this.vacationService.getVacations().subscribe((response:Vacation[]) => {
      this.vacations = new MatTableDataSource(response);
      this.vacations.paginator =this.paginator;
      this.vacations.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');

        }
      );
  }

  ngAfterViewInit() {}

  public onEditVacationById(vacationId: number): void {
    this.router.navigate(['/vacation/edit-vacation', vacationId])
  }

  public onDeleteVacationById(vacationId: number):void{
    this.router.navigate(['/vacation/delete-vacation', vacationId])
  }

  filterData($event: any){
    this.vacations.filter = $event.target.value;

  }
  public onApprove(vacationId: number):void{
    this.router.navigate(['/operation/vacation/approve-vacation/', vacationId])
  }

  public onReject(vacationId: number):void{
    this.router.navigate(['/operation/vacation/reject-vacation', vacationId])
  }
  public getEmployees(): void{
    this.employeeService.get().subscribe(
      (data:Employee[]) => {
      this.employees = data;
      console.log(this.employees);
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }

}
