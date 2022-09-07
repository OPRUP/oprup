import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Renewingresidence } from '../Renewingresidence';
import { RenewingresidenceService } from '../renewingresidence.service';

@Component({
  selector: 'app-delete-renewing-residence',
  templateUrl: './delete-renewing-residence.component.html',
  styleUrls: ['./delete-renewing-residence.component.scss']
})
export class DeleteRenewingResidenceComponent implements OnInit {



  renewingResidenceId!: number;
  RenewingResidence;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  renewingResidences!: MatTableDataSource<Renewingresidence>;

  employees;


  constructor(private renewingresidenceService:RenewingresidenceService ,
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
    this.getAllRenewingResidence();
   }
   goRenewingResidenceList(){
     this.router.navigate(['/operation/renewingresidence/renewingresidence'])
   }
   public getAllRenewingResidence(): void {

  this.renewingResidenceId= this.activateRoute.snapshot.params['id'];
  this.renewingresidenceService.getRenewingresidenceById(this.renewingResidenceId)
  .subscribe(data => {
    this.RenewingResidence = data;

  }, error => console.log(error));


        }


   public onDeleteRenewingresidence(renewingresidence): void {
      this.renewingresidenceService.deleteRenewingresidence(this.RenewingResidence).subscribe(
      (response) => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      this.goRenewingResidenceList();
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


