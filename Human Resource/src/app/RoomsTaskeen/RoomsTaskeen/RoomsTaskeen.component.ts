import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RoomsTaskeen } from '../RoomsTaskeen';
import { RoomsTaskeenService } from '../RoomsTaskeen.service';

@Component({
  selector: 'app-RoomsTaskeen',
  templateUrl: './RoomsTaskeen.component.html',
  styleUrls: ['./RoomsTaskeen.component.scss']
})
export class RoomsTaskeenComponent implements OnInit {
  displayedColumns = [
    'habitationName',
    'roomCode',
    'bids',
    'lockers',
    'conditioners',
    'tools',
    'actions',

  ];
  taskeens;
  RoomsTaskeen!: MatTableDataSource<RoomsTaskeen>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private roomsTaskeenService: RoomsTaskeenService,
    private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getAllRoomsTaskeen()
  }
  public getAllRoomsTaskeen(): void {

    this.roomsTaskeenService.getAllRoomsTaskeen().subscribe((response:RoomsTaskeen[]) => {
      this.RoomsTaskeen = new MatTableDataSource(response);
      this.RoomsTaskeen.paginator =this.paginator;
      this.RoomsTaskeen.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );

  }
  ngAfterViewInit() {}
  filterData($event: any){
    this.RoomsTaskeen.filter = $event.target.value;

}
public onEditRoomsTaskeenById(roomId: number): void {
  this.router.navigate(['/operation/RoomsTaskeen/RoomsTaskeen-edit', roomId])
}

  public onEditToDeleteRoomIdById(roomId: number):void{
    this.router.navigate(['/operation/RoomsTaskeen/RoomsTaskeen-delete', roomId])
  }

}
