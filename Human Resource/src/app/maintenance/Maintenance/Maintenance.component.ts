import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Maintenance } from '../Maintenance';
import { MaintenanceService } from '../Maintenance.service';

@Component({
  selector: 'app-Maintenance',
  templateUrl: './Maintenance.component.html',
  styleUrls: ['./Maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  displayedColumns = [
    'maintenanceType',
    'numberOfKm',
    'maintenanceDate',
    'nextMaintenanceDate',
    'licenseExpiryDate',
    'technicalCheck',
    'transportationMeanCode',
    'actions',

  ];
  Maintenance!: MatTableDataSource<Maintenance>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private maintenanceService: MaintenanceService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllMaintenance();
  }
  public getAllMaintenance(): void {

    this.maintenanceService.getAllMaintenance().subscribe((response:Maintenance[]) => {
      this.Maintenance = new MatTableDataSource(response);
      this.Maintenance.paginator =this.paginator;
      this.Maintenance.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );

  }
  ngAfterViewInit() {}
  filterData($event: any){
    this.Maintenance.filter = $event.target.value;

}
public onEditMaintenanceById(maintenanceId: number): void {
  this.router.navigate(['/operation/Maintenance/Maintenance-edit', maintenanceId])
}

  public onEditToDeleteMaintenanceIdById(maintenanceId: number):void{
    this.router.navigate(['/operation/Maintenance/Maintenance-delete', maintenanceId])
  }

}
