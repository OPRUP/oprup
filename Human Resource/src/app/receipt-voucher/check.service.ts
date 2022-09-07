import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Checks } from './checks';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getCheckss(): Observable<Checks[]>{
    return this.http.get<Checks[]>(`${this.apiServerUrl}/Check/all`);
  }

  public getChecksByReceiptVoucherId(receiptVoucherId: number): Observable<Checks>{
    return this.http.get<Checks>(`${this.apiServerUrl}/Check/find/${receiptVoucherId}`);
  }


  public addChecks(receiptVoucher: Checks): Observable<Checks>{
    return this.http.post<Checks>(`${this.apiServerUrl}/Check/add`, receiptVoucher);
  }

  public updateChecks(receiptVoucher: Checks): Observable<Checks>{
    return this.http.put<Checks>(`${this.apiServerUrl}/Check/update`, receiptVoucher);
  }

  public deleteChecks(receiptVoucher: Checks): Observable<Checks>{
    return this.http.put<Checks>(`${this.apiServerUrl}/Check/delete`, receiptVoucher);
  }
}