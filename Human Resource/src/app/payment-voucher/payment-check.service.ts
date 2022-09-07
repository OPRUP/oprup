import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentCheck } from './payment-check';

@Injectable({
  providedIn: 'root'
})
export class PaymentCheckService {


  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getCheckss(): Observable<PaymentCheck[]>{
    return this.http.get<PaymentCheck[]>(`${this.apiServerUrl}/PaymentCheck/all`);
  }

  public getChecksByPaymentVoucherId(receiptVoucherId: number): Observable<PaymentCheck>{
    return this.http.get<PaymentCheck>(`${this.apiServerUrl}/PaymentCheck/finds/${receiptVoucherId}`);
  }


  public addChecks(receiptVoucher: PaymentCheck): Observable<PaymentCheck>{
    return this.http.post<PaymentCheck>(`${this.apiServerUrl}/PaymentCheck/add`, receiptVoucher);
  }

  public updateChecks(receiptVoucher: PaymentCheck): Observable<PaymentCheck>{
    return this.http.put<PaymentCheck>(`${this.apiServerUrl}/PaymentCheck/update`, receiptVoucher);
  }

  public deleteChecks(receiptVoucher: PaymentCheck): Observable<PaymentCheck>{
    return this.http.put<PaymentCheck>(`${this.apiServerUrl}/PaymentCheck/delete`, receiptVoucher);
  }

  public getCheckById(paymentVoucherId: number): Observable<PaymentCheck>{
    return this.http.get<PaymentCheck>(`${this.apiServerUrl}/PaymentCheck/finds/${paymentVoucherId}`);
  }
}
