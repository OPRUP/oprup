import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PaymentVoucher } from './payment-voucher';
@Injectable({
  providedIn: 'root'
})
export class PaymentVoucherService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPaymentVoucher(): Observable<PaymentVoucher[]>{
    return this.http.get<PaymentVoucher[]>(`${this.apiServerUrl}/paymentVoucher/all`);
  }

  public getPaymentVoucherById(paymentVoucherId: number): Observable<PaymentVoucher>{
    return this.http.get<PaymentVoucher>(`${this.apiServerUrl}/paymentVoucher/find/${paymentVoucherId}`);
  }

  public addPaymentVoucher(paymentVoucher: PaymentVoucher): Observable<PaymentVoucher>{
    return this.http.post<PaymentVoucher>(`${this.apiServerUrl}/paymentVoucher/add`, paymentVoucher);
  }

  public updatePaymentVoucher(paymentVoucher: PaymentVoucher): Observable<PaymentVoucher>{
    return this.http.put<PaymentVoucher>(`${this.apiServerUrl}/paymentVoucher/update`, paymentVoucher);
  }

  public deletePaymentVoucher(paymentVoucher: PaymentVoucher): Observable<PaymentVoucher>{
    return this.http.put<PaymentVoucher>(`${this.apiServerUrl}/paymentVoucher/delete`, paymentVoucher);
  }
  public count():any{
    return this.http.get(`${this.apiServerUrl}/paymentVoucher/count`)
  }
}