import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username;
  notification;
  resnotification;
  Body = document.querySelector('body')
lang2;
layoutSubscription: Subscription;

  constructor(
    public layoutService: LayoutService,
    public navServices: NavService,
    public taskService:TaskService,
    private router: Router,
    private translate: TranslateService,

    ){
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;

    this.layoutSubscription = layoutService.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;
      })
    }

    ngOnInit(): void {
      this.lang2 = localStorage.getItem('lang') || 'ar';
      this.getNotification();
      this.getAllResNotification();

    }


    public getAllResNotification(): void{
      this.taskService.getResNotification()
      .subscribe(res => {
        if(this.resnotification !=null &&  this.resnotification !=''){
          this.resnotification = res;
        console.log(res)
        }

      }, error => console.log(error));
    }
    changeLang(langChange){
      localStorage.setItem('lang', langChange);
      window.location.reload();
    }


    public getNotification(): void{
      this.taskService.getNotification()
      .subscribe(data => {
        if(this.notification !=null &&  this.notification !=''){
          this.notification = data;
          console.log(data)
        }


      }, error => console.log(error));
    }

      searchOpen(){
        this.Body?.classList.add('search-show')
      }

      search(e:any){
        e.preventDefault();

        this.Body?.classList.remove('search-show')
      }

      sidebarToggle(){
        let App = document.querySelector('.app')
        if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
          App?.classList.add('sidenav-toggled');
        }
        else {
          App?.classList.remove('sidenav-toggled');
        }
      }

}
