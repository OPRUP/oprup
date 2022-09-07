import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Vacation } from '../vacation';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-print-vacation',
  templateUrl: './print-vacation.component.html',
  styleUrls: ['./print-vacation.component.scss'],
})
export class PrintVacationComponent implements OnInit {
  displayedColumns: string[] = [
    'employeeName',
    'dateFrom',
    'dateTo',
    'vacationType',
    'description',
    'approvedBy',
    'daysOfVacation',
    'stauts',
  ];

  vacationAprove;
  vacationReject;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private vacationService: VacationService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    this.getAllVacationsApprove();
  }

  public getAllVacationsApprove(): void {
    this.vacationService.Approve().subscribe(
      (response: Vacation[]) => {
        this.vacationAprove = new MatTableDataSource(response);
        this.vacationAprove.paginator = this.paginator;
        this.vacationAprove.sort = this.matSort;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  public getAllVacationsRejrct(): void {
    this.vacationService.Rejrct().subscribe(
      (response: Vacation[]) => {
        this.vacationReject = new MatTableDataSource(response);
        this.vacationReject.paginator = this.paginator;
        this.vacationReject.sort = this.matSort;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  printPage() {
    window.print();
  }
}
