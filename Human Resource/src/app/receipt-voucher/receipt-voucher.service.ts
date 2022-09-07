import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReceiptVoucher } from './receipt-voucher';

@Injectable({
  providedIn: 'root'
})
export class ReceiptVoucherService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getReceiptVouchers(): Observable<ReceiptVoucher[]>{
    return this.http.get<ReceiptVoucher[]>(`${this.apiServerUrl}/ReceiptVoucher/all`);
  }

  public getReceiptVoucherById(receiptVoucherId: number): Observable<ReceiptVoucher>{
    return this.http.get<ReceiptVoucher>(`${this.apiServerUrl}/ReceiptVoucher/find/${receiptVoucherId}`);
  }


  public addReceiptVoucher(receiptVoucher: ReceiptVoucher): Observable<ReceiptVoucher>{
    return this.http.post<ReceiptVoucher>(`${this.apiServerUrl}/ReceiptVoucher/add`, receiptVoucher);
  }

  public updateReceiptVoucher(receiptVoucher: ReceiptVoucher): Observable<ReceiptVoucher>{
    return this.http.put<ReceiptVoucher>(`${this.apiServerUrl}/ReceiptVoucher/update`, receiptVoucher);
  }

  public deleteReceiptVoucher(receiptVoucher: ReceiptVoucher): Observable<ReceiptVoucher>{
    return this.http.put<ReceiptVoucher>(`${this.apiServerUrl}/ReceiptVoucher/delete`, receiptVoucher);
  }

  // public getAccountByCode(itemsCode: string): Observable<ReceiptVoucher>{
  //   return this.http.get<ReceiptVoucher>(`${this.apiServerUrl}/ReceiptVoucher/findCode/${itemsCode}`);
  // }
  public getChecksById(receiptVoucherId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Check/find/${receiptVoucherId}`);
  }
  public count():any{
    return this.http.get(`${this.apiServerUrl}/ReceiptVoucher/count`)
  }
}
