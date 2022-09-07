import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ReceiptVoucher } from '../receipt-voucher';
import { ReceiptVoucherService } from '../receipt-voucher.service';

@Component({
  selector: 'app-list-receipt-voucher',
  templateUrl: './list-receipt-voucher.component.html',
  styleUrls: ['./list-receipt-voucher.component.scss']
})
export class ListReceiptVoucherComponent implements OnInit {

  displayedColumns: string[] = [
    'receiptVoucherId',
          // 'paymentWay',
          'description',
          'cashAmount',
          // 'checkNumber',
          // 'dateCheck',
          // 'checkValue',
          // 'fundAccount',
          // 'checkAccount',
          'voucherDate',
    
          // 'bankName',
      'actions'
    
    
        ]
        paymentVouchers!: MatTableDataSource<ReceiptVoucher>;
        @ViewChild('paginator') paginator!: MatPaginator;
        @ViewChild(MatSort) matSort!: MatSort;
    
        constructor(private receiptVoucherService : ReceiptVoucherService,
      private router: Router, private translate: TranslateService) {
            this.translate.setDefaultLang('ar');
            const lang = localStorage.getItem('lang')  || 'ar';
            this.translate.use(lang);
            document.documentElement.lang = lang;
           }
    
        ngOnInit(): void {
          this.getAllPaymentVoucher();
        }
    
        public getAllPaymentVoucher(): void {
          this.receiptVoucherService.getReceiptVouchers().subscribe(
            (response:ReceiptVoucher[]) => {
            this.paymentVouchers= new MatTableDataSource(response);
            this.paymentVouchers.paginator =this.paginator;
            this.paymentVouchers.sort = this.matSort;
    
            },
            (error)  =>
              {
                console.log(error);
                Swal.fire('Error !', 'Error in loading data !', 'error');
              }
            );
    
        }
    
        ngAfterViewInit() {}
    
        public onEditPaymentVoucherById(paymentVoucherId: number): void {
          this.router.navigate(['/accounts/receipt-voucher/edit-receipt-voucher', paymentVoucherId])
        }
        public onEditToDeletePaymentVoucherById(paymentVoucherId: number):void{
          this.router.navigate(['/accounts/receipt-voucher/delete-receipt-voucher', paymentVoucherId])
        }
        public onPrintToDeletePaymentVoucherById(paymentVoucherId: number):void{
          this.router.navigate(['/accounts/receipt-voucher/print-receipt-voucher', paymentVoucherId])
        }
        filterData($event: any){
          this.paymentVouchers.filter = $event.target.value;
    
        }
      }
      function ngAfterViewInit() {
        throw new Error('Function not implemented.');
      }