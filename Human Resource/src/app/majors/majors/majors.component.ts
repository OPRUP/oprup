import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Major } from '../major';
import { MajorService } from '../major.service';


@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.scss']
})
export class MajorsComponent implements OnInit {

  displayedColumns: string[] = [
    // 'majordId',
    'majorName',
    'description',
    // 'deleteFlag',
    'actions',
  ];
  majors!: MatTableDataSource<Major>;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private majorService: MajorService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllMajors();
  }



  public getAllMajors(): void {

    this.majorService.getMajors().subscribe((response:Major[]) => {
      this.majors = new MatTableDataSource(response);
      this.majors.paginator =this.paginator;
      this.majors.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }


  ngAfterViewInit() {}
  public onEditMajorById(majorId: number): void {
    this.router.navigate(['/majors/edit-major', majorId])
  }

  public onEditToDeleteMajorById(majorId: number):void{
    this.router.navigate(['/majors/delete-major', majorId])
  }


  filterData($event: any){
    this.majors.filter = $event.target.value;
  }

}
