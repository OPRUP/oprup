import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreditNotice, ItemsCreditNotice } from './CreditNotice';

@Injectable({
  providedIn: 'root'
})
export class CreditNoticeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllCreditNotice(): Observable<CreditNotice[]>{
    return this.http.get<CreditNotice[]>(`${this.apiServerUrl}/creditNotice/all`);
  }

  public getCreditNoticeById(creditNoticeId: number): Observable<CreditNotice>{
    return this.http.get<CreditNotice>(`${this.apiServerUrl}/creditNotice/find/${creditNoticeId}`);
  }
  public getItemsByCreditNoticeId(invoiceId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/creditNoticeItem/itemByCreditNotice/${invoiceId}`);
  }


  public addCreditNotice(creditNotice: CreditNotice): Observable<CreditNotice>{
    return this.http.post<CreditNotice>(`${this.apiServerUrl}/creditNotice/add`, creditNotice);
  }
  public addInvoiceItems(invoiceItems){
    return this.http.post(`${this.apiServerUrl}/creditNoticeItem/add`, invoiceItems);
  }

  public updatCreditNotice(creditNotice: CreditNotice): Observable<CreditNotice>{
    return this.http.put<CreditNotice>(`${this.apiServerUrl}/creditNotice/update`, creditNotice);
  }
  public count(): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/creditNotice/count`);
  }

  public deleteCreditNotice(creditNotice: CreditNotice): Observable<CreditNotice>{
    return this.http.put<CreditNotice>(`${this.apiServerUrl}/creditNotice/delete`, creditNotice);
  }
  public deleteCreditNoticeItems(creditNotice: ItemsCreditNotice): Observable<ItemsCreditNotice>{
    return this.http.put<ItemsCreditNotice>(`${this.apiServerUrl}/creditNoticeItem/delete`, creditNotice);
  }

}
