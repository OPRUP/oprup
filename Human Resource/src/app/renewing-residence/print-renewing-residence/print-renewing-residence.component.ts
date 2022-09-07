import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Renewingresidence } from '../Renewingresidence';
import { RenewingresidenceService } from '../renewingresidence.service';

@Component({
  selector: 'app-print-renewing-residence',
  templateUrl: './print-renewing-residence.component.html',
  styleUrls: ['./print-renewing-residence.component.scss']
})
export class PrintRenewingResidenceComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeId',
    "employeeName",
    "employeeNameAr",
    'expiryDate',
    'submittingDate',
  ];


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  renewingResidences!: MatTableDataSource<Renewingresidence>;

  constructor(private renewingresidenceService:RenewingresidenceService ,
     private router: Router ,
      private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllRenewingresidence();
  }


 public getAllRenewingresidence(): void {

    this.renewingresidenceService.getAllRenewingresidence().subscribe((response:Renewingresidence[]) => {
      this.renewingResidences = new MatTableDataSource(response);
      this.renewingResidences.paginator =this.paginator;
      this.renewingResidences.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }

  ngAfterViewInit() {}

  printPage() {

    window.print();
  }

  filterData($event: any){
    this.renewingResidences.filter = $event.target.value;
  }

}

