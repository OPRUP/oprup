import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { SalaryObject } from '../salary-object';
import { SalaryObjectService } from '../salary-object.service';

@Component({
  selector: 'app-edit-salary-object',
  templateUrl: './edit-salary-object.component.html',
  styleUrls: ['./edit-salary-object.component.scss']
})
export class EditSalaryObjectComponent implements OnInit {

  salaryObjectId!: number;
  salaryObject;
  salaryObjects!: SalaryObject[];


  constructor(private salaryObjectService: SalaryObjectService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getSalaryObject();
  }

  goSalaryObjectList(){
    this.router.navigate(['/salary-objects/salary-objects'])
  }

  public getSalaryObject(){
    this.salaryObjectId = this.activateRoute.snapshot.params['id'];
    this.salaryObjectService.getSalaryObjectById(this.salaryObjectId)
    .subscribe(data => {

      this.salaryObject = data;

    }, error => console.log(error));
  }

  public getAllSalaryObjects(): void {
    this.salaryObjectService.getSalaryObjects().subscribe(
      (response: SalaryObject[]) => {
        this.salaryObjects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateSalaryObject(): void {
    this.salaryObjectService.updateSalaryObject(this.salaryObject).subscribe(
      (data: SalaryObject) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
   

        this.getAllSalaryObjects();
        this.goSalaryObjectList();
      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
        console.log(error);
      }
    );
  }


}
