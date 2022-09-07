import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-full-content',
  templateUrl: './accounts-full-content.component.html',
  styleUrls: ['./accounts-full-content.component.scss']
})
export class AccountsFullContentComponent implements OnInit {


  sidenavtoggled1: any;
  constructor() { }

  ngOnInit(): void {
  }
  hoverEffect($event:any){

    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }
}
