import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  displayedColumns: string[] = [

    'departmentName',
    // 'managementStartingDate',
    'contactNumber',
    'actions',
  ]

  departments!: MatTableDataSource<Department>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private departmentService : DepartmentService,
    private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
     }

  ngOnInit() {
    this.getAllDepartments();
  }

  public getAllDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (response:Department[]) => {
      this.departments = new MatTableDataSource(response);
      this.departments.paginator =this.paginator;
      this.departments.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }

  public onEditDepartmentById(departmentId: number): void {
    this.router.navigate(['/departments/edit-department', departmentId])
  }
  public onEditToDeleteDepartmentById(departmentId: number):void{
    this.router.navigate(['/departments/delete-department', departmentId])
  }
  ngAfterViewInit() {}
  filterData($event: any){
    this.departments.filter = $event.target.value;

  }

}

