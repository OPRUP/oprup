import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject, fromEvent, debounceTime, takeUntil } from 'rxjs';


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
export class OperationService implements OnDestroy {

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

    {
      title: 'المشاريع',
      titleEn: 'Projects',
      path: '/operation/project-emdadat/project-view/',
      img: '../../../../assets/images/icons/ic01.png',
      icon: '',
      type: 'link',
      active: false,
    },



    {

          title: 'نافذة العميل',
          titleEn: 'customer portal',
          path: '',
          img: '../../../../assets/images/icons/ic03.png',
          type: 'sub',
          icon: '',
          active: false,
          children: [
            {
              title: ' الاستبيان',
              titleEn: 'Survey',
              path: '/operation/Survey/Survey/',
              img: '../../../../assets/images/icons/ic07.png',
              icon: '',
              type: 'link',
              active: false,
            },
            {
              title: 'زيارة المواقع',
              titleEn: 'Site Visits ',
              path: '/operation/site-visits/site-visits/',
              img: '../../../../assets/images/icons/ic03.png',
              icon: '',
              type: 'link',
              active: false,
            },

            {
              path: '/operation/customer-portal/contracts',
              titleEn: 'Projects',
              title: 'المشاريع',
              type: 'link',
              img: '../../../../../assets/images/icons/ic03.png',
              active: false,
            },
            {
              path: '/operation/employee-projects/employee-projects/',
              titleEn: 'Employee Project',
              title: 'موظف المشروع',
              type: 'link',
              img: '../../../../../assets/images/icons/ic03.png',
              active: false,
            },
            {
              path: '/operation/customer-portal/employee-insurance',
              titleEn: 'health insurance',
              title: 'التأمين الصحي',
              type: 'link',
              img: '../../../../../assets/images/icons/ic03.png',
              active: false,
            },
          ],
        },

        {
          title: 'طلبات',
          titleEn: 'Requests',
          img: '../../../../assets/images/icons/ic12.png',
          icon: '',
          type: 'sub',
          active: false,
          children: [

            {

              title: 'طلب خروج نهائي',
              titleEn: 'FinalExit ',
              path: '/operation/finalExit/final-exits',
              img: '../../../../assets/images/icons/ic12.png',
              icon: '',
              type: 'link',
              active: false,
            },
            {
              title: 'طلب هروب',
              titleEn: 'Escape Request ',
              path: '/operation/skiprequest/skiprequest',
              img: '../../../../assets/images/icons/ic12.png',
              icon: '',
              type: 'link',
              active: false,
            },
 {
      title: 'السلف',
      titleEn: 'Advance',
      path: '/operation/advances/advances/',
      img: '../../../../assets/images/icons/ic03.png',
      icon: '',
      type: 'link',
      active: false,
    },
    {
      title: 'الإجازات و المغادرات',
      titleEn: 'Leaves and vacations ',
      path: '/operation/vacation/vacations/',
      img: '../../../../assets/images/icons/ic03.png',
      icon: '',
      type: 'link',
      active: false,
    },

            {
              title: '  بطاقة صراف الي',
              titleEn: 'ATMRequest ',
              path: '/operation/ATMRequest/atm-requests',
              img: '../../../../assets/images/icons/ic12.png',
              icon: '',
              type: 'link',
              active: false,
            },
            {
              title: 'طلب تجديد اقامة',
              titleEn: 'Renewing Residence',
              path: '/operation/renewing-residence/renewingresidence',
              img: '../../../../assets/images/icons/ic12.png',
              icon: '',
              type: 'link',
              active: false,
            },
            // ResidenceCard
            {
              title: 'بطاقة اقامة',
              titleEn: 'ResidenceCard ',
              path: '/operation/ResidenceCard/residence-card-requests',
              img: '../../../../assets/images/icons/ic12.png',
              icon: '',
              type: 'link',
              active: false,
            },
          ],
        },
        {
          title: 'تسكيين',
          titleEn: 'Taskeen',
          path: '',
          img: '../../../../assets/images/icons/ic03.png',
          icon: '',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/operation/Taskeen/Taskeen',
              titleEn: 'Habitation',
              title: 'السكنات',
              type: 'link',
              img: '../../../../../assets/images/icons/ic03.png',
              active: false,
            },
            {
              title: 'الغرف',
              titleEn: 'Rooms',
              path: '/operation/RoomsTaskeen/RoomsTaskeen',
              type: 'link',
              img: '../../../../assets/images/icons/ic03.png',
              active: false,
            },
            {
              title: 'المطابخ',
              titleEn: 'Kitchens',
              path: '/operation/KitchenTaskeen/KitchenTaskeen',
              type: 'link',
              img: '../../../../assets/images/icons/ic03.png',
              active: false,
            },

            {
              title: 'المسافرون',
              titleEn: 'TravelingEmployees',
              path: '/operation/TravelingEmloyee/TravelingEmloyee',
              img: '../../../../assets/images/icons/ic03.png',
              icon: '',
              type: 'link',
              active: false,
            },

          ],
        },




        {
          title: ' ادارة الحركة',
          titleEn: 'Transportation',
          path: '',
          img: '../../../../assets/images/icons/ic03.png',
          type: 'sub',
          icon: '',
          active: false,
          children: [
            {
              title: 'التنقلات',
              titleEn: 'Transportation',
              path: '/operation/Transportation/Transportation',
              img: '../../../../assets/images/icons/ic12.png',
              icon: '',
              type: 'link',
              active: false,
            },
            {
              title: 'الإصلاحات',
              titleEn: 'Maintenance',
              path: '/operation/Maintenance/Maintenance',
              img: '../../../../assets/images/icons/ic12.png',
              icon: '',
              type: 'link',
              active: false,
            },
          ],
        },
        {
          title: 'مهام الموظفين',
          titleEn: 'Tasks',
          path: '/operation/task/task',
          img: '../../../../assets/images/icons/ic02.png',
          icon: '',
          type: 'link',
          active: false,
        },

        {
          title: 'التقارير',
          titleEn: 'Report ',
          // path: '/report/report',
          img: '../../../../assets/images/icons/ic12.png',
          icon: '',
          type: 'link',
          active: false,
        },



  ];

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
