import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Visa } from '../visa';
import { VisaService } from '../visa.service';

@Component({
  selector: 'app-print-visa',
  templateUrl: './print-visa.component.html',
  styleUrls: ['./print-visa.component.scss']
})
export class PrintVisaComponent implements OnInit {

  displayedColumns: string[] = [
    // 'companylId',
    'approvalNumber',
    'numberOfProvidedVisas',
    'jobs',
    'nationality',
    'gender',
    'approvalDate',
    'copy',
  ];
  visas!: MatTableDataSource<Visa>;


  constructor(private Service: VisaService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllCompanies();
  }



  public getAllCompanies(): void {

    this.Service.get().subscribe((response:Visa[]) => {
      this.visas = new MatTableDataSource(response);
console.log("hello",response)
      },
      (error)  =>
      {
        console.log(error);
      }
      );
  }
  printPage() {

    window.print();
  }
}
