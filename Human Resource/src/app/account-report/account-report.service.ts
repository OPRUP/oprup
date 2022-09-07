import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Check } from 'angular-feather/icons';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coa } from '../coa/coa';
import { JournalVoucherDetails } from '../jour-voucher/jour-voucher-details';
import { PaymentCheck } from '../payment-voucher/payment-check';
import { PaymentVoucher } from '../payment-voucher/payment-voucher';
import { Checks } from '../receipt-voucher/checks';
import { ReceiptVoucher } from '../receipt-voucher/receipt-voucher';

@Injectable({
  providedIn: 'root'
})
export class AccountReportService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }
//Payment
  public getPaymentCashById(accountId: number): Observable<PaymentVoucher>{
    return this.http.get<PaymentVoucher>(`${this.apiServerUrl}/paymentVoucher/findCash/${accountId}`);
  }

  public getPaymentVendorById(accountId: number): Observable<PaymentVoucher>{
    return this.http.get<PaymentVoucher>(`${this.apiServerUrl}/paymentVoucher/findVendor/${accountId}`);
  }
    public getPaymentCheckById(accountId: number): Observable<PaymentCheck>{
    return this.http.get<PaymentCheck>(`${this.apiServerUrl}/PaymentCheck/findCheck/${accountId}`);
  }

// Receipt
  public getReceiptCashById(accountId: number): Observable<ReceiptVoucher>{
    return this.http.get<ReceiptVoucher>(`${this.apiServerUrl}/ReceiptVoucher/findCash/${accountId}`);
  }
  public getReceiptVendorById(accountId: number): Observable<ReceiptVoucher>{
    return this.http.get<ReceiptVoucher>(`${this.apiServerUrl}/ReceiptVoucher/findVendor/${accountId}`);
  }
  
  public getReceiptCheckById(accountId: number): Observable<Checks>{
    return this.http.get<Checks>(`${this.apiServerUrl}/Check/findCheck/${accountId}`);
  }

  // Journal
  public getJourById(accountId: number): Observable<JournalVoucherDetails[]>{
    return this.http.get<JournalVoucherDetails[]>(`${this.apiServerUrl}/journalVoucherDetails/findJour/${accountId}`);
  }
  public getAccountByParent(accountId: number): Observable<Coa[]>{
    return this.http.get<Coa[]>(`${this.apiServerUrl}/chartAccount/findParent/${accountId}`);
  }

}
