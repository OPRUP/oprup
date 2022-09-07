import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PaymentPermission } from './payment-permission';
@Injectable({
  providedIn: 'root'
})
export class PaymentPermissionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPaymentPermission(): Observable<PaymentPermission[]>{
    return this.http.get<PaymentPermission[]>(`${this.apiServerUrl}/paymentPermission/all`);
  }

  public getPaymentPermissionById(PaymentPermissionId: number): Observable<PaymentPermission>{
    return this.http.get<PaymentPermission>(`${this.apiServerUrl}/paymentPermission/find/${PaymentPermissionId}`);
  }

  public addPaymentPermission(PaymentPermission: PaymentPermission): Observable<PaymentPermission>{
    return this.http.post<PaymentPermission>(`${this.apiServerUrl}/paymentPermission/add`, PaymentPermission);
  }

  public updatePaymentPermission(PaymentPermission: PaymentPermission): Observable<PaymentPermission>{
    return this.http.put<PaymentPermission>(`${this.apiServerUrl}/paymentPermission/update`, PaymentPermission);
  }

  public deletePaymentPermission(PaymentPermission: PaymentPermission): Observable<PaymentPermission>{
    return this.http.put<PaymentPermission>(`${this.apiServerUrl}/paymentPermission/delete`, PaymentPermission);
  }
}