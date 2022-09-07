import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Taskeen } from '../Taskeen';
import { TaskeenService } from '../Taskeen.service';

@Component({
  selector: 'app-Taskeen',
  templateUrl: './Taskeen.component.html',
  styleUrls: ['./Taskeen.component.scss']
})
export class TaskeenComponent implements OnInit {
  displayedColumns = [
    'habitationCode',
    'habitationName',
    'rentContractStartingDate',
    'rentContractEndingDate',
    'rentCostPerMonth',
    'capacity',
    'actions',

  ];
  Taskeen!: MatTableDataSource<Taskeen>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private taskeenService: TaskeenService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllTaskeen();
  }
  public getAllTaskeen(): void {

    this.taskeenService.getAllTaskeen().subscribe((response:Taskeen[]) => {
      this.Taskeen = new MatTableDataSource(response);
      this.Taskeen.paginator =this.paginator;
      this.Taskeen.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );

  }
  ngAfterViewInit() {}
  filterData($event: any){
    this.Taskeen.filter = $event.target.value;

}
public onEditTaskeenById(habitationId: number): void {
  this.router.navigate(['/operation/Taskeen/Taskeen-edit', habitationId])
}

  public onEditToDeleteHabitationIdById(habitationId: number):void{
    this.router.navigate(['/operation/Taskeen/Taskeen-delete', habitationId])
  }
}
