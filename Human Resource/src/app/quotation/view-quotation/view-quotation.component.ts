import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { QuotationService } from '../quotation.service';
import { Quotation } from '../quotation';
import { Employee } from 'src/app/employees/employee';

@Component({
  selector: 'app-view-quotation',
  templateUrl: './view-quotation.component.html',
  styleUrls: ['./view-quotation.component.scss']
})
export class ViewQuotationComponent implements OnInit {
  displayedColumns: string[] = [
    'quotationNumber',
    'date',
    'paymentWay',
   'employeeName',
   'customerName',
   'actions',
  ];

@ViewChild('paginator') paginator!: MatPaginator;
@ViewChild(MatSort) matSort!: MatSort;

employees!: Employee[];
quotations;
constructor(private quotationService : QuotationService,
  private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
     }
  ngOnInit(): void {
    this.getAllQuotation();
  }
  public getAllQuotation(): void {
    this.quotationService.getQuotation().subscribe(
      (response) => {
      this.quotations= response;

      console.log('xsxssx',this.quotations)

      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }

  ngAfterViewInit() {}

public onEditQuotationById(quotationId: number): void {
  this.router.navigate(['/sales/view-quotation/edit-quotation', quotationId])
}


public onEditToDeleteQuotationById(quotationId: number):void{
  this.router.navigate(['/sales/view-quotation/delete-quotation', quotationId])
}
public onPrintQuotationById(quotationId: number):void
{
  this.router.navigate(['/sales/view-quotation/print-quotation',quotationId])
}

filterData($event: any){
  this.quotations.filter = $event.target.value;

}

}

function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}
