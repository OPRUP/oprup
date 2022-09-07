import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Taskeen } from '../Taskeen';
import { TaskeenService } from '../Taskeen.service';

@Component({
  selector: 'app-Taskeen_create',
  templateUrl: './Taskeen_create.component.html',
  styleUrls: ['./Taskeen_create.component.scss']
})
export class Taskeen_createComponent implements OnInit {
  taskeen;

  form: FormGroup = new FormGroup({
    habitationCode: new FormControl(''),
        habitationName:new FormControl(''),
        habitationAddress: new FormControl(''),
        lessorName: new FormControl(''),
        rentContractStartingDate:new FormControl(''),
        rentContractEndingDate:new FormControl(''),
        rentCostPerMonth: new FormControl(''),
        capacity: new FormControl(''),
        numberOfKitchens:new FormControl(''),
        numberOfBathrooms: new FormControl(''),
        employeeId: new FormControl(''),


  });


  taskeenEmdadat = {
    habitationId:'',
    habitationCode: '',
    habitationName: '',
    habitationAddress: '',
    lessorName: '',
    rentContractStartingDate: '',
    rentContractEndingDate: '',
    rentCostPerMonth: '',
    capacity: '',
    numberOfKitchens: '',
    numberOfBathrooms: '',
    deleteFlag: 1,
    employees:{
      employeeId: '',
      employeeName: '',
    }
  }
  employees;
  taskeens!: Taskeen[];

  constructor(private taskeenService: TaskeenService, private employeeService: EmployeeService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private activateRoute: ActivatedRoute,
     private translate: TranslateService
    ) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
     }
     public getAllEmployee(): void{
      this.employeeService.get().subscribe((response:Employee[]) => {
      this.employees = response;
      console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      }
      )
      }

  ngOnInit() {
    this.getAllEmployee();
    this.form = this.fb.group(
      {
        habitationCode:['', Validators.required],
        habitationName:['',Validators.required],
        habitationAddress: ['',Validators.required],
        lessorName: ['',Validators.required],
        rentContractStartingDate: ['',Validators.required],
        rentContractEndingDate:['',Validators.required],
        rentCostPerMonth: ['',Validators.required],
        capacity: ['',Validators.required],
        numberOfKitchens: ['',Validators.required],
        numberOfBathrooms: ['',Validators.required],
        employeeId: ['',Validators.required],


      });


  }
  goTaskeensList(){
    this.router.navigate(['/operation/Taskeen/Taskeen'])
    }

    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }

    public onAddTaskeen(): void {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      if(new Date(this.taskeenEmdadat.rentContractEndingDate)<=new Date(this.taskeenEmdadat.rentContractStartingDate))
      {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
  return;
     }
      document.getElementById('add-trasnportation-form')?.click();
      this.taskeenService.addTaskeen(this.taskeenEmdadat).subscribe(

        (response: Taskeen) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.getAllTaskeens();
          this.goTaskeensList();
        },
      (error: HttpErrorResponse) => {

        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
      );

      }

      public getAllTaskeens(): void{
        this.taskeenService.getAllTaskeen().subscribe(
          (response:Taskeen[]) => {
          this.taskeens = response;
          console.log(this.taskeens);
        },
        (error: HttpErrorResponse) => {
              alert(error.message);
            }
        )
      }

}
