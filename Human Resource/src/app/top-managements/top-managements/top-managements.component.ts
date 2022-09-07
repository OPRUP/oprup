import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TopManagement } from '../top-management';
import { TopManagementsService } from '../top-managements.service';

@Component({
  selector: 'app-top-managements',
  templateUrl: './top-managements.component.html',
  styleUrls: ['./top-managements.component.scss']
})
export class TopManagementsComponent implements OnInit {
  topmanagements!: TopManagement[];
  displayedColumns: string[] = [
    'companyName',
    'commercialId',
    'dateStart',
    'dataEnding',
    'licenseId',
    'actions'
  ];

  topManagements!: MatTableDataSource<TopManagement>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private topManagementsService: TopManagementsService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }
  ngOnInit(): void {
    this.getAllTopManagements();
  }
  public getAllTopManagements(): void {

    this.topManagementsService.get().subscribe((response:TopManagement[]) => {
      this.topManagements = new MatTableDataSource(response);
      this.topManagements.paginator =this.paginator;
      this.topManagements.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }
  // ngAfterViewInit() {}
  public onEditTopManagementById(topManagementId: number): void {
    this.router.navigate(['/top-managements/edit-top-management', topManagementId])
  }
  public onEditToDeleteTopManagementById(topManagementId: number):void{
    this.router.navigate(['/top-managements/delete-top-management', topManagementId])
  }
  filterData($event: any){
    this.topManagements.filter = $event.target.value;
  }
}
