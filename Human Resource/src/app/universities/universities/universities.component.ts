import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { University } from '../university';
import { UniversityService } from '../university.service';


@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {



  displayedColumns: string[] = [
    // 'universityId',
    'universityName',
    'description',
    // 'deleteFlag',
    'actions',
  ];
  universities!: MatTableDataSource<University>;
  // currentBanks!: MatTableDataSource<Bank>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private universityService: UniversityService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllUniversities();
   // this.getCurrentBanks();
  }



  public getAllUniversities(): void {

    this.universityService.getUniversities().subscribe((response:University[]) => {
      this.universities = new MatTableDataSource(response);
      this.universities.paginator =this.paginator;
      this.universities.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
      // let resp = this.bankService.getBanks();
      // resp.subscribe(report => this.dataSource.data=report as Bank[]);

    //   (response: Bank[]) => {
    //     this.banks = response;

    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );


  }


  ngAfterViewInit() {}

  public onEditUniversityById(id: number): void {
    this.router.navigate(['/universities/edit-university',id])
  }

  public onEditToDeleteUniversityById(id: number): void {
    this.router.navigate(['/universities/delete-university',id])
  }




  filterData($event: any){
    this.universities.filter = $event.target.value;
  }




}
