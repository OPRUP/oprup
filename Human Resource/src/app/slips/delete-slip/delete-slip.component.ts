import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-delete-slip',
  templateUrl: './delete-slip.component.html',
  styleUrls: ['./delete-slip.component.scss']
})
export class DeleteSlipComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
  }

}
