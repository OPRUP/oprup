import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Maintenance } from '../Maintenance';
import { MaintenanceService } from '../Maintenance.service';

@Component({
  selector: 'app-Maintenance-delete',
  templateUrl: './Maintenance-delete.component.html',
  styleUrls: ['./Maintenance-delete.component.scss']
})
export class MaintenanceDeleteComponent implements OnInit {
  maintenanceId!: number;
  maintenance;
  maintenances!: Maintenance[];

  constructor(private maintenanceService: MaintenanceService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getMaintenance();
  }
  goMaintenancesList(){
    this.router.navigate(['/operation/Maintenance/Maintenance'])
    }
    public getMaintenance(){
      this.maintenanceId = this.activateRoute.snapshot.params['id'];
      this.maintenanceService.getMaintenanceById(this.maintenanceId)
      .subscribe(data => {

        this.maintenance = data;
      }, error => console.log(error));
    }
    public onDeleteMaintenance(maintenanceId): void{
      this.maintenanceService.deleteMaintenance(this.maintenance).subscribe( data => {

        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

        this.goMaintenancesList();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

      }
      );
    }

}
