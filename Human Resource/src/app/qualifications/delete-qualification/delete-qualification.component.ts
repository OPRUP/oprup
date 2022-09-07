import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Qualification } from '../qualification';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-delete-qualification',
  templateUrl: './delete-qualification.component.html',
  styleUrls: ['./delete-qualification.component.css']
})
export class DeleteQualificationComponent implements OnInit {

  qualificationId!: number;
  qualification;
  qualifications;


  constructor(private qualificationService: QualificationService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getQualification();
  }

  public getQualification(){
    this.qualificationId = this.activateRoute.snapshot.params['id'];
    this.qualificationService.getQualificationById(this.qualificationId)
    .subscribe(data => {

      this.qualification = data;
    }, error => console.log(error));
  }


  public onDeleteQualification(qualification: Qualification){
    this.qualificationService.deleteQualification(this.qualification).subscribe( data => {
    
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goQualificationList();
    },
    (error: HttpErrorResponse) =>{
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
      alert(error.message);
    }
    );
  }

  public getAllQualifications(): void {
    this.qualificationService.getQualifications().subscribe(
      (response: Qualification[]) => {
        this.qualifications = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goQualificationList(){
    this.router.navigate(['/qualifications/qualifications'])
  }


}
