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
  selector: 'app-Maintenance-edit',
  templateUrl: './Maintenance-edit.component.html',
  styleUrls: ['./Maintenance-edit.component.scss']
})
export class MaintenanceEditComponent implements OnInit {
  transportations!: Transportation[];
  form: FormGroup = new FormGroup({
    maintenanceType: new FormControl(''),
    numberOfKm:new FormControl(''),
    maintenanceDate: new FormControl(''),
    nextMaintenanceDate: new FormControl(''),
    licenseExpiryDate:new FormControl(''),
    technicalCheck:new FormControl(''),
    transportationMeanId: new FormControl(''),


  });
  maintenanceId!: number;
  maintenance;
  maintenances!:Maintenance[]


  constructor( private maintenanceService: MaintenanceService,
    private transportationService: TransportationService,
    private router: Router,
     private activateRoute: ActivatedRoute,
     public fb: FormBuilder, // Form Builder service for Reactive forms
     private translate: TranslateService ) {
       this.translate.setDefaultLang('ar');
   const lang = localStorage.getItem('lang')  || 'ar';
   this.translate.use(lang);
   document.documentElement.lang = lang;
      }

  ngOnInit() {
    this.getAllTransportation();
    this.getMaintenance();
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
    public getMaintenance(){
      this.maintenanceId = this.activateRoute.snapshot.params['id'];
      this.maintenanceService.getMaintenanceById(this.maintenanceId)
      .subscribe(data => {

        this.maintenance = data;
      }, error => console.log(error));
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
      public onUpdateMaintenance(Main) {
        this.submitted = true;
        if (this.form.invalid) {
          return;
        }
        if(new Date(this.maintenance.nextMaintenanceDate)<=new Date(this.maintenance.maintenanceDate))
        { Swal.fire(this.translate.instant('Error'), this.translate.instant('Theissuedatemustbebeforetheexpirationdate'), 'error')
    return;
       }

          this.maintenanceService.updateMaintenance(this.maintenance).subscribe(
            (data) => {
              Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

         
              // this.getProject();
              this.goMaintenancesList();
            },
            (error) => {
              Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')

              console.log(error);
            }
          );

     }
}
