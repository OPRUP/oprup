import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ResidenceCardRequest } from '../residence-card-request';
import { ResidenceCardRequestService } from '../residence-card-request.service';


@Component({
  selector: 'app-print-residence-card',
  templateUrl: './print-residence-card.component.html',
  styleUrls: ['./print-residence-card.component.scss']
})
export class PrintResidenceCardComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeName',
    'date',
    'reason',
    'stauts',

  ]
  residenceCardRequestAprove!: MatTableDataSource<ResidenceCardRequest>;
  residenceCardRequestReject!: MatTableDataSource<ResidenceCardRequest>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private residenceCardRequestService : ResidenceCardRequestService,
    private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
     }

  ngOnInit(): void {
    this.getAllresidenceCardRequestAprove();
    this.getAllresidenceCardRequestReject();
  }


  public getAllresidenceCardRequestAprove(): void {
    this.residenceCardRequestService.Approve().subscribe(
      (response:any) => {
      this.residenceCardRequestAprove = new MatTableDataSource(response);
      this.residenceCardRequestAprove.paginator =this.paginator;
      this.residenceCardRequestAprove.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );
  }

  public getAllresidenceCardRequestReject(): void {
    this.residenceCardRequestService.Rejrct().subscribe(
      (response:any) => {
      this.residenceCardRequestReject = new MatTableDataSource(response);
      this.residenceCardRequestReject.paginator =this.paginator;
      this.residenceCardRequestReject.sort = this.matSort;
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
  ngAfterViewInit() {}

  filterData($event: any){
    this.residenceCardRequestAprove.filter = $event.target.value;
  }
}

















