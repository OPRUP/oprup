import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-full-content',
  templateUrl: './setting-full-content.component.html',
  styleUrls: ['./setting-full-content.component.scss']
})
export class SettingFullContentComponent implements OnInit {

  sidenavtoggled1: any;
  constructor() { }

  ngOnInit(): void {
  }
  hoverEffect($event:any){

    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }

}
