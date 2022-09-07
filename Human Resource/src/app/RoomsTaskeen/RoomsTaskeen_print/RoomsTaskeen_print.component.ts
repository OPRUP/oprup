import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Taskeen } from 'src/app/Taskeen/Taskeen';
import { TaskeenService } from 'src/app/Taskeen/Taskeen.service';
import Swal from 'sweetalert2';
import { RoomsTaskeen } from '../RoomsTaskeen';
import { RoomsTaskeenService } from '../RoomsTaskeen.service';

@Component({
  selector: 'app-RoomsTaskeen_print',
  templateUrl: './RoomsTaskeen_print.component.html',
  styleUrls: ['./RoomsTaskeen_print.component.scss']
})
export class RoomsTaskeen_printComponent implements OnInit {
  displayedColumns: string[] = [
    'roomCode',
    'habitationName',
    'bids',
    'lockers',
    'conditioners',
    'tools',
  ]
  taskeens?:Taskeen[];
  roomsTaskeen!: MatTableDataSource<RoomsTaskeen>;
  constructor(private taskeenService:TaskeenService,private roomsTaskeenService: RoomsTaskeenService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;

  }


  ngOnInit() {
    this.getAllRoomsTaskeen();
  }
  public getAllRoomsTaskeen(): void {
    this.roomsTaskeenService.getAllRoomsTaskeen().subscribe(
      (response:RoomsTaskeen[]) => {
        this.roomsTaskeen = new MatTableDataSource(response);

      /* this.projects.paginator =this.paginator;
      this.projects.sort = this.matSort; */
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

}
