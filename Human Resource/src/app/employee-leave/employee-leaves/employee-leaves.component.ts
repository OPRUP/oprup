import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { EmployeeLeave } from '../employee-leave';
import { EmployeeLeaveService } from '../employee-leave.service';

@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.scss']
})
export class EmployeeLeavesComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeName',
    'leaveDate',
    'leaveFrom',
    'leaveTo',
    'leaveType',
    'description',
    'approvedBy',
    'actions'
  ]

  employeeLeaves!: MatTableDataSource<EmployeeLeave>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private employeeLeaveService : EmployeeLeaveService, private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllEmployeeLeaves();
  }

  public getAllEmployeeLeaves(): void {

      this.employeeLeaveService.getEmployeeLeaves().subscribe((response:EmployeeLeave[]) => {
      this.employeeLeaves = new MatTableDataSource(response);
      this.employeeLeaves.paginator =this.paginator;
      this.employeeLeaves.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');

        }
      );
  }

  ngAfterViewInit() {}

  public onEditEmployeeLeaveById(employeeLeaveId: number): void {
  
    this.router.navigate(['/employee-leave/edit-employee-leave', employeeLeaveId])
  }

  public onDeleteEmployeeLeaveById(employeeLeaveId: number):void{
    this.router.navigate(['/employee-leave/delete-employee-leave', employeeLeaveId])
  }

  filterData($event: any){
    this.employeeLeaves.filter = $event.target.value;

  }

}
