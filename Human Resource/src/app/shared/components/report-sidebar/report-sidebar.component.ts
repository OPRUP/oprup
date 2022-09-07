import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Menu, ReportNavService } from '../../services/report-nav.service';

@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.scss']
})
export class ReportSidebarComponent implements OnInit {
  public lang=localStorage.getItem('lang')
  public menuItems: Menu[] | any;
  public url: any;

  //For Horizontal Menu
  public margin: any = 0;
  public width: any = window.innerWidth;

  constructor(
    private router: Router,
    private reportService : ReportNavService,
    public elementRef: ElementRef,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;

    this.reportService.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) { return false; }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) { return false; }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });

              return;
            });

            return;
          });
        }
      });
    });
  }
  // @HostListener('window: resize', ['$event'])
  // onResize(event) {
  //   this.width = event.target.innerWidth - 480;
  // }

  //Active NavBar State
  setNavActive(item:any) {
    this.menuItems.filter((menuItem:any) => {
      if (menuItem !== item) {
        menuItem.active = false;
        // let sidemini:any = document.querySelector('.sidebar-mini')
        // sidemini.classList.remove('sidenav-toggled')

      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems:any) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  // Click Toggle menu
  toggleNavActive(item:any) {
    if (!item.active) {
      this.menuItems.forEach((a:any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) { return false; }
        a.children.forEach((b:any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });

        return;
      });
    }
    item.active = !item.active;
  }

  ngOnInit(): void {
    this.lang= localStorage.getItem('lang') || 'ar';


  }
  ngAfterViewInit(){

  }

}
