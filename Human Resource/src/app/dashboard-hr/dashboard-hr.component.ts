import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-hr',
  templateUrl: './dashboard-hr.component.html',
  styleUrls: ['./dashboard-hr.component.scss']
})
export class DashboardHrComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('ar');
    this.translate.use(localStorage.getItem('lang') || 'ar');
  }


}
