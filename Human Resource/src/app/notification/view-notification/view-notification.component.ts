import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/notification/notification.service';
import { residenceNotification } from 'src/app/shared/services/residenceNotification';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.scss']
})
export class ViewNotificationComponent implements OnInit {

  constructor( private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.getAllNotifications()
    this.getResNotifications()
  }

  notifications!: MatTableDataSource<Notification>;
  residencenotification!: MatTableDataSource<residenceNotification>;
displayedColumns :string[]=['date','name']

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  getAllNotifications():void{
    this.notificationService.getNotification().subscribe((response:Notification[])=>{
      this.notifications = new MatTableDataSource(response)
      this.notifications.paginator = this.paginator;
      this.notifications.sort = this.matSort

    },(error)=>{
    Swal.fire('Error!','Error Happened','error')
    })

  }
  getResNotifications():void{
    this.notificationService.getResNotification().subscribe((res:residenceNotification[])=>{
      this.residencenotification = new MatTableDataSource(res)
      console.log(this.residencenotification);
      this.residencenotification.paginator = this.paginator;
      this.residencenotification.sort = this.matSort

    },(error)=>{
    Swal.fire('Error!','Error Happened','error')
    })

  }

}
