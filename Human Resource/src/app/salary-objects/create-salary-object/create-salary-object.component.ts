import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { SalaryObject } from '../salary-object';
import { SalaryObjectService } from '../salary-object.service';

@Component({
  selector: 'app-create-salary-object',
  templateUrl: './create-salary-object.component.html',
  styleUrls: ['./create-salary-object.component.scss']
})
export class CreateSalaryObjectComponent implements OnInit {

  salaryObjects!: SalaryObject[];
  snackBar!: MatSnackBar;
  salaryObjectData = {
    salaryObjectId: '',
    salaryObjectName: '',
    description:  '',
    deleteFlag: 1,

  };
  constructor(private salaryObjectService: SalaryObjectService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
  }


  public onAddSalaryObject(): void {
    if(this.salaryObjectData.salaryObjectName.trim() =='' || this.salaryObjectData.salaryObjectName ==null){
      this.snackBar.open("Salary Object Required !!", '', {
        duration: 3000,
      });

    }

    this.salaryObjectService.addSalaryObject(this.salaryObjectData).subscribe(
      (data: SalaryObject) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.salaryObjectService.getSalaryObjects();
        this.goSalaryObjectsList();

      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
    );
  }

  goSalaryObjectsList(){
    this.router.navigate(['/salary-objects/salary-objects'])
  }


}
