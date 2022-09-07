import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { SalaryObject } from '../salary-object';
import { SalaryObjectService } from '../salary-object.service';

@Component({
  selector: 'app-delete-salary-object',
  templateUrl: './delete-salary-object.component.html',
  styleUrls: ['./delete-salary-object.component.scss']
})
export class DeleteSalaryObjectComponent implements OnInit {

  salaryObjectId!: number;
  salaryObject!: SalaryObject;
  salaryObjects!: SalaryObject[];
  salaryObjectData = {
    salaryObjectId: '',
    salaryObjectName: '',
    description:  '',
    deleteFlag: 1,

  };


  constructor(private salaryObjectService: SalaryObjectService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getSalaryObject();
  }

  public getSalaryObject(){
    this.salaryObjectId = this.activateRoute.snapshot.params['id'];
    this.salaryObjectService.getSalaryObjectById(this.salaryObjectId)
    .subscribe(data => {

      this.salaryObject = data;
    }, error => console.log(error));
  }


  public onDeleteSalaryObject(salaryObject: SalaryObject){
    this.salaryObjectService.deleteSalaryObject(salaryObject).subscribe(
      (data) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      this.goCentralJobList();
    },
    (error) => {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
      console.log(error);
    }
    );
  }



  public getAllSalaryObjects(): void {
    this.salaryObjectService.getSalaryObjects().subscribe(
      (data: SalaryObject[]) => {
        this.salaryObjects = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goCentralJobList(){
    this.router.navigate(['/salary-objects/salary-objects'])
  }


}
