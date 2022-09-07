import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { PaymentPermission } from '../payment-permission';
import { PaymentPermissionService } from '../payment-permission.service';

@Component({
  selector: 'app-payment-permission',
  templateUrl: './payment-permission.component.html',
  styleUrls: ['./payment-permission.component.scss']
})
export class PaymentPermissionComponent implements OnInit {

  displayedColumns: string[] = [
    'paymentVoucherId',
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
        paymentVouchers!: MatTableDataSource<PaymentPermission>;
        @ViewChild('paginator') paginator!: MatPaginator;
        @ViewChild(MatSort) matSort!: MatSort;
    
        constructor(private paymentPermissionService : PaymentPermissionService,
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
          this.paymentPermissionService.getPaymentPermission().subscribe(
            (response:PaymentPermission[]) => {
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
          this.router.navigate(['/accounts/paymentVouchers/edit-paymentVoucher', paymentVoucherId])
        }
        public onDeletePaymentVoucherById(paymentVoucherId: number):void{
          this.router.navigate(['/accounts/paymentPermission/delete-paymentPermission', paymentVoucherId])
        }
        public onPrintPaymentVoucherById(paymentVoucherId: number):void{
          this.router.navigate(['/accounts/paymentPermission/print-paymentPermission', paymentVoucherId])
        }
        filterData($event: any){
          this.paymentVouchers.filter = $event.target.value;
    
        }
      }
      function ngAfterViewInit() {
        throw new Error('Function not implemented.');
      }
    