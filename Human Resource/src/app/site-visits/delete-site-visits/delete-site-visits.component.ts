import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { SiteVisits } from '../site-visits';
import { siteVisitsService } from '../site-visits.service';

@Component({
  selector: 'app-delete-site-visits',
  templateUrl: './delete-site-visits.component.html',
  styleUrls: ['./delete-site-visits.component.scss']
})
export class DeleteSiteVisitsComponent implements OnInit {
  visitId!: number;
  siteVisits;

  constructor(private siteVisitsService: siteVisitsService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit(): void {
    this.getVisit()
  }
  goSiteVisitsList(){
    this.router.navigate(['/operation/site-visits/site-visits'])
  }
  public getVisit(){
    this.visitId = this.activateRoute.snapshot.params['id'];
    this.siteVisitsService.getVisitById(this.visitId)
    .subscribe(data => {
      console.log(data)
      this.siteVisits = data;
    }, error => console.log(error));
  }
  public onDeleteProject(id:number){
    this.siteVisitsService.deleteVisit(id).subscribe( data => {
      console.log(data);
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goSiteVisitsList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }

}
