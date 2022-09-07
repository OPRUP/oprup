import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-full-content',
  templateUrl: './operation-full-content.component.html',
  styleUrls: ['./operation-full-content.component.scss']
})
export class OperationFullContentComponent implements OnInit {

  sidenavtoggled1: any;
  constructor() { }

  ngOnInit(): void {
  }
  hoverEffect($event:any){

    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }

}
