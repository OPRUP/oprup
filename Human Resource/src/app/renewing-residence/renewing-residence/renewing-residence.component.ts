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
  selector: 'app-renewing-residence',
  templateUrl: './renewing-residence.component.html',
  styleUrls: ['./renewing-residence.component.scss']
})
export class RenewingResidenceComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeId',
    "employeeName",
    "employeeNameAr",
    'expiryDate',
    'submittingDate',
    'actions',
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

  public onEditRenewingresidenceById(renewingResidenceId: number): void {
    this.router.navigate(['/operation/renewingresidence/edit-renewingresidence', renewingResidenceId])
  }

  public onDeleteRenewingresidenceById(renewingResidenceId: number):void{
    this.router.navigate(['/operation/renewingresidence/delete-renewingresidence', renewingResidenceId])
  }

  filterData($event: any){
    this.renewingResidences.filter = $event.target.value;
  }

}

