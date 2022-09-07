

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { FinalExit } from '../final-exit';
import { FinalExitService } from '../final-exit.service';



@Component({
  selector: 'app-print-final-exit',
  templateUrl: './print-final-exit.component.html',
  styleUrls: ['./print-final-exit.component.scss']
})
export class PrintFinalExitComponent implements OnInit {


  displayedColumns: string[] = [

    'employeeName',
    'ticket',
    'exitDate',
    'reason',
    'stauts',



  ]

  finalExit!: MatTableDataSource<FinalExit>;
  finalExits!: MatTableDataSource<FinalExit>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;


  constructor(
    private finalExitService : FinalExitService,
    private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
     }

  ngOnInit(): void {
    this.Finalapprove();
    this.FinalExit();
  }

  public Finalapprove(): void {
    this.finalExitService.Finalapprove().subscribe(
      (response:any) => {
      this.finalExit = response;

      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );
  }
  public FinalExit(): void {
    this.finalExitService.FinalExit().subscribe(
      (response:any) => {
      this.finalExits = response;

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
    this.finalExit.filter = $event.target.value;
  }
}











