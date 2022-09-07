import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';

@Component({
  selector: 'app-delete-central-job',
  templateUrl: './delete-central-job.component.html',
  styleUrls: ['./delete-central-job.component.scss']
})
export class DeleteCentralJobComponent implements OnInit {

  centralJobId!: number;
  centralJob!: CentralJob;
  centralJobs!: CentralJob[];
  centralJobData = {
    centralId: '',
    centralJobName: '',
    description:  '',
    deleteFlag: 1,
  //   jobTitles:  {
  //   jobId:'',
  // },
  };
  constructor(private centralJobService: CentralJobService, private router: Router, private activateRoute: ActivatedRoute ,private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getCentralJob();
    this.getAllCentralJobs();
  }

  public getCentralJob(){
    this.centralJobId = this.activateRoute.snapshot.params['id'];
    this.centralJobService.getCentralJobById(this.centralJobId)
    .subscribe(data => {

      this.centralJob = data;
    }, error => console.log(error));
  }

  public onDeleteCentralJob(centralJob: CentralJob){
    this.centralJobService.deleteCentralJob(centralJob).subscribe( data => {
     
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goCentralJobList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error!!'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }



  public getAllCentralJobs(): void {
    this.centralJobService.getCentralJobs().subscribe(
      (data: CentralJob[]) => {
        this.centralJobs = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goCentralJobList(){
    this.router.navigate(['/central-jobs/central-jobs'])
  }


}
