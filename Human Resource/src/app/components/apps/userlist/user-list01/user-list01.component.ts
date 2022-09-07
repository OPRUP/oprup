import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list01',
  templateUrl: './user-list01.component.html',
  styleUrls: ['./user-list01.component.scss']
})
export class UserList01Component implements OnInit {

  constructor(
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
  }
  UserModal(userForm:any){
    this.modalService.open(userForm,{ scrollable: true,size: 'lg' });
  }
}
