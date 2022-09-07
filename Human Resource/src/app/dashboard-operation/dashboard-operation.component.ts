import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-operation',
  templateUrl: './dashboard-operation.component.html',
  styleUrls: ['./dashboard-operation.component.scss']
})
export class DashboardOperationComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('ar');
    this.translate.use(localStorage.getItem('lang') || 'ar');
  }


}
