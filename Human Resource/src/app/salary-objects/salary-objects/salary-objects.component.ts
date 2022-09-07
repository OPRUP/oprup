import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { SalaryObject } from '../salary-object';
import { SalaryObjectService } from '../salary-object.service';

@Component({
  selector: 'app-salary-objects',
  templateUrl: './salary-objects.component.html',
  styleUrls: ['./salary-objects.component.scss']
})
export class SalaryObjectsComponent implements OnInit {

  displayedColumns: string[] = [

    'salaryObjectName',
    'description',
    'actions',
  ];
  salaryObjects!: MatTableDataSource<SalaryObject>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private salaryObjectService: SalaryObjectService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllSalaryObjects();
  }



  public getAllSalaryObjects(): void {

    this.salaryObjectService.getSalaryObjects().subscribe((response:SalaryObject[]) => {
      this.salaryObjects = new MatTableDataSource(response);
      this.salaryObjects.paginator =this.paginator;
      this.salaryObjects.sort = this.matSort;
      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

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



  public onEditSalaryObjectById(salaryObjectId: number): void {
    this.router.navigate(['/salary-objects/edit-salary-object', salaryObjectId])
  }


  public onEditToDeleteSalaryObjectById(salaryObjectId: number):void{
    this.router.navigate(['/salary-objects/delete-salary-object', salaryObjectId])
  }

  filterData($event: any){
    this.salaryObjects.filter = $event.target.value;
  }

}

