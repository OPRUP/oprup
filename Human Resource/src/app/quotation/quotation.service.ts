import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quotation, QuotationItem } from './quotation';
// import { QuotationItem } from './quotationItem';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {  }

  public getQuotation(): Observable<Quotation[]>{
    return this.http.get<Quotation[]>(`${this.apiServerUrl}/quotation/all`);
  }


  public addQuotation(quotation: Quotation): Observable<Quotation>{

    return this.http.post<Quotation>(`${this.apiServerUrl}/quotation/add`, quotation);
  }


  public getQuotationById(quotationId: number): Observable<Quotation>{
    return this.http.get<Quotation>(`${this.apiServerUrl}/quotation/find/${quotationId}`);
  }


  public getQuotationByItem(quotationId: number): Observable<Quotation>{
    return this.http.get<Quotation>(`${this.apiServerUrl}/quotationItem/findCode/${quotationId}`);
  }



  public addQuotationItem(quotationItem: QuotationItem): Observable<QuotationItem>{
    return this.http.post<QuotationItem>(`${this.apiServerUrl}/quotationItem/add`, quotationItem);
  }


  public updateQuotation(QuotationId: any): Observable<Quotation>{
    return this.http.put<Quotation>(`${this.apiServerUrl}/quotation/update`, QuotationId);
  }




  public deleteQuotation(QuotationId): Observable<Quotation>{

    return this.http.put<Quotation>(`${this.apiServerUrl}/quotation/delete`, QuotationId);
  }

  // public getQuotationItemByQuotationId(quotationId: number): Observable<QuotationItem>{
  //   return this.http.put<QuotationItem>(`${this.apiServerUrl}/quotationItem/quotation-item/${quotationId}`);
  // }


  // public getQuotationItemByquotationId(quotationId: number): Observable<QuotationItem>{
  //   return this.http.get<QuotationItem>(`${this.apiServerUrl}/quotationItem/quotation-item/${quotationId}`);
  //   }
  public getQuotationItemByQuotationId(quotationId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/quotationItem/findCode/${quotationId}`);
    }

    // public deleteQuotationItem(quotationItemId: number): Observable<QuotationItem>{
    //   return this.http.put<QuotationItem>(`${this.apiServerUrl}/quotationItem/delete`, quotationItemId);
    // }


    // public deleteQuotationItem(quotationId: number): Observable<QuotationItem>{
    //   return this.http.put<QuotationItem>(`${this.apiServerUrl}/quotationItem/delete`, quotationId);
    // }

  public deleteQuotationItem(quotationItemId: number): Observable<QuotationItem>{
    return this.http.put<QuotationItem>(`${this.apiServerUrl}/quotationItem/delete`, quotationItemId);
  }


  public updateQuotationItem(quotationItemId: any): Observable<QuotationItem>{
    return this.http.put<QuotationItem>(`${this.apiServerUrl}/quotationItem/update`, quotationItemId);
  }


   public getCount(): any{
    return this.http.get(`${this.apiServerUrl}/quotation/getCount`);
  }


}
