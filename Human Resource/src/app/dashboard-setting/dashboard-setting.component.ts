import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styleUrls: ['./dashboard-setting.component.scss']
})
export class DashboardSettingComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('ar');
    this.translate.use(localStorage.getItem('lang') || 'ar');
  }

}
