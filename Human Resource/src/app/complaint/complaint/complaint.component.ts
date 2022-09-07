import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  displayedColumns = [
    'complaintDate',
    'details',
    'complaintProviderName',
    'documents',
    'actions',

  ];
  Complaint!: MatTableDataSource<Complaint>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private complaintService: ComplaintService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAllComplaint();
  }
  public getAllComplaint(): void {

    this.complaintService.getAllComplaint().subscribe((response:Complaint[]) => {
      this.Complaint = new MatTableDataSource(response);
      this.Complaint.paginator =this.paginator;
      this.Complaint.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );

  }
  ngAfterViewInit() {}
  filterData($event: any){
    this.Complaint.filter = $event.target.value;

}
public onEditComplaintById(complaintId: number): void {
  this.router.navigate(['/international/complaint/complaint-edit', complaintId])
}

  public onEditToDeleteComplaintIdById(complaintId: number):void{
    this.router.navigate(['/international/complaint/complaint-delete', complaintId])
  }

}
