import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';

@Component({
  selector: 'app-edit-central-job',
  templateUrl: './edit-central-job.component.html',
  styleUrls: ['./edit-central-job.component.scss']
})
export class EditCentralJobComponent implements OnInit {

  //public centralJobs: CentralJob[] = [];
  centralId!: number;
  centralJob;
  centralJobs!: CentralJob[];

  form: FormGroup = new FormGroup({
    centralJobName: new FormControl(''),
    jobCode: new FormControl(''),


  });


  constructor(private centralJobService: CentralJobService,

    public fb: FormBuilder, // Form Builder service for Reactive forms
     private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getCentralJob();
    this.form = this.fb.group(
      {
        centralJobName:['', Validators.required],
        jobCode: ['', Validators.required],
      }

    );


  }

  goCentralJobList(){
    this.router.navigate(['/central-jobs/central-jobs'])
  }

  public getCentralJob(){
    this.centralId = this.activateRoute.snapshot.params['id'];
    this.centralJobService.getCentralJobById(this.centralId)
    .subscribe(data => {

      this.centralJob = data;
    }, error => console.log(error));
  }

  public getAllCentralJobs(): void {
    this.centralJobService.getCentralJobs().subscribe(
      (response: CentralJob[]) => {
        this.centralJobs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public onUpdateCentralJob(centraljob: CentralJob): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

      this.centralJobService.updateCentralJob(this.centralJob).subscribe(
        (data: CentralJob) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')


          this.getAllCentralJobs();
          this.goCentralJobList();
        },
        (error) => {
          Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
          console.log(error);
        }
      );
    }




}
