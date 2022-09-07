import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Department } from 'src/app/departments/department';
import { DepartmentService } from 'src/app/departments/department.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Section } from '../section';
import { SectionService } from '../section.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  displayedColumns: string[] = [
    'sectionName',
    'department',
    'employee',
    'managerStartingDate',
    'contactNumber',
    // 'description',
    'actions',
  ]
  employees!: Employee[];
  departments!: Department[];
  sections!: MatTableDataSource<Section>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private sectionService : SectionService,
    private router: Router,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllSections();
    this.getEmployees();
    this.getDepartments();
  }
  public getEmployees(): void{
    this.employeeService.get().subscribe(
      (data:Employee[]) => {
      this.employees = data;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }
  public getDepartments(): void{
    this.departmentService.getDepartments().subscribe(
      (data:Department[]) => {
      this.departments = data;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }

  public getAllSections(): void {
    this.sectionService.getSections().subscribe((response:Section[]) => {
      this.sections = new MatTableDataSource(response);
      this.sections.paginator =this.paginator;
      this.sections.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');

        }
      );
  }

  ngAfterViewInit() {}
  public onEditSectiontById(sectionId: number): void {
    this.router.navigate(['/sections/edit-section', sectionId])
  }

  public onEditToDeleteSectionById(sectionId: number):void{
    this.router.navigate(['/sections/delete-section', sectionId])
  }

  filterData($event: any){
    this.sections.filter = $event.target.value;

  }



}
