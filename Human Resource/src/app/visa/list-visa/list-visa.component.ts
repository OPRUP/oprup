import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Visa } from '../visa';
import { VisaService } from '../visa.service';

@Component({
  selector: 'app-list-visa',
  templateUrl: './list-visa.component.html',
  styleUrls: ['./list-visa.component.scss']
})
export class ListVisaComponent implements OnInit {

  displayedColumns: string[] = [
    // 'companylId',
    'approvalNumber',
    'numberOfProvidedVisas',
    'jobs',
    'nationality',
    'gender',
    'approvalDate',
    'copy',
    'actions',
  ];
  visas!: MatTableDataSource<Visa>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private service: VisaService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCompanies();
  }



  public getAllCompanies(): void {

    this.service.get().subscribe((response:Visa[]) => {
      this.visas = new MatTableDataSource(response);
      this.visas.paginator =this.paginator;
      this.visas.sort = this.matSort;
      },
      (error)  =>
      {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }
      );
  }


  ngAfterViewInit() {}



  public onEditCompanyById(id: number): void {
    this.router.navigate(['/international/visa/edit-visa', id])
  }


  public onDeleteCompanyById(id: number):void{
    this.router.navigate(['/international/visa/delete-visa', id])
  }

  filterData($event: any){
    this.visas.filter = $event.target.value;
  }
}
