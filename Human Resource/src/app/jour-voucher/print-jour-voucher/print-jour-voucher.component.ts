import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { InvoiceItemsSalesInvoice } from 'src/app/sales-invoice/salesInvoiceItems';
import { JournalVoucherDetails } from '../jour-voucher-details';
import { JournalVoucherService } from '../jour-voucher.service';


@Component({
  selector: 'app-print-jour-voucher',
  templateUrl: './print-jour-voucher.component.html',
  styleUrls: ['./print-jour-voucher.component.scss']
})
export class PrintJourVoucherComponent implements OnInit {
  constructor(
    private journalVoucherService: JournalVoucherService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    private fb: FormBuilder) {
      this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
    }
    displayedColumns = [
      'accountCode',
      'accountName',
      'debit',
      'credit',
      'description',
      'costCenter',
    ];
    @ViewChild('paginator') paginator!: MatPaginator;
    @ViewChild(MatSort) matSort!: MatSort;
    details!: MatTableDataSource<JournalVoucherDetails>;
    journalVoucherData;
    voucherId = this.activateRoute.snapshot.params['id'];
    notFound="لا يوجد";
  ngOnInit(): void {
    this.getJournalVoucheryId()
  }
  
  getJournalVoucheryId(){
      this.journalVoucherService.getJournalVoucherById(this.voucherId).subscribe(data=>{
      this.journalVoucherData=data
      this.journalVoucherService.getJournalVoucherDetalisByjournalVoucherId(data.journalVoucherId).subscribe(response=>{
      this.details=response
      console.log(this.details);
      
      })    
    })
  }




  printPage(){
    window.print()
  }
  }

 


  

  




