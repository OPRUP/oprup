import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-delete-top-management',
  templateUrl: './delete-top-management.component.html',
  styleUrls: ['./delete-top-management.component.scss']
})
export class DeleteTopManagementComponent implements OnInit {

  topManagementId!: number;
  topManagement!: TopManagement;
  topManagements!: TopManagement[];



  constructor(private topManagementsService: TopManagementsService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.topManagementId = this.activateRoute.snapshot.params['id'];
    this.getTopManagement();
  }

  public getTopManagement(){
    this.topManagementId = this.activateRoute.snapshot.params['id'];
    this.topManagementsService.getById(this.topManagementId)
    .subscribe(data => {

      this.topManagement = data;
    }, error => console.log(error));
  }


  public onDeleteTopManagement(topManagement: TopManagement){
    this.topManagementsService.deleteTopManagement(topManagement).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goTopManagementList();
    },
    (error: HttpErrorResponse) =>{
 
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }

  public getAll(): void {
    this.topManagementsService.get().subscribe(
      (response: TopManagement[]) => {
        this.topManagements = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goTopManagementList(){
    this.router.navigate(['/top-managements/top-managements'])
  }


}
