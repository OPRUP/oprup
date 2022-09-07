import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Taskeen } from '../Taskeen';
import { TaskeenService } from '../Taskeen.service';

@Component({
  selector: 'app-Taskeen_Delete',
  templateUrl: './Taskeen_Delete.component.html',
  styleUrls: ['./Taskeen_Delete.component.scss']
})
export class Taskeen_DeleteComponent implements OnInit {
  habitationId!: number;
  taskeen;
  taskeens!: Taskeen[];

  constructor(private taskeenService: TaskeenService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getTaskeen();
  }
  goTaskeenList(){
    this.router.navigate(['/operation/Taskeen/Taskeen'])
  }
  public getTaskeen(){
    this.habitationId = this.activateRoute.snapshot.params['id'];
    this.taskeenService.getTaskeenById(this.habitationId)
    .subscribe(data => {
      console.log(data)
      this.taskeen = data;
    }, error => console.log(error));
  }
  public onDeleteTaskeen(habitationId): void{
    this.taskeenService.deleteTaskeen(this.taskeen).subscribe( data => {
      console.log(data);
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goTaskeenList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }

}
