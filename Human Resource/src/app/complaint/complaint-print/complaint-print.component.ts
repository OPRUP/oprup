import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint-print',
  templateUrl: './complaint-print.component.html',
  styleUrls: ['./complaint-print.component.scss']
})
export class ComplaintPrintComponent implements OnInit {
  displayedColumns: string[] = [
    'complaintProviderName',
    'complaintDate',
    'details',
    'documents',
  ]
  complaints!: MatTableDataSource<Complaint>;
  constructor(private complaintService:ComplaintService,private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;

  }

  ngOnInit() {
    this.getAllComplaints();
  }
  public getAllComplaints(): void {
    this.complaintService.getAllComplaint().subscribe(
      (response:Complaint[]) => {
        this.complaints = new MatTableDataSource(response);

      /* this.projects.paginator =this.paginator;
      this.projects.sort = this.matSort; */
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }
  printPage() {

    window.print();
  }

}
