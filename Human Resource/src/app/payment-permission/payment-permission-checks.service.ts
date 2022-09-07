import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PaymentCheck } from '../payment-voucher/payment-check';
@Injectable({
  providedIn: 'root'
})
export class PaymentChecksPermissionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPaymentChecksPermission(): Observable<PaymentCheck[]>{
    return this.http.get<PaymentCheck[]>(`${this.apiServerUrl}/PaymentCheckPermission/all`);
  }

  public getPaymentChecksPermissionById(PaymentChecksPermissionId: number): Observable<PaymentCheck>{
    return this.http.get<PaymentCheck>(`${this.apiServerUrl}/PaymentCheckPermission/finds/${PaymentChecksPermissionId}`);
  }

  public addPaymentChecksPermission(PaymentChecksPermission: PaymentCheck): Observable<PaymentCheck>{
    return this.http.post<PaymentCheck>(`${this.apiServerUrl}/PaymentCheckPermission/add`, PaymentChecksPermission);
  }

  public updatePaymentChecksPermission(PaymentChecksPermission: PaymentCheck): Observable<PaymentCheck>{
    return this.http.put<PaymentCheck>(`${this.apiServerUrl}/PaymentCheckPermission/update`, PaymentChecksPermission);
  }

  public deletePaymentChecksPermission(PaymentChecksPermission: PaymentCheck): Observable<PaymentCheck>{
    return this.http.put<PaymentCheck>(`${this.apiServerUrl}/PaymentCheckPermission/delete`, PaymentChecksPermission);
  }
}