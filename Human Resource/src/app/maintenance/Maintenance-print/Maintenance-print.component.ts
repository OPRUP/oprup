import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Transportation } from 'src/app/Transportation/Transportation';
import { TransportationService } from 'src/app/Transportation/Transportation.service';
import Swal from 'sweetalert2';
import { Maintenance } from '../Maintenance';
import { MaintenanceService } from '../Maintenance.service';

@Component({
  selector: 'app-Maintenance-print',
  templateUrl: './Maintenance-print.component.html',
  styleUrls: ['./Maintenance-print.component.scss']
})
export class MaintenancePrintComponent implements OnInit {
  displayedColumns: string[] = [
    'maintenanceType',
    'numberOfKm',
    'maintenanceDate',
    'nextMaintenanceDate',
    'licenseExpiryDate',
    'technicalCheck',
    'transportationMeanCode',
  ]
  transportations?:Transportation[];
  maintenances!: MatTableDataSource<Maintenance>;

  constructor(private maintenanceService:MaintenanceService,private transportationService: TransportationService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;

  }

  ngOnInit() {
    this.getAllMaintenances();
  }
  public getAllMaintenances(): void {
    this.maintenanceService.getAllMaintenance().subscribe(
      (response:Maintenance[]) => {
        this.maintenances = new MatTableDataSource(response);

      /* this.projects.paginator =this.paginator;
      this.projects.sort = this.matSort; */
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }
  printPage() {

    window.print();
  }

}
