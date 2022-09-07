import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataTable } from 'simple-datatables';
import { BankService } from 'src/app/banks/bank.service';
import { SimpleDataTable } from 'src/app/shared/data/tables_data/data_table';
import { Qualification } from '../qualification';
import { QualificationService } from '../qualification.service';


@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {
  displayedColumns: string[] = [
    // 'qualificationId',
    'qualificationName',
    'description',
    // 'deleteFlag',
    'actions',
  ];
  qualifications!: MatTableDataSource<Qualification>;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private qualificationService: QualificationService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllQualifications();
  }



  public getAllQualifications(): void {

    this.qualificationService.getQualifications().subscribe((response:Qualification[]) => {
      this.qualifications = new MatTableDataSource(response);
      this.qualifications.paginator =this.paginator;
      this.qualifications.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );

  }


  ngAfterViewInit() {}



  public onEditQualificationById(qualificationId: number): void {
    this.router.navigate(['/qualifications/edit-qualification', qualificationId])
  }


  public onEditToDeleteQualificationIdById(qualificationId: number):void{
    this.router.navigate(['/qualifications/delete-qualification', qualificationId])
  }



  filterData($event: any){
    this.qualifications.filter = $event.target.value;
  }


}
