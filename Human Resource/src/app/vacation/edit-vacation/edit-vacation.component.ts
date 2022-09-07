import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Vacation } from '../vacation';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-edit-vacation',
  templateUrl: './edit-vacation.component.html',
  styleUrls: ['./edit-vacation.component.scss']
})
export class EditVacationComponent implements OnInit {

  vacationId!: number;
  vacation;
  vacations!: Vacation[];
  employees!: Employee[];


  constructor(private vacationService : VacationService, private employeeService: EmployeeService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getVacation();
    this.getEmployees();
  }

  goVacationList(){
    this.router.navigate(['/operation/vacation/vacations'])
  }

  public getVacation(){
   this.vacationId = this.activateRoute.snapshot.params['id'];
   this.vacationService.getVacationById(this.vacationId)
   .subscribe(data => {
     this.vacation = data;
     console.log(data)
   }, error => console.log(error));
 }

public getEmployees(): void{
   this.employeeService.get().subscribe((response:Employee[]) => {
     this.employees = response;
     console.log(this.employees);
   },
   (error: HttpErrorResponse) => {
         alert(error.message);
         //Swal.fire(error.message);
       }
   )
 }

  public onUpdateVacation() {
    this.vacationService.updateVacation(this.vacation).subscribe(
     (data) => {
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

       console.log(data)
       this.goVacationList();
     },
     (error) => {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
       console.log(error);
     }
   );
 }
}
