import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Employee, Employee07_WorkExperience } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee07_WorkExperienceService } from '../Employee07_WorkExperience.service';

@Component({
  selector: 'app-create-employee07-work-experience',
  templateUrl: './create-employee07-work-experience.component.html',
  styleUrls: ['./create-employee07-work-experience.component.scss']
})
export class CreateEmployee07WorkExperienceComponent implements OnInit {
  viewMode;
  experiences;
  snackBar: any;
  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  emp07 = {
    experienceId: '',
    companyName: '',
    jobTitle: '',
    dateFrom: '',
    dateTo: '',
    jobResponsibilities: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    }
  };

  form: FormGroup = new FormGroup({
    companyName:  new FormControl(''),
    jobTitle:  new FormControl(''),
    dateFrom:  new FormControl(''),
    dateTo:  new FormControl(''),
  });

  //constructor() { }
  constructor( private employeeService: EmployeeService,
    private emp07_work: Employee07_WorkExperienceService,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private router: Router, private activateRoute: ActivatedRoute,
    public translate: TranslateService){
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    }
  ngOnInit(): void {
    this.viewMode = "tab07";

    this.getEmployee();
    this.getExperiences();


    this.form = this.fb.group(
      {
        companyName: ['', Validators.required],
        jobTitle: ['', Validators.required],
        dateFrom: ['', Validators.required],
        dateTo: ['', Validators.required],
      }
    );

  }
  public getEmployee(): void{
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId)
    .subscribe(data => {
      this.employee = data;

    }, error => console.log(error));
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddWorkExperience(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

      document.getElementById('add-WorkExperience-form')?.click();
      this.emp07_work.add(this.emp07).subscribe(
        (response: Employee07_WorkExperience) => {
          // this.emp07.companyName = '';
          // this.emp07.jobTitle = '';
          // this.emp07.dateFrom = '';
          // this.emp07.dateTo = '';
          this.getExperiences();

          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

          console.log(error);
        }
      );




   }

   public getExperiences(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp07_work.getExperiencesByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.experiences = response;
      
      },
    )
  }

   public deleteEmployeeExperience(experienceId){
    Swal.fire({
      icon: 'info',
      title:  'هل انت متاكد من حذف السجل',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){

        this.emp07_work.deleteExperience(experienceId).subscribe(
          (response) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
            this.getExperiences();
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
          }
        );
      }
      this.viewMode = "tab07";

    })
  }

}
