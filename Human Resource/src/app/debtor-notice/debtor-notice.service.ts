import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from '../vendor/Vendor';
import { DebtorNotice } from './DebtorNotice';

@Injectable({
  providedIn: 'root'
})
export class DebtorNoticeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllDebtorNotice(): Observable<DebtorNotice[]>{
    return this.http.get<DebtorNotice[]>(`${this.apiServerUrl}/debtorNotice/all`);
  }

  public getDebtorNoticeById(debtorNoticeId: number): Observable<DebtorNotice>{
    return this.http.get<DebtorNotice>(`${this.apiServerUrl}/debtorNotice/find/${debtorNoticeId}`);
  }

  public getItemsByDebtorNoticeId(invoiceId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/debtorNoticeItem/itemByDebtorNotice/${invoiceId}`);
  }
  public addDebtorNotice(debtorNotice: any): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/debtorNotice/add`, debtorNotice);
  }
  public addInvoiceItems(invoiceItems){
    return this.http.post(`${this.apiServerUrl}/debtorNoticeItem/add`, invoiceItems);
  }

  public updatDebtorNotice(debtorNotice: DebtorNotice): Observable<DebtorNotice>{
    return this.http.put<DebtorNotice>(`${this.apiServerUrl}/debtorNotice/update`, debtorNotice);
  }

  public deleteDebtorNotice(debtorNotice: DebtorNotice): Observable<DebtorNotice>{
    return this.http.put<DebtorNotice>(`${this.apiServerUrl}/debtorNotice/delete`, debtorNotice);
  }
  public deleteItemByDebtorNoticeId(debtorNotice): Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/debtorNoticeItem/delete`, debtorNotice);
  }
  public count(): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/debtorNotice/count`);
  }
}
