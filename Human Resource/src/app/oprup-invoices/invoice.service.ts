import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private router: Router,

    ) { }

  public getInvoices(): Observable<Invoice[]>{
    return this.http.get<Invoice[]>(`${this.apiServerUrl}/qrcode/all`);
  }

  public getInvoiceById(invoiceId: number): Observable<Invoice>{
    return this.http.get<Invoice>(`${this.apiServerUrl}/qrcode/find/${invoiceId}`);
  }

  // public showQRCode(invoices: Invoice): Observable<Invoice>{
  //   return this.http.get<Invoice>(`${this.apiServerUrl}/qrcode/showQRCode`, invoices);
  // }

   public showQRCode(customerName: string, taxNumber: string,invoiceDate: string,price: string,tax: string): Observable<Invoice>{
    return this.http.get<Invoice>(`${this.apiServerUrl}/qrcode/generateQRCode/${customerName}/${taxNumber}/${invoiceDate}/${price}/${tax}`);
  }


  public addInvoice(invoice: Invoice): Observable<Invoice>{
    return this.http.post<Invoice>(`${this.apiServerUrl}/qrcode/add`, invoice);
  }


}
