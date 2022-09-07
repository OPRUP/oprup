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
  selector: 'app-skiprequest',
  templateUrl: './skiprequest.component.html',
  styleUrls: ['./skiprequest.component.scss']
})
export class SkiprequestComponent implements OnInit {

  displayedColumns: string[] = [
    "employeeName",
    "employeeNameAr",
    'skipDate',
    'description',
    'actions',
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

  public onEditSkiprequestById(SkiprequestId: number): void {
    this.router.navigate(['/operation/skiprequest/edit-skiprequest', SkiprequestId])
  }

  public onDeleteSkiprequestById(SkiprequestId: number):void{
    this.router.navigate(['/operation/skiprequest/delete-skiprequest', SkiprequestId])
  }

  filterData($event: any){
    this.skiprequests.filter = $event.target.value;
  }

}

