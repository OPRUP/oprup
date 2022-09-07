import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-employee-salary-object',
  templateUrl: './edit-employee-salary-object.component.html',
  styleUrls: ['./edit-employee-salary-object.component.scss']
})
export class EditEmployeeSalaryObjectComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
  }

}
