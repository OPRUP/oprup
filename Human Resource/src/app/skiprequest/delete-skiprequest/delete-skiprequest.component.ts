import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { SkiprequestService } from '../skiprequest.service';

@Component({
  selector: 'app-delete-skiprequest',
  templateUrl: './delete-skiprequest.component.html',
  styleUrls: ['./delete-skiprequest.component.scss']
})
export class DeleteSkiprequestComponent implements OnInit {

  skiprequestId!: number;

  skiprequests;

  employees;


  constructor(private skiprequestService:SkiprequestService ,
    private employeeService: EmployeeService,
    private activateRoute: ActivatedRoute,
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


   public onDeleteSkiprequestById(Skiprequest): void {
      this.skiprequestService.deleteSkiprequest(this.skiprequests).subscribe(
      (response) => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      this.goTravelingEmployeeList();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
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

