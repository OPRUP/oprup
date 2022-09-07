import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Skiprequest } from '../Skiprequest';
import { SkiprequestService } from '../skiprequest.service';

@Component({
  selector: 'app-print-skiprequest',
  templateUrl: './print-skiprequest.component.html',
  styleUrls: ['./print-skiprequest.component.scss']
})
export class PrintSkiprequestComponent implements OnInit {

  displayedColumns: string[] = [
    "employeeName",
    "employeeNameAr",
    'skipDate',
    'description',

  ];



  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  skiprequests!: MatTableDataSource<Skiprequest>;

  constructor(private skiprequestService:SkiprequestService ,
     private router: Router ,
      private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllSkiprequests();
  }


 public getAllSkiprequests(): void {

    this.skiprequestService.getAllSkiprequest().subscribe((response:Skiprequest[]) => {
      this.skiprequests = new MatTableDataSource(response);
      this.skiprequests.paginator =this.paginator;
      this.skiprequests.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
        }

  ngAfterViewInit() {}


  filterData($event: any){
    this.skiprequests.filter = $event.target.value;
  }

  printPage() {

    window.print();
  }


}



