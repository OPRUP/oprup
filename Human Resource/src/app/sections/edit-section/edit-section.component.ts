import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Department } from 'src/app/departments/department';
import { DepartmentService } from 'src/app/departments/department.service';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Section } from '../section';
import { SectionService } from '../section.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {
  sectionId!: number;
  section;
  departments!: Department[];
  employees!: Employee[];

  form: FormGroup = new FormGroup({
    sectionName: new FormControl(''),
    managerStartingDate: new FormControl(''),
    contactNumber: new FormControl(''),
    employeeId: new FormControl(''),
    departmentId: new FormControl(''),
  });


  constructor(private sectionService: SectionService ,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private departmentService: DepartmentService, private employeeService: EmployeeService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getDepartments();
    this.getEmployees();
    this.getSection();
    this.form = this.fb.group(
      {
        sectionName:['', Validators.required],
        managerStartingDate:['',[Validators.required]],
        employeeId: ['',[Validators.required]],
        departmentId: ['',[Validators.required]],
        contactNumber: ['',[Validators.required,Validators.pattern('(00966)?[0-9]{14}')]]
       // 1) Begins with 0 or 00966
       // 2) Then contains 7 or 8 or 9.
       // 3) Then contains 8 digits

      }

    );
  }

  goSectionList(){
    this.router.navigate(['/sections/sections'])
  }

  public getSection(){
   this.sectionId = this.activateRoute.snapshot.params['id'];
   this.sectionService.getSectionById(this.sectionId)
   .subscribe(data => {
     this.section = data;

   }, error => console.log(error));
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

submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }


  public onUpdateSection(sec: Section) {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }



      this.sectionService.updateSection(this.section).subscribe(
        (data) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

          this.goSectionList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
          console.log(error);
        }
      );
    }




}
