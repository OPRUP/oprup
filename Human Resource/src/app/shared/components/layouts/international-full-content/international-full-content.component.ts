import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-international-full-content',
  templateUrl: './international-full-content.component.html',
  styleUrls: ['./international-full-content.component.scss']
})
export class InternationalFullContentComponent implements OnInit {

  sidenavtoggled1: any;
  constructor() { }

  ngOnInit(): void {
  }
  hoverEffect($event:any){

    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }

}
