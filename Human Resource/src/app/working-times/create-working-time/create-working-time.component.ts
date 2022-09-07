import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-working-time',
  templateUrl: './create-working-time.component.html',
  styleUrls: ['./create-working-time.component.scss']
})
export class CreateWorkingTimeComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
  }

}
