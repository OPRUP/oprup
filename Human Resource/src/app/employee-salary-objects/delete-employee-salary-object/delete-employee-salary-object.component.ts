import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-delete-employee-salary-object',
  templateUrl: './delete-employee-salary-object.component.html',
  styleUrls: ['./delete-employee-salary-object.component.scss']
})
export class DeleteEmployeeSalaryObjectComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
  }

}
