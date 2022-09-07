import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Advance } from '../advance';
import { AdvanceService } from '../advance.service';

@Component({
  selector: 'app-advances',
  templateUrl: './advances.component.html',
  styleUrls: ['./advances.component.scss']
})
export class AdvancesComponent implements OnInit {


  displayedColumns: string[] = [
    'employeeNameAr',
    'submissionDate',
    'advanceAmount',
    'numberOfInstallment',
    'monthlyPayment',
   'actions',
 ];

 advances;

 @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(
    private advanceService: AdvanceService,
    private router: Router,
    private translate: TranslateService

    ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getAdvances();
  }

  public getAdvances(): void {
    this.advanceService.getAdvances().subscribe((response:Advance[]) => {
      this.advances = new MatTableDataSource(response);
      this.advances.paginator =this.paginator;
      this.advances.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }


  public onApprove(advanceId: number):void{
    this.router.navigate(['/operation/advances/approve-advance', advanceId])
  }

  public onReject(advanceId: number):void{
    this.router.navigate(['/operation/advances/reject-advance', advanceId])
  }


  filterData($event: any){
    this.advances.filter = $event.target.value;
  }


}
