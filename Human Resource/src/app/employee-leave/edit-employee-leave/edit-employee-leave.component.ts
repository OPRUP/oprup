import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { EmployeeLeave } from '../employee-leave';
import { EmployeeLeaveService } from '../employee-leave.service';

@Component({
  selector: 'app-edit-employee-leave',
  templateUrl: './edit-employee-leave.component.html',
  styleUrls: ['./edit-employee-leave.component.scss']
})
export class EditEmployeeLeaveComponent implements OnInit {

  employeeLeaveId!: number;
  employeeLeave;
  employeeLeaves!: EmployeeLeave[];
  employees!: Employee[];


  constructor(private employeeLeaveService : EmployeeLeaveService, private employeeService: EmployeeService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getEmployeeLeave();
    this.getEmployees();
  }

  goEmployeeLeaveList(){
    this.router.navigate(['/employee-leave/employee-leaves'])
  }

  public getEmployeeLeave(){
   this.employeeLeaveId = this.activateRoute.snapshot.params['id'];
   this.employeeLeaveService.getEmployeeLeaveById(this.employeeLeaveId)
   .subscribe(data => {
     this.employeeLeave = data;

   }, error => console.log(error));
 }

public getEmployees(): void{
   this.employeeService.get().subscribe((response:Employee[]) => {
     this.employees = response;

   },
   (error: HttpErrorResponse) => {
         alert(error.message);
         //Swal.fire(error.message);
       }
   )
 }

  public onUpdateEmployeeLeave() {
    this.employeeLeaveService.updateEmployeeLeave(this.employeeLeave).subscribe(
     (data) => {
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
   
       this.goEmployeeLeaveList();
     },
     (error) => {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')

       console.log(error);
     }
   );
 }

}
