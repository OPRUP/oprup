import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SiteVisits } from '../site-visits';
import { siteVisitsService } from '../site-visits.service';


@Component({
  selector: 'app-site-visits',
  templateUrl: './site-visits.component.html',
  styleUrls: ['./site-visits.component.scss']
})
export class SiteVisitsComponent implements OnInit {
  displayedColumns = [
    'visitNumber',
    'costumer',
    'project',
    'visitTime',
    'visitDate',
    'actions',
  ];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  siteVisits!: MatTableDataSource<SiteVisits>;

  constructor(private siteVisitsService:siteVisitsService ,
    private router: Router ,
     private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
      }
      ngOnInit(): void {
        this.getAllSiteVists()
      }
      public getAllSiteVists(): void {

        this.siteVisitsService.getAllVisits().subscribe((response:SiteVisits[]) => {
          this.siteVisits = new MatTableDataSource(response);
          this.siteVisits.paginator =this.paginator;
          this.siteVisits.sort = this.matSort;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
          );
            }


      ngAfterViewInit() {}


      public onEditSiteVisitsById(visitId: number): void {
        this.router.navigate(['/operation/site-visits/edit-site-visits', visitId])
      }


      public onDeleteSiteVisitsById(visitId: number):void{
        this.router.navigate(['/operation/site-visits/delete-site-visits/', visitId])
      }

      filterData($event: any){
        this.siteVisits.filter = $event.target.value;
      }


}
