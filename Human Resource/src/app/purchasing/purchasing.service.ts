import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchasing } from './purchasing';
import { PurchasingItem } from './purchasing-item';

@Injectable({
  providedIn: 'root'
})
export class PurchasingService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getAllPurchasings(): Observable<Purchasing[]>{
    return this.http.get<Purchasing[]>(`${this.apiServerUrl}/purchasing/all`);
  }


  public getInvoiceItemById(invoiceId: number): Observable<PurchasingItem>{
    return this.http.get<PurchasingItem>(`${this.apiServerUrl}/salesInvoiceItem/itemBySalesInvoice/${invoiceId}`);
    }

  public getPurchasingById(purchasingInvoiceId: number): Observable<Purchasing>{
    return this.http.get<Purchasing>(`${this.apiServerUrl}/purchasing/find/${purchasingInvoiceId}`);
  }

  public getPurchasingItemsById(purchasingItemId: number): Observable<PurchasingItem>{
    return this.http.get<PurchasingItem>(`${this.apiServerUrl}/purchasingItem/itemByPurcxhasing/${purchasingItemId}`);
  }

  public getPurchasingItemsByPurchasingInvoiceId(purchasingInvoiceId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/purchasingItem/itemByPurcxhasing/${purchasingInvoiceId}`);
  }

  public addPurchasing(purchasing: Purchasing): Observable<Purchasing>{
    return this.http.post<Purchasing>(`${this.apiServerUrl}/purchasing/add`, purchasing);
  }
  public addPurchasingItem(purchasingItem: PurchasingItem): Observable<PurchasingItem>{
    return this.http.post<PurchasingItem>(`${this.apiServerUrl}/purchasingItem/add`, purchasingItem);
  }

  // public updatePurchasing(purchasingInvoiceId: number): Observable<Purchasing>{
  //   return this.http.put<Purchasing>(`${this.apiServerUrl}/purchasing/update`, purchasingInvoiceId);
  // }

  public updatePurchasing(purchasingInvoiceId: any): Observable<Purchasing>{
    return this.http.put<Purchasing>(`${this.apiServerUrl}/purchasing/update`, purchasingInvoiceId);
  }
  public updatePurchasingItem(purchasingItemId: any): Observable<PurchasingItem>{
    return this.http.put<PurchasingItem>(`${this.apiServerUrl}/purchasingItem/update`, purchasingItemId);
  }
  public deletePurchasing(purchasingInvoiceId: number): Observable<Purchasing>{
    return this.http.put<Purchasing>(`${this.apiServerUrl}/purchasing/delete`, purchasingInvoiceId);
  }

  public deletePurchasingItem(purchasingItemId: number): Observable<PurchasingItem>{
    return this.http.put<PurchasingItem>(`${this.apiServerUrl}/purchasingItem/delete`, purchasingItemId);
  }

  public countPurchasing(): any{
    return this.http.get(`${this.apiServerUrl}/purchasing/count` );
  }


}
