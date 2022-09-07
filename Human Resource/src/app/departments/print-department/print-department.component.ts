import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-print-department',
  templateUrl:'./print-department.component.html',
  styleUrls: ['./print-department.component.scss']
})
export class PrintDepartmentComponent implements OnInit {
  displayedColumns: string[] = [

    'departmentName',
    // 'managementStartingDate',
    // 'employee',
    // 'managerStartingDate',
    'contactNumber',
  ]

  departments!: MatTableDataSource<Department>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private departmentService : DepartmentService,
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

    printPage() {

      window.print();
    }
}
