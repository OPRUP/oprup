import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-international',
  templateUrl: './dashboard-international.component.html',
  styleUrls: ['./dashboard-international.component.scss']
})
export class DashboardInternationalComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('ar');
    this.translate.use(localStorage.getItem('lang') || 'ar');
  }

}
