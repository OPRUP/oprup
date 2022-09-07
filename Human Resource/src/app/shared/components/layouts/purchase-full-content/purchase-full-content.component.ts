import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-full-content',
  templateUrl: './purchase-full-content.component.html',
  styleUrls: ['./purchase-full-content.component.scss']
})
export class PurchaseFullContentComponent implements OnInit {


  sidenavtoggled1: any;
  constructor() { }

  ngOnInit(): void {
  }
  hoverEffect($event:any){

    this.sidenavtoggled1 = $event.type == 'mouseover' ? 'sidenav-toggled1' : '';
  }
}
