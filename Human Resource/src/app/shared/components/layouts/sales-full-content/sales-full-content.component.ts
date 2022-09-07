import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-full-content',
  templateUrl: './sales-full-content.component.html',
  styleUrls: ['./sales-full-content.component.scss']
})
export class SalesFullContentComponent implements OnInit {

  constructor() { }
  sidenavtoggled1: any;
  ngOnInit() {
  }
  hoverEffect($event:any){

    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }
}
