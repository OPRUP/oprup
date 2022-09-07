import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Skiprequest } from '../Skiprequest';
import { SkiprequestService } from '../skiprequest.service';

@Component({
  selector: 'app-edit-skiprequest',
  templateUrl: './edit-skiprequest.component.html',
  styleUrls: ['./edit-skiprequest.component.scss']
})
export class EditSkiprequestComponent implements OnInit {
  skiprequestId!: number;

  skiprequests;

  employees;

  form: FormGroup = new FormGroup({
    skipDate: new FormControl(''),
       employeeId: new FormControl(''),
  });


  constructor(private skiprequestService:SkiprequestService ,
    private employeeService: EmployeeService,
    private activateRoute: ActivatedRoute,
    public fb: FormBuilder, // Form Builder service for Reactive forms

     private router: Router,
      private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }


  ngOnInit() {
    this.getEmployee();
    this.getAllSkiprequests();
    this.form = this.fb.group(
      {

        skipDate:['',[Validators.required]],
           employeeId: ['',[Validators.required]],
      }

    );
   }

   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }


   goTravelingEmployeeList(){
     this.router.navigate(['/operation/skiprequest/skiprequest'])
   }
   public getAllSkiprequests(): void {

  this.skiprequestId= this.activateRoute.snapshot.params['id'];
  this.skiprequestService.getSkiprequestById(this.skiprequestId)
  .subscribe(data => {
    this.skiprequests = data;

  }, error => console.log(error));


        }


   public onUpdatingSkiprequests(Skiprequest): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


      this.skiprequestService.updateSkiprequest(this.skiprequests).subscribe(
      (response) => {


Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

      this.goTravelingEmployeeList();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
      }
      );
      }



      public getEmployee(): void{
        this.employeeService.get().subscribe((response:Employee[]) => {
          this.employees = response;
       
        },
        (error: HttpErrorResponse) => {
              alert(error.message);
            }
        )
      }


   }

