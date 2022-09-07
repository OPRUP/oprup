import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-delete-department',
  templateUrl:'./delete-department.component.html',
  styleUrls: ['./delete-department.component.scss']
})
export class DeleteDepartmentComponent implements OnInit {
  departmentId!: number;
  department!: Department;
  departments!: Department[];
  constructor(private departmentService: DepartmentService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getDepartment();

  }
  goDepartmentList(){
    this.router.navigate(['/departments/departments'])
  }
  public getDepartment(){
    this.departmentId = this.activateRoute.snapshot.params['id'];
    this.departmentService.getDepartmentById(this.departmentId)
    .subscribe(data => {
      this.department = data;

    }, error => console.log(error));
  }
  public onDeleteDepartment(dept: Department){
    this.departmentService.deleteDepartment(dept).subscribe( data => {

      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      this.goDepartmentList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }
}
