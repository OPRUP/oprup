import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint-delete',
  templateUrl: './complaint-delete.component.html',
  styleUrls: ['./complaint-delete.component.scss']
})
export class ComplaintDeleteComponent implements OnInit {
  complaintId!: number;
  complaint!: Complaint;
  complaints!: Complaint[];


  constructor(private complaintService: ComplaintService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getComplaint();
  }
  goComplaintList(){
    this.router.navigate(['/international/complaint/complaint'])
  }
  public getComplaint(){
    this.complaintId = this.activateRoute.snapshot.params['id'];
    this.complaintService.getComplaintById(this.complaintId)
    .subscribe(data => {

      this.complaint = data;
    }, error => console.log(error));
  }
  public onDeleteComplaint(Com:number){
    this.complaintService.deleteComplaint(Com).subscribe( data => {
    
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goComplaintList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }
}
