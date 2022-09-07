
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import Swal from 'sweetalert2';
import { FinalExit } from '../final-exit';
import { FinalExitService } from '../final-exit.service';

@Component({
  selector: 'app-final-exits',
  templateUrl: './final-exits.component.html',
  styleUrls: ['./final-exits.component.scss']
})
export class FinalExitsComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeName',
    // 'finalExitId',
    'ticket',
    'exitDate',
    'reason',
    'actions'
  ]

  employees!: Employee[];
  FinalExits!: MatTableDataSource<FinalExit>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  employeeService: any;

  constructor(private finalExitService : FinalExitService,
     private router: Router,
     private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllFinalExit();
  }

  public getAllFinalExit(): void {

    this.finalExitService.getAllFinalExit().subscribe((response:FinalExit[]) => {
      this.FinalExits = new MatTableDataSource(response);
      this.FinalExits.paginator =this.paginator;
      this.FinalExits.sort = this.matSort;
      },
      (error)  =>
        {
          console.log(error);

          Swal.fire(this.translate.instant('Error'), this.translate.instant('Errorinloadingdata'), 'error')

        }
      );
  }

  ngAfterViewInit() {}


  filterData($event: any){
    this.FinalExits.filter = $event.target.value;

  }
  public onApprove(finalExitId: number):void{
    this.router.navigate(['/operation/finalExit/approve-final-exit/', finalExitId])
  }

  public onReject(finalExitId: number):void
  {
  this.router.navigate(['/operation/finalExit/reject-final-exit', finalExitId])
  }


  public getEmployees(): void{
    this.employeeService.get().subscribe(
      (data:Employee[]) => {
      this.employees = data;

    },
    (error: HttpErrorResponse) => {
          alert(error.message);
          //Swal.fire(error.message);
        }
    )
  }

}
