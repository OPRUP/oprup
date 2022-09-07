import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { JobService } from '../job.service';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.scss']
})
export class DeleteJobComponent implements OnInit {

  jobId!: number;
  job;

  constructor(private jobService: JobService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit(): void {
    this.getJob()
  }
  goSiteVisitsList(){
    this.router.navigate(['/international/job/job'])
  }
  public getJob(){
    this.jobId = this.activateRoute.snapshot.params['id'];
    this.jobService.getJobById(this.jobId)
    .subscribe(data => {

      this.job = data;
    }, error => console.log(error));
  }
  public onDeleteProject(id:number){
    this.jobService.deleteJob(id).subscribe( data => {
   
      Swal.fire('حذف سجل', 'تم الحذف بنجاح', 'success')
      this.goSiteVisitsList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire('Error!! ', 'Error while delete', 'error')
    }
    );
  }

}
