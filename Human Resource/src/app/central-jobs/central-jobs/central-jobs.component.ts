
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CentralJob } from '../central-job';
import { CentralJobService } from '../central-job.service';
@Component({
  selector: 'app-central-jobs',
  templateUrl: './central-jobs.component.html',
  styleUrls: ['./central-jobs.component.scss']
})
export class CentralJobsComponent implements OnInit {
  displayedColumns: string[] = [
    // 'centralId',
    'centralJobName',
    'jobCode',
    'description',
    // 'deleteFlag',
    'actions',
  ];
  centralJobs!: MatTableDataSource<CentralJob>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private centralJobService: CentralJobService, private router: Router,private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCentralJobs();
  }



  public getAllCentralJobs(): void {

    this.centralJobService.getCentralJobs().subscribe((response:CentralJob[]) => {
      this.centralJobs = new MatTableDataSource(response);
      this.centralJobs.paginator =this.paginator;
      this.centralJobs.sort = this.matSort;
      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }
      );
     

  }


  ngAfterViewInit() {}



  public onEditCentralJobById(centralId: number): void {
    this.router.navigate(['/central-jobs/edit-central-job', centralId])
  }


  public onEditToDeleteCentralJobById(centralId: number):void{
    this.router.navigate(['/central-jobs/delete-central-job', centralId])
  }

  filterData($event: any){
    this.centralJobs.filter = $event.target.value;
  }

}

