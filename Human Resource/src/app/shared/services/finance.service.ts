import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
//Menu Bar
export interface Menu {
  headTitle?: string;
  path?: string;
  title?: string;
  titleEn?: string;
  icon?: string;
  img?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}
@Injectable({
  providedIn: 'root'
})
export class FinanceService implements OnDestroy {

  private currentLang = new BehaviorSubject('ar');
  lang = this.currentLang.asObservable();
  ln = 'الرئيسية';
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  public fullScreen: boolean = false;
  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
    if (lang == 'ar') {
      this.ln = 'الرئيسية';
    } else {
      this.ln = 'Home';
    }
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = false;
          this.megaMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuCollapse = true;
        }
      });
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      });
    }
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.currentLang.next(lang);
  }

  ngOnDestroy() {
    this.unsubscriber.next({});
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [

    {
      title: 'الصفحة الرئيسية',
      titleEn: 'Home',
      path: '/dashboard/',
      img: '../../../../assets/images/icons/ic01.png',
      icon: '',
      type: 'link',
      active: false,
    },
    ////////////add your routes
{
    title: ' شجرة الحسابات',
          titleEn: 'Chart of Accounts',
          path: '/finance/coa/coa/',
          img: '../../../../assets/images/icons/ic02.png',
          icon: '',
          type: 'link',
          active: false,
        },

        {
          title: 'مراكز التكلفة',
                titleEn: 'Cost Center',
                path: '/finance/cost-center//cost-center/',
                img: '../../../../assets/images/icons/ic02.png',
                icon: '',
                type: 'link',
                active: false,
              },
              {
                title: 'التقارير',
                titleEn: 'Reports',
                img: '../../../../assets/images/icons/ic12.png',
                icon: '',
                type: 'sub',
                active: false,
                children: [
              {
                title: 'كشف الحساب',
                      titleEn: 'Account Report',
                      path: '/finance/acc-rep/acc-rep/',
                      img: '../../../../assets/images/icons/ic02.png',
                      icon: '',
                      type: 'link',
                      active: false,
                    },
                    {
                      title: 'ميزان المراجعة',
                            titleEn: 'Trial Balance',
                            path: '/finance/acc-rep/trial',
                            img: '../../../../assets/images/icons/ic02.png',
                            icon: '',
                            type: 'link',
                            active: false,
                          },

                    {
                            title: 'قائمة الدخل',
                            titleEn: 'Income Statement',
                            path: '/finance/acc-rep/income',
                            img: '../../../../assets/images/icons/ic02.png',
                            icon: '',
                            type: 'link',
                            active: false,
                          },
                        ]}


  ];

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
