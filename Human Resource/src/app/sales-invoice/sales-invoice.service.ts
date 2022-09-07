import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {InvoiceItems, SalesInvoice} from './sales-invoice'
@Injectable({
  providedIn: 'root'
})
export class salesInvoiceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllInvoices(): Observable<SalesInvoice[]>{
    return this.http.get<SalesInvoice[]>(`${this.apiServerUrl}/salesInvoice/all`);
  }

  public getInvoiceById(invoiceId: number): Observable<SalesInvoice>{
    return this.http.get<SalesInvoice>(`${this.apiServerUrl}/salesInvoice/find/${invoiceId}`);
  }
  public getInvoiceItemsByInvocieId(invoiceId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/salesInvoiceItem/itemBySalesInvoice/${invoiceId}`);
  }

  public addInvoice(invoice: SalesInvoice): Observable<SalesInvoice>{
    return this.http.post<SalesInvoice>(`${this.apiServerUrl}/salesInvoice/add`, invoice);
  }
  public addInvoiceItems(invoiceItems: InvoiceItems): Observable<InvoiceItems>{
    return this.http.post<InvoiceItems>(`${this.apiServerUrl}/salesInvoiceItem/add`, invoiceItems);
  }

  public updateInvoice(invoiceId: any): Observable<SalesInvoice>{
    return this.http.put<SalesInvoice>(`${this.apiServerUrl}/salesInvoice/update`, invoiceId);
  }

  public deleteInvoice(invoiceId: number): Observable<SalesInvoice>{
    return this.http.put<SalesInvoice>(`${this.apiServerUrl}/salesInvoice/delete`, invoiceId);
  }

  public deleteInvoiceItem(invoiceItemId: number): Observable<InvoiceItems>{
    return this.http.put<InvoiceItems>(`${this.apiServerUrl}/salesInvoiceItem/delete`, invoiceItemId);
  }
  public countSalesInvoice(): any{
    return this.http.get(`${this.apiServerUrl}/salesInvoice/count` );
  }




}
