import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Major } from '../major';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-delete-major',
  templateUrl: './delete-major.component.html',
  styleUrls: ['./delete-major.component.scss']
})
export class DeleteMajorComponent implements OnInit {

  majorId!: number;
  major!: Major;
  majors!: Major[];



  constructor(private majorService: MajorService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getMajor();
  }

  public getMajor(){
    this.majorId = this.activateRoute.snapshot.params['id'];
    this.majorService.getMajorById(this.majorId)
    .subscribe(data => {
      console.log(data)
      this.major = data;
    }, error => console.log(error));
  }


  public onDeleteMajor(major: Major){
    this.majorService.deleteMajor(major).subscribe( data => {
      console.log(data);
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      this.goMajorList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')

    }
    );
  }

  public getAllMajors(): void {
    this.majorService.getMajors().subscribe(
      (response: Major[]) => {
        this.majors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goMajorList(){
    this.router.navigate(['/majors/majors'])
  }


}
