import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { RoomsTaskeen } from '../RoomsTaskeen';
import { RoomsTaskeenService } from '../RoomsTaskeen.service';

@Component({
  selector: 'app-RoomsTaskeen_delete',
  templateUrl: './RoomsTaskeen_delete.component.html',
  styleUrls: ['./RoomsTaskeen_delete.component.scss']
})
export class RoomsTaskeen_deleteComponent implements OnInit {
  roomId!: number;
  roomTaskeen;
  roomsTaskeen!: RoomsTaskeen[];

  constructor(private roomsTaskeenService: RoomsTaskeenService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getRoomTaskeen();
  }
  goRoomTaskeenList(){
    this.router.navigate(['/operation/RoomsTaskeen/RoomsTaskeen'])
  }
  public getRoomTaskeen(){
    this.roomId = this.activateRoute.snapshot.params['id'];
    this.roomsTaskeenService.getRoomsTaskeenById(this.roomId)
    .subscribe(data => {

      this.roomTaskeen = data;
    }, error => console.log(error));
  }
  public onDeleteRoomTaskeen(roomId): void{
    this.roomsTaskeenService.deleteRoomsTaskeen(this.roomTaskeen).subscribe( data => {
    
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goRoomTaskeenList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);

 Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }


}
