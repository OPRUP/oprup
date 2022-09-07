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
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-edit-renewing-residence',
  templateUrl: './edit-renewing-residence.component.html',
  styleUrls: ['./edit-renewing-residence.component.scss']
})
export class EditRenewingResidenceComponent implements OnInit {

  renewingResidenceId!: number;
  RenewingResidence;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  renewingResidences!: MatTableDataSource<Renewingresidence>;

  employees;

  form: FormGroup = new FormGroup({
    expiryDate: new FormControl(''),
    submittingDate: new FormControl(''),
    employeeId: new FormControl({ value: '' }),
  });

  constructor(private renewingresidenceService:RenewingresidenceService ,
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
    this.getAllRenewingResidence();

    this.form = this.fb.group(
      {

    expiryDate:['',[Validators.required]],
    submittingDate: ['',[Validators.required]],
    employeeId: ['',[Validators.required]],

      }

    );
   }

   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
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


   public onUpdatingRenewingresidence(renewingresidence): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(new Date(this.RenewingResidence.expiryDate)<=new Date(this.RenewingResidence.submittingDate))
    { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
return;
   }

      this.renewingresidenceService.updateRenewingresidence(this.RenewingResidence).subscribe(
      (response) => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

      this.goRenewingResidenceList();
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

