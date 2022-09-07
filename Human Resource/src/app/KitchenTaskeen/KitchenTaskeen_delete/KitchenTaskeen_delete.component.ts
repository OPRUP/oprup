import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { KitchenTaskeen } from '../KitchenTaskeen';
import { KitchenTaskeenService } from '../KitchenTaskeen.service';

@Component({
  selector: 'app-KitchenTaskeen_delete',
  templateUrl: './KitchenTaskeen_delete.component.html',
  styleUrls: ['./KitchenTaskeen_delete.component.scss']
})
export class KitchenTaskeen_deleteComponent implements OnInit {
  kitchenId!: number;
  kitchenTaskeen;
  kitchensTaskeen!: KitchenTaskeen[];

  constructor(private kitchenTaskeenService: KitchenTaskeenService,private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService
    ) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
     }

  ngOnInit() {
    this.getKitchenTaskeen();
  }
  goRoomsTaskeensList(){
    this.router.navigate(['/operation/KitchenTaskeen/KitchenTaskeen'])
    }
    public getKitchenTaskeen(){
      this.kitchenId = this.activateRoute.snapshot.params['id'];
      this.kitchenTaskeenService.getKitchenRoomById(this.kitchenId)
      .subscribe(data => {

        this.kitchenTaskeen = data;
      }, error => console.log(error));
    }
    public onDeleteKitchenTaskeen(kitchenId): void{
      this.kitchenTaskeenService.deleteKitchenRoom(this.kitchenTaskeen).subscribe( data => {

        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
        this.goRoomsTaskeensList();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
      }
      );
    }

}
