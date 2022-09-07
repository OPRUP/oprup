import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Taskeen } from '../Taskeen';
import { TaskeenService } from '../Taskeen.service';

@Component({
  selector: 'app-Taskeen_Edit',
  templateUrl: './Taskeen_Edit.component.html',
  styleUrls: ['./Taskeen_Edit.component.scss']
})
export class Taskeen_EditComponent implements OnInit {
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

  employees!: Employee[];
  habitationId!: number;
  taskeen;
 taskeens!:Taskeen[]

  constructor( private taskeenService: TaskeenService,
    private employeeService: EmployeeService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
     private activateRoute: ActivatedRoute,
     private translate: TranslateService ) {
       this.translate.setDefaultLang('ar');
   const lang = localStorage.getItem('lang')  || 'ar';
   this.translate.use(lang);
   document.documentElement.lang = lang;
      }

  ngOnInit() {
    this.getEmployees();
    this.getTaskeen();
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
    this.router.navigate(['/Taskeen/Taskeen'])
    }
    public getTaskeen(){
      this.habitationId = this.activateRoute.snapshot.params['id'];
      this.taskeenService.getTaskeenById(this.habitationId)
      .subscribe(data => {
         console.log(data)
        this.taskeen = data;
      }, error => console.log(error));
    }
    public getEmployees(): void{
      this.employeeService.get().subscribe(
        (data:Employee[]) => {
        this.employees = data;
        console.log(this.employees);
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

    public onUpdateTaskeen(Tas) {

      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      if(new Date(this.taskeen.rentContractEndingDate)<=new Date(this.taskeen.rentContractStartingDate))
      { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
  return;
     }

        this.taskeenService.updateTaskeen(this.taskeen).subscribe(
          (data) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
            console.log(data)
            // this.getProject();
            this.goTaskeensList();
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
            console.log(error);
          }
        );
      }
   }


