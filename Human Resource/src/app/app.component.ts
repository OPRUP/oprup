import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import countries from './_files/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isSpinner = true;

  countryList: { name: String; code: String }[] = countries;
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isSpinner = false;
    }, 1000);
  }
}
