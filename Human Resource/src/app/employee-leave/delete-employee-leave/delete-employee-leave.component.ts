import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { EmployeeLeave } from '../employee-leave';
import { EmployeeLeaveService } from '../employee-leave.service';

@Component({
  selector: 'app-delete-employee-leave',
  templateUrl: './delete-employee-leave.component.html',
  styleUrls: ['./delete-employee-leave.component.scss']
})
export class DeleteEmployeeLeaveComponent implements OnInit {

  employeeLeaveId!: number;
  employeeLeave;
  employeeLeaves!: EmployeeLeave[];



  constructor(private employeeLeaveService: EmployeeLeaveService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getEmployeeLeave();
  }

  public getEmployeeLeave(){
    this.employeeLeaveId = this.activateRoute.snapshot.params['id'];
    this.employeeLeaveService.getEmployeeLeaveById(this.employeeLeaveId)
    .subscribe(data => {

      this.employeeLeave = data;
    }, error => console.log(error));
  }


  public onDeleteEmployeeLeave(){
    this.employeeLeaveService.deleteEmployeeLeave(this.employeeLeaveId).subscribe(
       (data) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      this.goEmployeeLeaveList();
    },
    (error) => {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
      console.log(error);
    }
    );
  }



  goEmployeeLeaveList(){
    this.router.navigate(['/employee-leave/employee-leaves'])
  }

}
