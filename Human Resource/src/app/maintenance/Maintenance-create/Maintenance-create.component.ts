import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Transportation } from 'src/app/Transportation/Transportation';
import { TransportationService } from 'src/app/Transportation/Transportation.service';
import Swal from 'sweetalert2';
import { Maintenance } from '../Maintenance';
import { MaintenanceService } from '../Maintenance.service';

@Component({
  selector: 'app-Maintenance-create',
  templateUrl: './Maintenance-create.component.html',
  styleUrls: ['./Maintenance-create.component.scss']
})
export class MaintenanceCreateComponent implements OnInit {
  maintenance;
  form: FormGroup = new FormGroup({
    maintenanceType: new FormControl(''),
    numberOfKm:new FormControl(''),
    maintenanceDate: new FormControl(''),
    nextMaintenanceDate: new FormControl(''),
    licenseExpiryDate:new FormControl(''),
    technicalCheck:new FormControl(''),
    transportationMeanId: new FormControl(''),


  });
  maintenanceEmdadat = {
    maintenanceId:'',
    maintenanceType: '',
    numberOfKm: '',
    maintenanceDate: '',
    nextMaintenanceDate: '',
    licenseExpiryDate: '',
    technicalCheck: '',
    deleteFlag: 1,
    transportations:{
      transportationMeanId: '',
      transportationMeanCode: '',
    }
  }
  transportations;
  maintenances!: Maintenance[];

  constructor(private maintenanceService: MaintenanceService, private transportationService: TransportationService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public fb: FormBuilder, // Form Builder service for Reactive forms
     private translate: TranslateService
    ) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
     }
     public getAllTransportation(): void{
      this.transportationService.getAllTransportation().subscribe((response:Transportation[]) => {
      this.transportations = response;

      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      }
      )
      }

  ngOnInit() {
    this.getAllTransportation();
    this.form = this.fb.group(
      {
        maintenanceType:['', Validators.required],
        numberOfKm:['',Validators.required],
        maintenanceDate: ['',Validators.required],
        nextMaintenanceDate: ['',Validators.required],
        licenseExpiryDate: ['',Validators.required],
        technicalCheck:['',Validators.required],
        transportationMeanId: ['',Validators.required],


      });
  }
  goMaintenancesList(){
    this.router.navigate(['/operation/Maintenance/Maintenance'])
    }
    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onAddMaintenance(): void {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      if(new Date(this.maintenanceEmdadat.nextMaintenanceDate)<=new Date(this.maintenanceEmdadat.maintenanceDate))
      {Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
  return;
     }



        document.getElementById('add-Maintenance-form')?.click();
      this.maintenanceService.addMaintenance(this.maintenanceEmdadat).subscribe(

        (response: Maintenance) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

          this.getAllMaintenances();
          this.goMaintenancesList();
        },
      (error: HttpErrorResponse) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
      );


      }
      public getAllMaintenances(): void{
        this.maintenanceService.getAllMaintenance().subscribe(
          (response:Maintenance[]) => {
          this.maintenances = response;
          
        },
        (error: HttpErrorResponse) => {
              alert(error.message);
            }
        )
      }

}
