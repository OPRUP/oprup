import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Department } from 'src/app/departments/department';
import { DepartmentService } from 'src/app/departments/department.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Section } from '../section';
import { SectionService } from '../section.service';

@Component({
  selector: 'app-print-sections',
  templateUrl: './print-sections.component.html',
  styleUrls: ['./print-sections.component.scss']
})
export class PrintSectionsComponent implements OnInit {

  displayedColumns: string[] = [
    'sectionName',
    'department',
    'employee',
    // 'managerStartingDate',
    'contactNumber',
    'description',
  ]

  departments!: Department[];
  sections!: MatTableDataSource<Section>;
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
    this.getDepartments();
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

      },
      (error)  =>
        {
          console.log(error);

        }
      );
  }
  printPage() {

    window.print();
  }

}
