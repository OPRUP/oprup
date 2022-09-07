import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-full-content',
  templateUrl: './report-full-content.component.html',
  styleUrls: ['./report-full-content.component.scss']
})
export class ReportFullContentComponent implements OnInit {
  sidenavtoggled1: any;
  constructor() { }

  ngOnInit(): void {
  }
  hoverEffect($event:any){

    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }


}
